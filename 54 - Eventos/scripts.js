let boton = document.getElementById('miBoton');

function mostrarMensaje(){

    alert('El boton ha sido presionado');
}

function otroMensaje(){

    alert('Está Flotando');
}

boton.addEventListener('click',mostrarMensaje);

boton.addEventListener('mouseover', otroMensaje);