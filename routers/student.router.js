import express from 'express';

const router=express.Router();

router.post('/');
router.get('/unassigned');
router.put('/:studentId/assign-mentor')
router.get('/:studentId/previous-mentor')



export default router;