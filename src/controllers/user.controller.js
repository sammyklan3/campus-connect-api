import {
    updateUserById,
    deleteUserById,
} from "../services/user.service.js";

export const updateUser = async (req, res) => {
    try {
        const user = await updateUserById(req.user.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await deleteUserById(req.user.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};