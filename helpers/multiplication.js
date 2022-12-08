const fs = require('fs');
const colors = require('colors');

const createFile = async( base, list, max ) => {

        let salida = '';

        for(let i = 1; i <= max; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        if ( list ) {
            console.log('==============='.blue);
            console.log(`    Table: ${base}`.blue);
            console.log('==============='.blue);
            console.log(salida);
        }
        
    try {
        fs.writeFileSync(`./output-tables/${base} table.txt`, salida);
        return `table ${base} created successfully`. green;
        }
    catch (error) {
        throw error;
        }
}

module.exports = {
    createFile,
}