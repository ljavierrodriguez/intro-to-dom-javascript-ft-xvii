let pag1 = document.getElementById('pagina1');
pag1.innerHTML = "Pagina Uno";

let links = document.getElementsByClassName('link');
console.log(links);

let genero = document.getElementsByName('genero');
console.log(genero)

let enlaces = document.getElementsByTagName('a');
console.log(enlaces);


let id_enlaces = document.getElementById('enlaces');
let links_from_enlaces = id_enlaces.getElementsByTagName('a');

let a0 = document.querySelector('#enlaces .link2:nth-child(3)');
a0.classList.add('titulo')

id_enlaces.removeChild(a0);

let a1 = document.querySelectorAll('#enlaces .link2');
console.log(a1)

let idE = document.getElementById('enlaces');
idE.innerHTML = "Hola Giannina";


let newDiv = document.createElement('div');
newDiv.innerHTML = "Hola Mundo";
console.log(newDiv);

let newDiv1 = document.createElement('div');
newDiv1.innerHTML = "Hola Mundo";
console.log(newDiv1);

let newDiv2 = document.createElement('div');
let texto = document.createTextNode('Hola Mundo');
//newDiv2.innerHTML = "Hola Mundo";
newDiv2.appendChild(texto);
console.log(newDiv2);

idE.appendChild(newDiv);
idE.appendChild(newDiv1);
idE.appendChild(newDiv2);


let h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Titulo'));
console.log(h1);
idE.insertBefore(h1, newDiv);


let inputName = document.getElementById('name');
console.log(name.value);
inputName.id = "apellido";
inputName.style.padding = "5px";
inputName.style.borderRadius = "5px";


let option2 = document.createElement('option');
option2.value = 2
option2.innerHTML = 2

let selectState = document.querySelector('#state');
selectState.appendChild(option2);