//  READY Y LOAD

/*$(document).ready(function () {
    console.log("El DOM esta cargado.");
});*/

$(() => {
    console.log("El DOM esta cargado.");
})


window.addEventListener('load', function(){
    console.log("Todos los elementos de la ventana estan cargados.");
})





let listaObjetos;
let imprimirDatos = document.getElementById("descripcion")
let precios = document.getElementsByClassName("precio")
let btn = document.getElementById("agregarAlCarrito")


if (localStorage.getItem("carrito") == null) {
    alert("El carrito aun se encuentra vacio");
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"));
}

//Se ejecuta por la clase "botonAgregar" y guardo en la variable id todos los data-id diferentes.
function recuperarId(boton) {
    const id= boton.getAttribute('data-id')
    agregarAlCarrito(id)
}

const agregarAlCarrito = (id) => {
    const articulo = document.getElementById(id)
    const descripcion = articulo.children[1]
    const precio = articulo.children[2]
}

//Se ejecuta por la clase "botonAgregar" y llama a la funcion recuperarId
document.querySelectorAll('.botonAgregar').forEach(boton =>
    boton.addEventListener('click', recuperarId(boton))
)

const verCarrito = () => {

    if (localStorage.getItem("carrito") == null) {
        console.log("El carrito está vacio.");
    } else {
        const dato = JSON.parse(localStorage.getItem("carrito"))
        console.log(dato);
    }
}

/*
const agregarAlCarrito = () => {

    let monto = 0;

    listaObjetos.forEach(e => {
        monto += e.precio
    })

    console.log("Felicitaciones, tu compra fue aprobada, gastaste " + monto);
    localStorage.removeItem("carrito")
}*/





//FUNCIONES PARA EL CARRITO
/*
class Carrito {

    constructor({
        nombre,
        precio,
        stock,
        disponible
    }) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.disponible = disponible;
    }
}


const AgregarPrenda = () => {

    const nombre = prompt("Ingresa el nombre de la prenda:");
    const precio = Number(prompt("Ingresa su precio:"));
    const stock = Number(prompt("Ingresa su stock:"));
    if (stock > 0) {
        disponible = true;
    }else{
        disponible = false;
    }
    console.log("Se ha agregado con éxito!");

    const shop = new Carrito({
        nombre: nombre,
        precio: precio,
        stock: stock,
        disponible: disponible,
    })

    if (localStorage.getItem("carrito") == null) {
        listaDeCarrito.push(shop);
        localStorage.setItem("carrito", JSON.stringify(listaDeCarrito));
    }else{
        const nuevaListaDeCarro = JSON.parse(localStorage.getItem("usuarios"));
        nuevaListaDeCarro.push(usuario);
        localStorage.setItem("carrito", JSON.stringify(nuevaListaDeCarro));
    }
}

   var compra = confirm("¿Añadir este producto al carrito de la compra?");
   if (compra == false){
       return;
   } else{
       listaDeCarrito.push(compra);
       console.log("El producto se agrego correctamente.");
   }*/


