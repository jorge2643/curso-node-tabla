
const colors = require('colors');

const fs = require('fs');

const tabla = async(num, listar, hasta) => {

    try{
        let salida = '';
        let consola = '';

        for(i=0; i<=hasta; i++){
            const result = num*i;
            salida += `${num} ${'x'} ${i} ${'='} ${num*i}\n`
            consola += `${num} ${'x'.green} ${i} ${'='.yellow} ${num*i}\n`
        }

        if(listar){
            console.log('============================'.green)
            console.log(`        Tabla del ${num}    `.yellow)
            console.log('============================'.green)
            console.log(consola);
        }        

        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);
        
        return `Tabla del ${num} creada. Archivo de texto guardado.`;
    }

    catch (err){
        throw err;
    }

}

//se realiza el código para exportar la función y poder usarla en otros documentos .js
//se crea un objeto tabla que llama a la función tabla 
module.exports = {
    //lo siguiente es redudante, por lo que se puede proceder solo a dejar el nombre del objeto que 
    //es el mismo de la función 
    //tabla: tabla

    tabla
}

