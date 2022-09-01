let edad = 18;

if (edad >= 21){
    console.log('Puede beber');
}else{
    console.log('No puede beber')
}

let mensaje = edad >= 21 ? "Puede beber" : "No puede beber";
console.log(mensaje);


let bienvenida = `Usuario: ${usuario.name}:${usuario.status == true ? 'online': 'offline' }`
console.log(bienvenida);