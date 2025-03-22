import { createGroup, getAllGroups, getGroup } from "../services/group.service.js";

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