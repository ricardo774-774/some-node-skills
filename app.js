

const{ createFile } = require('./helpers/multiplication');
const argv = require('./config/yargs');
    
console.clear();

//sacar args de forma manual desde la terminal:
// console.log(process.argv);
// const [ , , consoleBase = 'base=5'] = process.argv;
// const [ , base] = consoleBase.split('=');

//const numberTable = 8;

createFile( argv.b, argv.l, argv.m )
  .then(msj => {console.log(msj)})
  .catch(err => console.log('Could not create file',err));
