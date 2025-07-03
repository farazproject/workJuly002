const User = require('../models/user');

exports.createUser = async (req, res) => {

    const {name, email, role} = req.body;
    console.log("Request body:", req.body);

    try {
        const newUser = new User({ name, email, role });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.updateUser = async (req, res) => {


    try {
        const { id } = req.params;
        const { name, email, role } = req.body;
        console.log("Request body:", req.body, req.params);

        const user = await User.findById(id);
        if (!user){
            return res.status(404).json({ message: "User not found" });
        }
        if (name) user.name = name;
        if (email) user.email = email;
        if (role) user.role = role;

        await user.save();
        res.status(200).json({ message: "User updated successfully", user });


    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(400).json({ message: "Internal server error" });
    }
}

exports.getUserById = async (req, res) => {


    try {
        const {id} = req.params;
        console.log("Request params:", req.params);
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User retrieved successfully", user });

    }

    catch (error) {
        console.error("Error getting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json({ message: "Users retrieved successfully", users });


    }




    catch (error) {
        console.error("Error getting all users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        console.log("Request params:", req.params);
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully", user });



    }

    catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}