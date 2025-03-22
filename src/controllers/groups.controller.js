import {
    createGroup,
    getAllGroups,
    getGroup,
    addMember,
} from "../services/group.service.js";

// Create group
export const create = async (req, res) => {
    try {
        const group = await createGroup(req.body);
        res.status(201).json({ group });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all groups
export const getAll = async (req, res) => {
    try {
        const groups = await getAllGroups();
        res.status(200).json({ groups });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get group details
export const get = async (req, res) => {
    try {
        const group = await getGroup(req.params.id);
        res.status(200).json({ group });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add a member to a group
export const addMemberToGroup = async (req, res) => {
    try {
        await addMember(req.params.groupId, req.body.userId, req.user.id);
        res.status(200).json({ message: "Member added to group" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
