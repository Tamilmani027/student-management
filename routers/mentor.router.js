import express from 'express';

const router=express.Router();

router.post('/')
router.put('/:mentorId/assign-students')
router.get('/:mentorId/students')




export default router;

