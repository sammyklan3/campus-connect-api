import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async ({ email, password }) => {
    // Check if the fields are not empty
    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    // Check if the email is already registered
    if(await User.findOne({ where: { email } })) {
        throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({ email, password: hashedPassword });
};

export const loginUser = async ({ email, password }) => {

    if (!email || !password) {
        throw new Error("Email and password are required");
    }
    
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid email or password");
    }

    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
};
