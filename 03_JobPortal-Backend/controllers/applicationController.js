const Application = require('../models/application');
const Job = require('../models/job');

exports.applyForJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    if (!jobId) return res.status(400).json({ message: 'Job ID is required' });

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const existingApp = await Application.findOne({ user: req.user._id, job: jobId });
    if (existingApp) return res.status(400).json({ message: 'Already applied for this job' });

    const application = new Application({ user: req.user._id, job: jobId });
    await application.save();

    res.status(201).json({ message: 'Applied successfully', application });
  } catch (err) {
    console.error(" Error in applyForJob:", err);
    res.status(500).json({ message: 'Failed to apply', error: err.message });
  }
};

exports.getUserApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user._id }).populate('job');
    res.json(applications);
  } catch (err) {
    console.error(" Error in getUserApplications:", err);
    res.status(500).json({ message: 'Failed to fetch applications', error: err.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!application) return res.status(404).json({ message: 'Application not found' });

    res.json({ message: 'Application deleted' });
  } catch (err) {
    console.error(" Error in deleteApplication:", err);
    res.status(500).json({ message: 'Failed to delete application', error: err.message });
  }
};
