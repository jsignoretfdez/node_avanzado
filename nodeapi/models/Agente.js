'use strict';

const mongoose = require('mongoose');

// Crear un esquema

const agenteSchema = mongoose.Schema({
    name: {type: String, index: true},
    age: {type: Number, index: true}
    // message: mongoose.Schema.Types.Mixed // para datos sin schema
    // name: {type: String, index: true}

}, {
    autoIndex: process.env.NODE_ENV !== "production"
    }
    );

// Método estático

agenteSchema.statics.lista = function(filtro, limit,skip,sort,fields) {
    const query = Agente.find(filtro);
    query.limit(limit);
    query.skip(skip);
    query.sort(sort);
    query.select(fields);
    return query.exec();
}

// Crear el modelo

const Agente = mongoose.model('Agente', agenteSchema);

// Exportar el modelo

module.exports = Agente;
