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

const myElement = document.getElementById("exemplo");
myElement.style.color = "red";
document.getElementById("exemplo").style.color = "green";

document.getElementsByClassName("texto-simples")[0].style.color = "yellow";
document.getElementsByName("divSegTitulo")[0].style.color = "blue";
document.getElementsByTagName("p")[0].style.color = "lightgreen";
let copy = document.getElementsByTagName("span");
copy[0].innerText = `Copiright ${new Date().getFullYear()}`;
console.log(copy[0]);
