import Mentor from "../models/mentor.schema.js";


export const createMentor = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const mentor = await Mentor.create({
            name,
            email
        });

        return res.status(201).json({
            success: true,
            message: "Mentor created successfully",
            data: mentor
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};