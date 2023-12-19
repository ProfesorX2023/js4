let estudiante = {
    nombre : 'Paul',
    apellido : "McCartney",
    legajo : 100
}

let estuante1 = Object.create(estudiante);
console.log(estuante1.__proto__)