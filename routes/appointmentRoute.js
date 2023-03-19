const express = require("express");
const router = express.Router();

const Appointment = require('../modals/appointment');

router.get("/getallappointments", async (req, res) => {
    try {
        const appointments = await Appointment.find({});
        res.send(appointments);

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;