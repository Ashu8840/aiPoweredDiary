import express from 'express';
const router = express.Router();

// @route   GET api/test
// @desc    Test route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'API is working' }));

export default router;