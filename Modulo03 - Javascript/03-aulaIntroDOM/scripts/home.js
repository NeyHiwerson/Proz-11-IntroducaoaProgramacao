let elementoH1 = document.createElement("h1");
console.log(elementoH1);
elementoH1.innerText = "Titulo do meu site";
elementoH1.id = "tituloSite";
console.log(elementoH1);
let container = document.querySelector("#container1");
container.appendChild(elementoH1);

const postagemJavaScript = document.createElement("div");
postagemJavaScript.id = "postagens";
postagemJavaScript.innerHTML = `
<h2 class="post-titulo">Subtitulo do meu site</h2>
<p class="post-texto">lorem ipsum dolor sit amet, consectetur</p>
`;
container.appendChild(postagemJavaScript);
