import Student from './../models/student.schema.js';


export const createStudent = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const student = await Student.create({
            name,
            email
        });

        return res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};