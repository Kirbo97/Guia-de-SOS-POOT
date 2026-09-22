async function loadHTML(id, file) { 
    const response = await fetch(file); 
    const data = await response.text(); 
    document.getElementById(id).innerHTML = data; 
} 


async function cargarPagina() {
    document.body.style.overflow = "hidden";

    await loadHTML("loading", "/Guia-de-SOS-POOT/Estructura/carga.html");

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