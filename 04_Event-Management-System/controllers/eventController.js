const Event = require("../models/eventModel");

const createEvent = async (req, res) => {
  const { title, description, date, time, location, capacity } = req.body;

  try {
    const event = await Event.create({
      title,
      description,
      date,
      time,
      location,
      capacity,
      createdBy: req.user.id
    });

    res.status(201).json({ message: "Event created", event });
  } catch (error) {
    res.status(500).json({ message: "Failed to create event", error: error.message });
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const updated = await Event.findByIdAndUpdate(eventId, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event updated", updated });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const deleted = await Event.findByIdAndDelete(eventId);
    if (!deleted) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: "Deletion failed", error: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const { date, location } = req.query;

    const query = {};
    if (date) query.date = new Date(date);
    if (location) query.location = location;

    const events = await Event.find(query).sort({ date: 1 });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error: error.message });
  }
};

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getAllEvents
};
