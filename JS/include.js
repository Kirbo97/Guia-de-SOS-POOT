async function loadHTML(id, file) {
  const response = await fetch(file);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

loadHTML("nav", "/Guia-de-SOS-POOT/Estructura/nav.html");
loadHTML("footer", "/Guia-de-SOS-POOT/Estructura/footer.html");