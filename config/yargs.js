// Toda la info que se recibe desde la terminal
// junto con todas las validaciones son desde la pagina de yargs
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'La base de la tabla a multiplicar'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    default: false,
                    describe: 'Para mostrar en pantalla la lista de la tabla'
                })
                .option('m', {
                    alias: 'maximum',
                    type: 'number',
                    default: 10,
                    describe: 'Para hacer la tabla con un maximo != 10'
                })
                .check( (argv, options) => {
                    if ( isNaN( argv.b ) ) {
                        throw 'La base "b" tiene que ser un numero';
                    }
                    if ( isNaN( argv.m ) ) {
                        throw 'El maximo "m" tiene que ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;