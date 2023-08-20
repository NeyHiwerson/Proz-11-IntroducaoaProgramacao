console.log("Olá mundo!");

const titulo = document.getElementById("titulo");
console.log(titulo);

const textos = document.getElementsByClassName("texto-simples");
console.log(textos[1]);

const segundoTitulo = document.querySelector("div h2");
console.log(segundoTitulo);

const textosPorClasse = document.querySelectorAll(".texto-simples");
console.log(textosPorClasse);
console.log(textosPorClasse[0]);
console.log(textosPorClasse[1]);
