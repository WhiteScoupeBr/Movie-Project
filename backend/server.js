const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/api',
 {useNewUrlParser: true, useUnifiedTopology:true});
//route

requireDir('./src/models');

app.get('/',require('./src/routes'));


app.listen(3001);