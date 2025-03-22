import Group from "../models/Group.js";
import GroupMember from "../models/GroupMember.js";
import User from "../models/User.js";

// Create group
export const createGroup = async (group) => {
    const requiredFields = {
        name: group.name,
        description: group.description,
        category: group.category,
        tags: group.tags,
        createdBy: group.createdBy,
    };

    for (const [key, value] of Object.entries(requiredFields)) {
        if (!value) {
            throw new Error(`${key} is required`);
        }
    }

    // Ensure tags is an array
    group.tags = Array.isArray(group.tags) ? group.tags : [group.tags];

    try {
        return await Group.create(group);
    } catch (error) {
        throw new Error(`Failed to create group: ${error.message}`);
    }
};

// Get all groups
export const getAllGroups = async () => {
    try {
        return await Group.findAll();
    } catch (error) {
        throw new Error(`Failed to get groups: ${error.message}`);
    }
};

// Get group details
export const getGroup = async (id) => {
    try {
        return await Group.findByPk(id);
    } catch (error) {
        throw new Error(`Failed to get group: ${error.message}`);
    }
};

export const addMember = async (groupId, userId, id) => {
    const requiredFields = { groupId, userId };

    for (const [key, value] of Object.entries(requiredFields)) {
        if (!value) {
            throw new Error(`${key} is required`);
        }
    }

    try {
        const group = await Group.findByPk(groupId);
        if (!group) {
            throw new Error("Group not found");
        }

        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error("User not found");
        }

        // Fetch all admins of the group
        const admins = await GroupMember.findAll({
            where: { groupId, role: "admin" },
            attributes: ["userId"], // Get only userId column
        });

        const adminIds = admins.map((admin) => admin.userId); // Convert to an array of IDs

        // Check if the user is the group creator or an admin
        if (group.createdBy !== id && !adminIds.includes(id)) {
            throw new Error(
                "You do not have permission to add a member to the group"
            );
        }

        // Check if the userId is same as the id of the user making the request
        if (userId === id) {
            throw new Error("You cannot add yourself as a member of the group");
        }

        // Check if the user is already a member of the group
        const member = await GroupMember.findOne({
            where: { groupId, userId },
        });
        if (member) {
            throw new Error("User is already a member of the group");
        }

        await GroupMember.create({ groupId, userId });
        return group;
    } catch (error) {
        throw new Error(`Failed to add member: ${error.message}`);
    }
};
