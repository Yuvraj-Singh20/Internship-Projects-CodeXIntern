const express = require('express');
const router = express.Router();
const {
  createJob,
  getAllJobs,
  searchJobs,
  deleteJob,
} = require('../controllers/jobController');

const { protect, adminOnly } = require('../middlewares/authMiddleware');

router.get('/', getAllJobs);
router.get('/search', searchJobs);

router.post('/', protect, adminOnly, createJob);
router.delete('/:id', protect, adminOnly, deleteJob);

module.exports = router;
