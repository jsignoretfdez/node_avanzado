'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connection.on('open', () => {
    console.log('Conectado a Mongodb en', mongoose.connection.name);
});

mongoose.connection.on('error', err =>{
   console.log('Ha ocurrido un error en la conexión', err);
   process.exit(1);
});


mongoose.connect('mongodb://localhost/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

});

module.exports = mongoose.connection;
