const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxcount: {
        type: Number,
        required: true
    },
    imageurls: {
        type: [String],
        required: true
    },
    currentbookings: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})


const appointmentModel = mongoose.model('Appointments', appointmentSchema);
module.exports = appointmentModel;