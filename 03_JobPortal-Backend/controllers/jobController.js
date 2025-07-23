const Job = require('../models/job');

exports.createJob = async (req, res) => {
  try {
    const { title, company, description, location } = req.body;
    const job = new Job({ title, company, description, location });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    console.error("Job creation failed:", err); 
    res.status(500).json({ message: "Failed to create job", error: err.message });

  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};

exports.searchJobs = async (req, res) => {
  const { title, location } = req.query;

  const query = {};
  if (title) query.title = { $regex: title, $options: 'i' };
  if (location) query.location = { $regex: location, $options: 'i' };

  try {
    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Search failed' });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete job' });
  }
};
