//se agrega el paquete de file system para poder escribir archivos en disco 
//como ahora el file system se usa en el documento multiplicar, se para para allá y se borra de aquí
// const fs = require('fs');

//hago el llamado de la funcioón de multiplicar 

const colors = require('colors');
const { type } = require('os');
const { options } = require('yargs');
const {tabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
// const { argv } = require('process');

//Vamos a usar el patquete que se instaló llamado YARGS
// const argv = require('yargs')
//                 .option('b',{
//                     alias: 'base',
//                     type:'number', 
//                     demandOption: true
//                 })  
//                 .option('l',{
//                     alias: 'listar',
//                     type:'boolean', 
//                     default: false
//                 })  
//                 .check((argv, options)=>{
//                     if(isNaN(argv.base)){
//                         throw 'La base debe ser un número.'
//                     }
//                     return true;
//                 })
//                 .argv;


console.clear();

//imprimo los proccess del argv de yargs 
// console.log(process.argv);
//console.log(argv);

//yargs crea un objeto de la aplicación y es más fácil extraer la data del mismo 
console.log('base: yargs', argv.base);

// console.log('============================')
// console.log('        Tabla del 5         ')
// console.log('============================')


// const tabla = (num) => {
//     for(i=0; i<=10; i++){
//         const result = num*i;
//         console.log(num, '*', i, '=', result)
//     }
// }


//console.log(process.argv);

// const [ , , arg3='basecor=5'] = process.argv;

//se indica que se haga un split al arg3 separado por el igual. y se guarda en el arreglo el 5
// const [, num=5] = arg3.split('=');
// console.log(num);

//const num = 4;

//tabla(num);

// Vamos a proceder a usar el node fswrite file para crear un archivo de texto y poder imprimir 
//la información que se desee 

// vamos a proceder a grabar el for en un archivo de texto. 

//se crea una constanste salida y se crea como un string vacío 

// let salida = '';

// const tabla = (num) => {
//     for(i=0; i<=10; i++){
//         const result = num*i;
//         salida += `${num} x ${i} = ${num*i}\n`
//     }

//     //se procede a utilizar el fswritefile para escribir el archivo con el path

//     // fs.writeFile(`tabla-${num}.txt`, salida, (err)=>{
//     //     if (err) throw err;

//     //     console.log('Archivo generado de forma correcta');
//     // });
//     // console.log(salida);

//     //Se aplica ahora el writefilesync que es más sencilla. 

//     console.log(salida);

//     fs.writeFileSync(`tabla-${num}.txt`, salida);

//     console.log(`Tabla del ${num} creada. Archivo de texto guardado.`)
// }

tabla(argv.b, argv.l, argv.h)
    .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch (err => console.log(err));

//la siguiente instrucción me permite ver información de la ubicación del archivo 
//y otra información importante 
//console.log(process,argv);