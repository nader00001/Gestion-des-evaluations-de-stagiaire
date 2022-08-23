const express = require('express');
const bodyparser = require ('body-parser');

const cors= require('cors');


const db = require('./db');


const app= express();
app.use(cors({origin: true,methods: 'POST,GET,PUT,OPTIONS,DELETE'}));
app.use(bodyparser.json());

const evalRoutes = require('./routes/eval');
const userRoutes = require('./routes/user');
const questRoutes = require('./routes/quest');
const adminRoutes = require('./routes/admin');







app.use('/eval',evalRoutes);
app.use('/user',userRoutes);
app.use('/quest',questRoutes);
app.use('/admin',adminRoutes);




















app.listen(3000,()=>{
    console.log('serveur runing ....')
})