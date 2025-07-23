const express = require("express");
const router = express.Router();

const {
  registerForEvent,
  cancelRegistration,
  getUserRegistrations,
  getAllRegistrations
} = require("../controllers/registrationController");

const authenticateUser = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

router.post("/", authenticateUser, registerForEvent);
router.delete("/", authenticateUser, cancelRegistration);
router.get("/my", authenticateUser, getUserRegistrations);

router.get("/all", authenticateUser, authorizeRoles("admin"), getAllRegistrations);

module.exports = router;
