class Animal{
    contructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años`
    }
}

class Perro extends Animal{
    contructor(nombre, peso, edad, raza){
        super(nombre, peso, edad)
        this.raza = raza;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.raza}`
    }
}

class Gato extends Animal{
    contructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad)
        this.sexo = sexo;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.sexo}`
    }
}

class Conejo extends Animal{
    contructor(nombre, peso, edad, color){
        super(nombre, peso, edad)
        this.color = color;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.color}`
    }
}

let perro1 = new Perro('Bonny',11,4,'Labrador');
let gato1 = new Gato('Ringo',4,6,'Macho');
let conejo1 = new Conejo('Dumbo',2,3,'Blanco');
let animales = [perro1,gato1,conejo1];

function mostrarAnimales(){
    let lista = document.getElementById('listaAnimales');

    for(let animal of animales){
        let item = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}