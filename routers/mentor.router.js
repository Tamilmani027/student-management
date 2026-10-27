import express from 'express';
import { createMentor } from '../controllers/mentor.controller.js';

const router=express.Router();

router.post('/',createMentor);
//router.put('/:mentorId/assign-students')
//router.get('/:mentorId/students')




export default router;

