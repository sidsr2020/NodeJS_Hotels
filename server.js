const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');
// const Person=require('./models/Person');
// const MenuItem=require('./models/MenuItem');
const bodyParser=require('body-parser');
app.use(bodyParser.json());// req.body
const PORT = process.env.PORT || 3000;
// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} Request Made to : ${req.url}`);
    next(); //Move on to the next phase
}
// Use the middleware
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', { session: false });
app.get('/',function (req, res) {
    res.send('Welcome to our hotel.')
})
// Import the router files
const personRoute=require('./routes/personRoute');
const menuRoute=require('./routes/menuRoute');
// Use the routers
app.use('/person',personRoute);
app.use('/menu',menuRoute);
app.listen(PORT, () => {
    console.log('listening on port 3000');
})