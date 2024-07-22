const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Medication_Reminder_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// User Registration
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) throw err;
        res.status(201).send('User registered');
    });
});

// User Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM Users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) throw err;
        if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
            return res.status(401).send('Email or password incorrect');
        }
        const token = jwt.sign({ userId: results[0].user_id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    });
});

// Get Medications
app.get('/medications', (req, res) => {
    const query = 'SELECT * FROM Medications';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add Medication
app.post('/medications', (req, res) => {
    const { user_id, name, dosage, frequency, start_date, end_date, notes } = req.body;
    const query = 'INSERT INTO Medications (user_id, name, dosage, frequency, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [user_id, name, dosage, frequency, start_date, end_date], (err, result) => {
        if (err) throw err;
        res.status(201).send('Medication added');
    });
});

// Add Reminder
app.post('/reminders', (req, res) => {
    const {reminder_id, medication_id, reminder_time} = req.body;
    const query = 'INSERT INTO Reminders (reminder_id, medication_id, reminder_time) VALUES (?, ?, ?)';
    db.query(query, [reminder_id, medication_id, reminder_time], (err, result) => {
        if (err) throw err;
        res.status(201).send('Reminder added');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
