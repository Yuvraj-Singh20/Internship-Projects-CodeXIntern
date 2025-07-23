const express = require("express");
const router = express.Router();

const {
  createEvent,
  updateEvent,
  deleteEvent,
  getAllEvents
} = require("../controllers/eventController");

const authenticateUser = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

router.get("/", authenticateUser, getAllEvents);

router.post("/", authenticateUser, authorizeRoles("admin"), createEvent);
router.put("/:id", authenticateUser, authorizeRoles("admin"), updateEvent);
router.delete("/:id", authenticateUser, authorizeRoles("admin"), deleteEvent);

module.exports = router;
