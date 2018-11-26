const express = require('express');
const exprHBS = require('express-handlebars');
const auth = require('./controllers/auth.js');
const app = express();
const port = 3000;

// set up handlebars
app.engine('handlebars', exprHBS({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Listen on Local Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))