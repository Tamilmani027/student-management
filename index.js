import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/configDB.js';
import studentRouter from './routers/student.router.js';
import mentorRouter from './routers/mentor.router.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/mentor', mentorRouter);
app.use('/api/student', studentRouter);



const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
