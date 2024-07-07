// Función para cerrar el dialog
function cerrarDialog(tip) { document.getElementById(tip).close(); }
        
// Función para mostrar el contenido adecuado según la procesadora seleccionada
function mostrarContenido(tipo) {
    // Ocultar todos los contenidos primero
    var contenidos = document.querySelectorAll('.ocultar');
        contenidos.forEach(function(contenido) {
            contenido.style.display = 'none';
        });
                
    let partes = tipo.split(","); // creo un arreglo a partir de la frase (cada caracter tendra su propia celda) para cambiar las casillas requeridas
        
    // Mostrar el contenido correspondiente al tipo de procesadora
    if (partes[0] === 'normal') {
        document.querySelectorAll('.contenidoNormal').forEach(function(contenido) { contenido.style.display = 'block'; });
        document.querySelectorAll('.cantidadNormal').forEach(function(cantidad) { cantidad.style.display = 'block'; });
    } else if (partes[0] === 'gigante') {
        document.querySelectorAll('.contenidoGigante').forEach(function(contenido) { contenido.style.display = 'block'; });
        document.querySelectorAll('.cantidadGigante').forEach(function(cantidad) { cantidad.style.display = 'block'; });
    }

    var dialog = document.getElementById(partes[1]);
    dialog.showModal();
}            