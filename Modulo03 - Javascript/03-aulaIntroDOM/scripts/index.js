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

let elementoH3 = document.querySelector("h3");
console.log(elementoH3);
elementoH3.innerText = "Alterado via querySelector e innerText."
console.log(elementoH3.innerText);

elementoH3.innerHTML = `
<h3>Lista de frutas</h3>
    <ul>
      <li>abacate</li>
      <li>beringela</li>
      <li>caqui</li>
      <li>banana</li>
      <li>maçã</li>
    </ul>
`

let elementoMain = document.querySelector("main");


const myElement = document.getElementById("exemplo");
myElement.style.color = "red";
document.getElementById("exemplo").style.color = "green";

document.getElementsByClassName("texto-simples")[0].style.color = "yellow";
document.getElementsByName("divSegTitulo")[0].style.color = "blue";
document.getElementsByTagName("p")[0].style.color = "lightgreen";


let copy = document.getElementsByTagName("span");
copy[0].innerText = `Copiright ${new Date().getFullYear()}`;
console.log(copy[0]);
