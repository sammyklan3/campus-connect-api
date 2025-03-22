import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { isValidEmail } from "../utils/validator.js";

export const registerUser = async ({
    fullName,
    email,
    password,
    campus,
    course,
    yearOfStudy,
}) => {
    // Check if the fields are not empty
    const requiredFields = {
        fullName,
        email,
        password,
        campus,
        course,
        yearOfStudy,
    };
    
    for (const [key, value] of Object.entries(requiredFields)) {
        if (!value) {
            throw new Error(`${key} is required`);
        }
    }

    if (!isValidEmail(email)) {
        throw new Error("Invalid email address");
    }

    // Check if the email is already registered
    if (await User.findOne({ where: { email } })) {
        throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            campus,
            course,
            yearOfStudy,
        });

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT secret is not set in environment variables");
        }

        return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
    } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
    }
};

export const loginUser = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    if (!isValidEmail(email)) {
        throw new Error("Invalid email address");
    }

    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid email or password");
    }

    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
};
