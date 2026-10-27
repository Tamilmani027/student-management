import Student from './../models/student.schema.js';
import Mentor from './../models/mentor.schema.js';


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

export const getUnassignedStudents = async (req,res)=>{
	try{
		const students=await Student.find({currentMentor:null});

		if (students.length===0){
			return res.status(404).json({
				success:false,
				message:'No student found'
			});
		}
		return res.status(200).json({
			success:true,
			count:students.length,
			data:students
			
		});

	}
	catch (error){
		return res.status(500).json({
			message:error.message
		});
	}

};

export const assignMentor = async (req, res) => {
    try {

        const { studentId } = req.params;
        const { mentorId } = req.body;

        const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        const mentor = await Mentor.findById(mentorId);

        if (!mentor) {
            return res.status(404).json({
                success: false,
                message: "Mentor not found"
            });
        }

        if (student.currentMentor) {

            student.previousMentors.push(student.currentMentor);

            const oldMentor = await Mentor.findById(student.currentMentor);

            if (oldMentor) {
                oldMentor.students = oldMentor.students.filter(
                    id => id.toString() !== studentId
                );

                await oldMentor.save();
            }
        }

        student.currentMentor = mentorId;

        if (!mentor.students.includes(studentId)) {
            mentor.students.push(studentId);
        }

        await student.save();
        await mentor.save();

        return res.status(200).json({
            success: true,
            message: "Mentor assigned successfully",
            student
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getPreviousMentors = async (req, res) => {
    try {

        const { studentId } = req.params;

        const student = await Student.findById(studentId)
            .populate("previousMentors");

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        return res.status(200).json({
            success: true,
            count: student.previousMentors.length,
            data: student.previousMentors
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};