// Set up express and router //
const express = require('express');
const router = express.Router();

const {createReminders, getReminders, deleteReminders} = require('../controllers/userController')

router.post("/create", createReminders);
router.get("/getReminder", getReminders);
router.delete("/delete/:id", deleteReminders)

// Declare global module - router.
module.exports = router;