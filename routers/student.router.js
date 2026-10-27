import express from 'express';
import { assignMentor, createStudent, getPreviousMentors, getUnassignedStudents } from '../controllers/student.controller.js';

const router=express.Router();

router.post('/', createStudent);
router.get('/unassigned', getUnassignedStudents);
router.put('/:studentId/assign-mentor', assignMentor);
router.get('/:studentId/previous-mentor', getPreviousMentors);



export default router;