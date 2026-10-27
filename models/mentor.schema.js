import mongoose from 'mongoose';

const mentorSchema=mongoose.Schema({
name:{
	type:String,
	trim:true,
	required:true,
},
email:{
	type:String,
	trim:true,
	required:true,
	unique:true,
	lowercase:true
},
students:[{
	type:mongoose.Schema.Types.ObjectId,
	ref:'Student'}]
},
{
	timestamp:true
})


const Mentor=mongoose.model("Mentor", mentorSchema);

export default Mentor;