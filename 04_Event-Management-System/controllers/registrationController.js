const Registration = require("../models/registrationModel");
const Event = require("../models/eventModel");

const registerForEvent = async (req, res) => {
  const userId = req.user.id;
  const { eventId } = req.body;

  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const registrationCount = await Registration.countDocuments({ event: eventId });
    if (registrationCount >= event.capacity) {
      return res.status(400).json({ message: "Event capacity full" });
    }

    const registration = await Registration.create({ user: userId, event: eventId });

    res.status(201).json({ message: "Registered successfully", registration });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

const cancelRegistration = async (req, res) => {
  const userId = req.user.id;
  const { eventId } = req.body;

  try {
    const deleted = await Registration.findOneAndDelete({ user: userId, event: eventId });
    if (!deleted) {
      return res.status(404).json({ message: "Registration not found" });
    }

    res.status(200).json({ message: "Registration cancelled" });
  } catch (error) {
    res.status(500).json({ message: "Cancellation failed", error: error.message });
  }
};

const getUserRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({ user: req.user.id }).populate("event");

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch", error: error.message });
  }
};

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().populate("user").populate("event");

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch", error: error.message });
  }
};

module.exports = {
  registerForEvent,
  cancelRegistration,
  getUserRegistrations,
  getAllRegistrations
};
