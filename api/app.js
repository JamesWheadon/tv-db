const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const seriesRoutes = require('./controllers/series')

app.use('/series', seriesRoutes)

// Root route
app.get('/', (req, res) => res.send('Welcome to the TV-DB'))

module.exports = app
