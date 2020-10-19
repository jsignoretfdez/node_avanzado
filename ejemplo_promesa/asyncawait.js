'use strict';

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function sleep (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Si falla llamar a reject(err);
            resolve('Hola');
            //reject(new Error('fatal'));

        }, ms)
    });
}

async function main() {
    const resultado = await sleep(3000);
    console.log(resultado);

    const resultado2 = await sleep(2000);
    console.log(resultado2);
}

main().catch(err => {
    console.log('Hubo un error', err);
});



