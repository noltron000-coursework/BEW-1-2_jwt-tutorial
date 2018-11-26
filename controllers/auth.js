const express = require('express');
const app = express();

// Get Sign-Up page
app.get('/sign-up', (req, res) => res.send('hello world'));