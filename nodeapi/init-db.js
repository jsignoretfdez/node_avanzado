'use strict';

require('dotenv').config(); // cargar fichero .env ponerlo en procces.env

const readLine = require('readline');
const conn = require('./lib/connectMongoose');
const Agente = require('./models/Agente');

conn.once('open', async () => {
    try{

        const respuesta = await askUser('Estas seguro que quieres inicializar la bd con datos iniciales (no)');

        if(respuesta.toLowerCase() !== 'si'){
            console.log('Proceso abortado');
            return process.exit(0);
        }
        await initAgentes();
        // await initUsers();

        // cerrar la conexión
        conn.close();

    }catch (err){
        console.log(err);
        process.exit(1);
    }
});

async function initAgentes(){
    // borrar documentos existentes de la colección
    console.log('Vaciando colección de Agentes');
    await Agente.deleteMany();

    // cargar los documentos iniciales
    console.log('Cargando Agentes....');
    const result = await Agente.insertMany([
        {
            name: 'Smith',
            age: 36
        },
        {
            name: 'Brown',
            age:25
        }
    ]);
    console.log(`Se han creado ${result.length} Agentes`);
};

function askUser(question){
    return new Promise((resolve, reject ) => {
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(question, answer => {
            rl.close();
            resolve(answer);
        });
    });
}

