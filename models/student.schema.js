import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    currentMentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",
        default: null
    },

    previousMentors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mentor"
        }
    ]
},
{
    timestamps: true
}
);

const Student=mongoose.model("Student",studentSchema);

export default Student;