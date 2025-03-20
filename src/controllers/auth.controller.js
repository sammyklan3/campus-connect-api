import { loginUser, registerUser } from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({ message: "User successfully registered", user });
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
