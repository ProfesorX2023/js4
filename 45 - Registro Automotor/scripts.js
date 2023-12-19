function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil('Ford','Focus','Rojo',2016,'Matías Pérez');
let automovil2 = new Automovil('Chevrolet','Camaro','Amarillo',2018,'Silvina Márquez');
let automovil3 = new Automovil('Toyota','Corolla','Blanco',2021,'Carlos García');
let automviles = [automovil1,automovil2,automovil3];

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.encender = function(){
    alert("El automovil fue encendido");
}

Automovil.prototype.verAutomovil = function(){
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`;
}

function mostrarAutomoviles(){
    let lista = document.getElementById('listaAutmoviles');

    for(let automovil of automviles){
        let item = document.createElement('li');
        item.innerText = automovil.verAutomovil('li');
        lista.appendChild(item);
    }
}