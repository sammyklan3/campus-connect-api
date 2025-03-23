import User from "../models/User.js";

// Update user profile using id
export const updateUserById = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error("User not found");
    }

    try {
        await user.update(data);
        return user;
    } catch (error) {
        throw new Error(`Failed to update user: ${error.message}`);
    }
};

// Delete user profile using id
export const deleteUserById = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error("User not found");
    }

    try {
        await user.destroy();
    } catch (error) {
        throw new Error(`Failed to delete user: ${error.message}`);
    }
};
