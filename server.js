const express = require("express");

const app = express();

const dbConfig = require('./db');
const appointmentsRoute = require('./routes/appointmentRoute');

app.use('/api/appointments', appointmentsRoute)
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server running on port ${port}`));


const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
