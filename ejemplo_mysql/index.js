'use strict';

// Cargar Driver
const mysql = require('mysql');

// Crear Conexión
const conexion = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// Conectar
conexion.connect(err => {
    if (err){
        console.log('Error al conectar con la BDD', err);
        return;
    }
    console.log('Conexion establecida');

    // Lanzar consulta
    conexion.query('SELECT * FROM agentes', (err, rows, fields) => {
        if(err){
            console.log('No se ha podidio recuperar datos');
            return
        }

        console.log(rows);

        // Cerrar conexión
        conexion.end();
    })

});






