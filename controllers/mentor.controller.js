import Mentor from "../models/mentor.schema.js";
import Student from "../models/student.schema.js";


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

export const assignStudents = async (req, res) => {
    try {
        const { mentorId } = req.params;
        const { studentIds } = req.body;

        const mentor = await Mentor.findById(mentorId);

        if (!mentor) {
            return res.status(404).json({
                success: false,
                message: "Mentor not found"
            });
        }

        const assignedStudents = [];

        for (const studentId of studentIds) {

            const student = await Student.findById(studentId);

            if (!student) {
                continue;
            }

            if (student.currentMentor === null) {

                student.currentMentor = mentorId;
                await student.save();

                mentor.students.push(student._id);

                assignedStudents.push(student._id);
            }
        }

        await mentor.save();

        return res.status(200).json({
            success: true,
            message: "Students assigned successfully",
            assignedStudents
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
	

export const getStudents = async (req, res) => {
    try {

        const { mentorId } = req.params;

        const students = await Student.find({
            currentMentor: mentorId
        });

        return res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

