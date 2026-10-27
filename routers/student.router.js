import express from 'express';
import { createStudent } from '../controllers/student.controller.js';

const router=express.Router();

router.post('/',createStudent);
//router.get('/unassigned');
//router.put('/:studentId/assign-mentor')
//router.get('/:studentId/previous-mentor')



export default router;