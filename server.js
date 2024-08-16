const express = require('express');
const app = express();
const db=require('./db');
// const Person=require('./models/Person');
// const MenuItem=require('./models/MenuItem');
const bodyParser=require('body-parser');
app.use(bodyParser.json());// req.body
app.get('/', function (req, res) {
    res.send('Welcome to our hotel.')
})
// Import the router files
const personRoute=require('./routes/personRoute');
const menuRoute=require('./routes/menuRoute');
// Use the routers
app.use('/person',personRoute);
app.use('/menu',menuRoute);
app.listen(3000,()=>{
    console.log('listening on port 3000');
})