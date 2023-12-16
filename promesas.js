
const empleados = [
    {
        id: 1,
        nombre: 'Jorge',
    },
    {
        id: 2,
        nombre: 'Brayan',
    },
    {
        id: 3,
        nombre: 'Karen',
    }
];

const salarios = [
    {
        id:1, 
        salario: 1000,
    },
    {
        id:2,
        salario:2000,
    }
];

// const getEmpleado = (id, callback) => {

//     const empleado = empleados.find( e => e.id === id)?.nombre

//     // if(empleado){
//     //     callback(null, empleado);
//     // } else{
//     //     callback(`Empleado con id ${id} no existe`);
//     // }
// }

const getEmpleado = (id) =>{

    // const promesa = new Promise((resolve, reject) => {

    //     const empleado = empleados.find( e => e.id === id)?.nombre

    //     if (empleado){
    //         resolve(empleado);
    //     } else{
    //         reject(`No existe el empleado con id ${id}`);
    //     }
    // });

    // return promesa;

    //Toda la promesa se puede simplificar con algunos códigos que permiten tener un código más limpio. 

    // codigo optimizado. 

    return new Promise((resolve, reject) => {

        const empleado = empleados.find( e => e.id === id)?.nombre

        //se usa un ternario que es un if simplificado. No me funcionó el famoso ternario. 

        if (empleado){
            resolve(empleado);
        } else{
            reject(`No existe el empleado con id ${id}`)
        };
    });    
}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
         
        const salario = salarios.find(s => s.id === id)?.salario

        if (salario){
            resolve(salario);
        } else {
            reject(`El empleado con id ${id}, no tiene un salario asignado`);
        }
    });
}

const id = 3;

// getEmpleado(id)
//     //then = si existe el empleado se ejecuta lo que se tiene acontinuación 
//     .then( empleado => console.log('Empleado: ', empleado))
//     .catch ( err => console.log(err));

// getSalario(id)
//     .then (salario => console.log('Salario: ', salario))
//     .catch (err => console.log(err));

// Se necesita lanzar el salario, siempre y cuando exite el empleado. El código anterior no lo genera así. 

// getEmpleado(id)
//     .then(empleado => {
//         console.log('El empleado ', empleado)
//         getSalario(id)
//         .then (salario => console.log(' tiene un salario de', salario))
//         .catch (err => console.log(err));
//     })
//     .catch (err => console.log(err));

//Se usa una forma más limpia de realizar la ejecución de las funciones con promesas en cadena. 

let nombre; 

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log('El empleado ', nombre, 'tiene un salario de ', salario))
    .catch(err => console.log(err));
    