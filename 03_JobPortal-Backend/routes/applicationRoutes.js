const express = require('express');
const router = express.Router();
const {
  applyForJob,
  getUserApplications,
  deleteApplication
} = require('../controllers/applicationController');

const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, applyForJob);
router.get('/', protect, getUserApplications);
router.delete('/:id', protect, deleteApplication);

module.exports = router;
