import {
    createGroup,
    getAllGroups,
    getGroup,
    addMember,
    getMembers,
    removeMember,
    getMessages,
    postMessage,
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

// Get all members of a group
export const getMembersOfGroup = async (req, res) => {
    try {
        const members = await getMembers(req.params.groupId);
        res.status(200).json({ members });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Remove a member from a group
export const removeMemberFromGroup = async (req, res) => {
    try {
        await removeMember(req.params.groupId, req.params.userId, req.user.id);
        res.status(200).json({ message: "Member removed from group" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all messages in a group
export const getMessagesInGroup = async (req, res) => {
    try {
        const messages = await getMessages(req.params.groupId, req.user.id);
        res.status(200).json({ messages });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Post a message in a group
export const postMessageInGroup = async (req, res) => {
    try {
        await postMessage(req.params.groupId, req.user.id, req.body.content);
        res.status(200).json({ message: "Message posted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
