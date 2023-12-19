let auto = {
    marca : "Mustang",
    modelo : 1968
}

let auto1 = Object.create(auto);
console.log(auto1.__proto__)