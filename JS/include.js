async function loadHTML(id, file) { 
    const response = await fetch(file); 
    if (!response.ok) { throw new Error("No se pudo cargar: " + file); }
    const data = await response.text(); 
    document.getElementById(id).innerHTML = data; 
} 

async function cargarAnimacion() {
    const imagen = new Image();
    imagen.src = "/Guia-de-SOS-POOT/IMG/Carga.png";

    imagen.onload = function () {
        document.getElementById("loading-animation").innerHTML = '<img src="/Guia-de-SOS-POOT/IMG/Carga.png" alt="Cargando..." class="loading-image">';
    };

    imagen.onerror = function () {
        document.getElementById("loading-animation").innerHTML = '<div class="loader"></div>';
    };
}

async function cargarPagina() {
    document.body.style.overflow = "hidden";

    await loadHTML("loading", "/Guia-de-SOS-POOT/Estructura/carga.html");

    await cargarAnimacion();

    await Promise.all([
        loadHTML("nav", "/Guia-de-SOS-POOT/Estructura/nav.html"),
        loadHTML("footer", "/Guia-de-SOS-POOT/Estructura/footer.html")
    ]);

    const imagenes = document.images;

    await Promise.all(
        Array.from(imagenes).map(function (imagen) {

            if (imagen.complete) { return Promise.resolve(); }

            return new Promise(function (resolve) {
                imagen.addEventListener("load", resolve);
                imagen.addEventListener("error", resolve);
            });
        })
    );

    document.getElementById("loading").style.display = "none";
    document.body.style.overflow = "";
}

cargarPagina();