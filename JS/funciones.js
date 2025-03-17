// Función para cerrar el dialog
function cerrarDialog(tip) { 

    // Valida cual seccion estoy para cerar los details que se quedaron abierto
    if(tip==='PRO9'){
        var arreglo = ['cultNorma','cultMuta','flores']

        for(var i = 0; i < arreglo.length; i++){
            var details = document.getElementById(arreglo[i]);
            if (details) { details.removeAttribute('open'); }
        }
    }

    document.getElementById(tip).close(); 
}
        
// Función para mostrar el contenido adecuado según la procesadora seleccionada
function mostrarContenido(tipo) {

    var valido = tipo.includes(',');

    var dialog;
        
    if (valido === true) {
        // Ocultar todos los contenidos primero
        var contenidos = document.querySelectorAll('.ocultar');
    
            contenidos.forEach(function(contenido) { contenido.style.display = 'none'; });
            
        let partes = tipo.split(","); // creo un arreglo a partir de la frase (cada caracter tendra su propia celda) para cambiar las casillas requeridas
            
        // Mostrar el contenido correspondiente al tipo de procesadora
        if (partes[0] === 'normal') {
            document.querySelectorAll('.contenidoNormal').forEach(function(contenido) { contenido.style.display = 'block'; });
            document.querySelectorAll('.cantidadNormal').forEach(function(cantidad) { cantidad.style.display = 'block'; });
        } else if (partes[0] === 'gigante') {
            document.querySelectorAll('.contenidoGigante').forEach(function(contenido) { contenido.style.display = 'block'; });
            document.querySelectorAll('.cantidadGigante').forEach(function(cantidad) { cantidad.style.display = 'block'; });
        }
    
        dialog = document.getElementById(partes[1]);
        
    }// else { dialog = document.getElementById(tipo); }

    dialog.showModal();
}   

// Función para mostrar el contenido adecuado según la procesadora seleccionada (Seccion de personajes)
function Scrollbutton(tip_bot) {

    var anchoVentana = window.innerWidth;
    var salto_movile=304;
    var salto_comp=415.05;
        
    if (anchoVentana <= 980) { // desplasamiento para cuando es  el movile
        if (tip_bot === 'arriba') {
            boxsort.scrollTop -= salto_movile;
        } else if (tip_bot === 'abajo') {
            boxsort.scrollTop += salto_movile;
        }
            
    } else if (anchoVentana > 980) { // desplasamiento para cuando es la computadora
        if (tip_bot === 'arriba') {
            boxsort.scrollTop -= salto_comp;
        } else if (tip_bot === 'abajo') {
            boxsort.scrollTop += salto_comp;
        }   
    }
}      

// Función para mostrar el contenido adecuado según la procesadora seleccionada (Seccion de personajes)
function Scrollbutton_Perso_DLC(tip_bot_DLC) {

    var anchoVentana = window.innerWidth;
    var salto_movile=240;
    var salto_comp=305.05;
        
    if (anchoVentana <= 980) { // desplasamiento para cuando es  el movile
        if (tip_bot_DLC === 'arriba') {
            boxsort_Aldeano_DLC.scrollTop -= salto_movile;
        } else if (tip_bot_DLC === 'abajo') {
            boxsort_Aldeano_DLC.scrollTop += salto_movile;
        }
            
    } else if (anchoVentana > 980) { // desplasamiento para cuando es la computadora
        if (tip_bot_DLC === 'arriba') {
            boxsort_Aldeano_DLC.scrollTop -= salto_comp;
        } else if (tip_bot_DLC === 'abajo') {
            boxsort_Aldeano_DLC.scrollTop += salto_comp;
        }   
    }
}   

var currentTable = 1;
// Función para mostrar el contenido adecuado según la procesadora seleccionada (Seccion de Victor)
function ScrollbuttonVictor(direction) {
    // Ocultar la tabla actual
    document.getElementById('tv' + currentTable).style.display = 'none';
    
    // Cambiar la tabla según la dirección del scroll
    if (direction === 'arriba' && currentTable > 1) {
        currentTable--; // Si es hacia arriba, ir a la tabla anterior
    } else if (direction === 'abajo' && currentTable < 9) {
        currentTable++; // Si es hacia abajo, ir a la siguiente tabla
    }
    
    // Mostrar la nueva tabla
    document.getElementById('tv' + currentTable).style.display = 'table';
}

var Tablarecom = 1;
// Función para mostrar el contenido adecuado según la procesadora seleccionada (Seccion de recompensa)
function ScrollbuttonRecom(direc) {
    // Ocultar la tabla actual
    document.getElementById('tr' + Tablarecom).style.display = 'none';
    var lis="";
    
    // Cambiar la tabla según la dirección del scroll
    if (direc === 'arriba' && Tablarecom > 1) {
        Tablarecom--; // Si es hacia arriba, ir a la tabla anterior
    } else if (direc === 'abajo' && Tablarecom < 40) {
        Tablarecom++; // Si es hacia abajo, ir a la siguiente tabla
    }

    // Cambia el nombre de la lista
    if (Tablarecom > 9) { lis="Lista "; } else if (Tablarecom < 10) { lis="Lista 0"; }
    document.getElementById("header1").innerText = lis+Tablarecom;

    // Mostrar la nueva tabla
    document.getElementById('tr' + Tablarecom).style.display = 'table';
}

// Función para calcular y ajustar el ancho de los dialog que contiene los eventos (Seccion de eventos de los personajes)
function Cal_tabla(tip_lis_btn) {

    // Obtener el ancho de la ventana
    var anchoVent = window.innerWidth;

    // Obtener el dialog
    var dialog = document.getElementById(tip_lis_btn);

    var tam_dialog=dialog.scrollWidth;

    // Si el ancho de la ventana es menor o igual a 980px y el ancho de la tabla es mayor a 810px
    if(anchoVent <= 980){
        if(tam_dialog>810){
            dialog.style.width = '900px';  // Ajustar el ancho a 900px
        } 
    } else {
        // Eliminando cualquier valor de width especificado en el estilo en línea
        dialog.style.removeProperty('width');
    }
}

// Función para calcular y ajustar el ancho de los dialog que contiene los eventos (Seccion de eventos de los personajes)
function Cal_intro(tip_intr) {

    // Obtener el ancho de la ventana
    var anchoVent = window.innerWidth;
    
    // Obtener el id del div
    var div_intro = document.getElementById(tip_intr);

    // Si el ancho de la ventana es menor o igual a 980px y el ancho de la tabla es mayor a 810px
    if(anchoVent <= 980){
        div_intro.style.width = '50em';  // Ajustar el ancho a 900px
    } else {
        if (tip_intr=="h11"){
            div_intro.style.width = '59em';
        } else {
            div_intro.style.width = '56em';
        }
    }
} 

var cant_cult_Setas = 1;
var cant_cult_Cosechas = 1;
var cant_cult_Arboles = 1;
var cant_cult_Flores = 1;
// Función para mostrar el contenido adecuado según la procesadora seleccionada (Seccion de Victor)
function ScrollbuttonCultivos(direction) {

    var separador = direction.split(",");

    if(separador[1]=='cs'){
        // Ocultar la tabla actual
        document.getElementById(separador[1] + cant_cult_Setas).style.display = 'none';
        
        // Cambiar la tabla según la dirección del scroll
        if (separador[0] === 'arriba' && cant_cult_Setas > 1) {
            cant_cult_Setas--; // Si es hacia arriba, ir a la tabla anterior
        } else if (separador[0] === 'abajo' && cant_cult_Setas < 2) {
            cant_cult_Setas++; // Si es hacia abajo, ir a la siguiente tabla
        } else if (separador[0] === 'abajo' && cant_cult_Setas == 2) { 
            cant_cult_Setas=1; // Si llega al final vuelve al inicio
        }

        // Mostrar la nueva tabla
        document.getElementById(separador[1] + cant_cult_Setas).style.display = 'table';

    } else if(separador[1]=='ca'){
        // Ocultar la tabla actual
        document.getElementById(separador[1] + cant_cult_Arboles).style.display = 'none';
        
        // Cambiar la tabla según la dirección del scroll
        if (separador[0] === 'arriba' && cant_cult_Arboles > 1) {
            cant_cult_Arboles--; // Si es hacia arriba, ir a la tabla anterior
        } else if (separador[0] === 'abajo' && cant_cult_Arboles < 4) {
            cant_cult_Arboles++; // Si es hacia abajo, ir a la siguiente tabla
        } else if (separador[0] === 'abajo' && cant_cult_Arboles == 4) { 
            cant_cult_Arboles=1; // Si llega al final vuelve al inicio
        }

        // Mostrar la nueva tabla
        document.getElementById(separador[1] + cant_cult_Arboles).style.display = 'table';
    } else if(separador[1]=='cf'){
        // Ocultar la tabla actual
        document.getElementById(separador[1] + cant_cult_Flores).style.display = 'none';
        
        // Cambiar la tabla según la dirección del scroll
        if (separador[0] === 'arriba' && cant_cult_Flores > 1) {
            cant_cult_Flores--; // Si es hacia arriba, ir a la tabla anterior
        } else if (separador[0] === 'abajo' && cant_cult_Flores < 4) {
            cant_cult_Flores++; // Si es hacia abajo, ir a la siguiente tabla
        } else if (separador[0] === 'abajo' && cant_cult_Flores == 4) { 
            cant_cult_Flores=1; // Si llega al final vuelve al inicio
        }

        // Mostrar la nueva tabla
        document.getElementById(separador[1] + cant_cult_Flores).style.display = 'table';
    } else if(separador[1]=='cc'){
        // Ocultar la tabla actual
        document.getElementById(separador[1] + cant_cult_Cosechas).style.display = 'none';
        
        // Cambiar la tabla según la dirección del scroll
        if (separador[0] === 'arriba' && cant_cult_Cosechas > 1) {
            cant_cult_Cosechas--; // Si es hacia arriba, ir a la tabla anterior
        } else if (separador[0] === 'abajo' && cant_cult_Cosechas < 8) {
            cant_cult_Cosechas++; // Si es hacia abajo, ir a la siguiente tabla
        } else if (separador[0] === 'abajo' && cant_cult_Cosechas == 8) { 
            cant_cult_Cosechas=1; // Si llega al final vuelve al inicio
        }

        // Mostrar la nueva tabla
        document.getElementById(separador[1] + cant_cult_Cosechas).style.display = 'table';
    }
}

// Verificar si el archivo actual esta dentro de la ruta de "Personajes"
if (window.location.pathname.includes("Personajes/")) {

    // Definir el array con los valores de los ids
    var estado = ["fasina", "encanta", "gusta"];

    // Obtener el ancho de la ventana
    var TipoVent = window.innerWidth;

    // valido si la pagina en la que estoy es una que no tiene tabla de regalos porque si no lo tiene termina el proseso
    if(window.location.pathname.includes("/jugador") || window.location.pathname.includes("/Espiritu") || window.location.pathname.includes("/Duendes") ){ 
        var repetir=0; 
    } else { var repetir=3; }
 
    // Recorrer todos los elementos <th> encontrados
    for (var i = 0; i < repetir; i++) {

        // Obtener el elemento <div> con id "regalos"
        var elemento = document.getElementById("regalos"+ (i + 1));

        // Si el ancho de la ventana es menor o igual a 980px y el ancho de la tabla es mayor a 810px (Movile)
        if(TipoVent <= 980) { var num =  3272; } else { var num =  3282; }

        
        // Si la altura del div es menor a 2587px ayadira una clase pero si lo supera añadira dos clases
        if (elemento.offsetHeight <= num) { 
            elemento.classList.add('cont_obj_regalo');
        } else {
            elemento.classList.add('cont_obj_regalo','scroll-container_reg'); 
        }

        // Obtener el elemento <th> con id "estado"
        var thElement = document.getElementById("estado" + (i + 1));

        // Obtener el elemento <div> con id de lo que esta en el arreglo
        var thdiv = document.getElementById(estado[i]);

        // Si la altura es igual a 135px, Ajusta el valor del margen superior del <div> según lo necesites
        if (thElement.offsetHeight <= 135) { thdiv.style.marginTop = "20px"; }
    }
}
