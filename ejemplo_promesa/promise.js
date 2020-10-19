'use strict';

// función que devuelve una promesa.

function sleep (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Si falla llamar a reject(err);
            resolve('Hola');
            //reject(new Error('fatal'));

        }, ms)
    });
}

// convertir función que usa callbacks a promesas

const sleep1 = ms => new Promise(resolve => setTimeout(resolve, ms));



const promesa = sleep(3000);

console.log(promesa);

// Cuando e resuelva la promesa hacemos....
promesa.then((valor) => {
    console.log('Resuelta con', valor);
    return sleep(3000);
}).then(() => {
    console.log('Resuelta la segunda');
}).catch(err => {
    console.log('Ha habido un eroor al llamar a sleep:', err.message);
});