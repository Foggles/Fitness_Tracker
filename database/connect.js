//connecting mongodb database
const mongoose = require('mongoose');
require('dotenv').config()


function connect() {
    mongoose.connect("mongodb+srv://foggles-admin:<password>@jacks-cluster.poxgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" || 'mongodb://localhost/fitness', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
}

module.exports = {
    connect,
}