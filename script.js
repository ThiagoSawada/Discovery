function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/ThiagoSawada.png");
    img.setAttribute("alt", "Foto de Thiago Sawada");
  } else {
    img.setAttribute("src", "https://github.com/ThiagoSawada.png");
    img.setAttribute("alt", "Foto de Thiago Sawada");
  }
}
