import { loginUser, registerUser, getUserById } from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
        const token = await registerUser(req.body);
        res.status(201).json({
            message: "User successfully registered",
            token,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const token = await loginUser(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const me = async (req, res) => {
    try {
        const user = await getUserById(req.user.id);
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};