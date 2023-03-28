const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:
// ...

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.hbs'));
app.get('/beers', (req, res) => res.sendFile(__dirname + '/views/beers.hbs'));
app.get('/random', (req, res) => res.sendFile(__dirname + '/views/random.hbs'));

app.listen(3000, () => console.log('🏃‍ on port 3000'));
