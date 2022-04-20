const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./Routes/user.routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/test';

mongoose.
connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true
}).
then(() => {
    console.log('Connected to MongoDB');
}).
catch(err => {
    console.log('Error connecting to MongoDB:', err.message);
});

app.use('/v1/users', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});