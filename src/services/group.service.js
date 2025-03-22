import Group from "../models/Group.js";

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
