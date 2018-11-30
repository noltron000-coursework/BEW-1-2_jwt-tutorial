// require middleware etc
const express = require('express');
const exprHBS = require('express-handlebars');

const app = express();
const port = 3000;

// set up handlebars
app.engine('.hbs', exprHBS({
	extname: '.hbs',
	defaultLayout: 'main'
}));
app.set('view engine', '.hbs'); // should it be .hbs or hbs?

// require additional files
const auth = require('./controllers/auth.js')(app);

// Listen on Local Server
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
})