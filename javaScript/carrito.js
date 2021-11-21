const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment();

//Cuando se carga todo el HTML que se ejecute la funcion
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

// Traer productos
const fetchData = async () => {
    const res = await fetch('../api.json');
    const data = await res.json()
    // console.log(data)
    pintarCards(data)
}


function pintarCards(data) {
    data.forEach(producto => {
        templateCard.querySelector('.descripcion').textContent = producto.title;
        templateCard.querySelector('.precio').textContent = producto.precio;
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCard.querySelector('.botonAgregar').dataset.id = producto.id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}




/*
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
        //console.log("El carrito está vacio.");
    } else {
        const dato = JSON.parse(localStorage.getItem("carrito"))
        console.log(dato);
    }
}


/***********************************
 *           API DEL DOLAR
 ***********************************/
/*
 const url="https://www.dolarsi.com/api/api.php?type=valoresprincipales"

 //Para que actualice automaticamente cada 5seg
 setInterval(() => {
     $.get(url, (respuesta, estado) => {
 
         if (estado =="success"){
             respuesta.forEach(element  => {
                const precioPrenda = document.querySelector(".precio");
                recortado = precioPrenda.innerHTML.slice(3)
                 
                 if (element.casa.nombre == "Dolar Oficial"){
                    const dolar = recortado * element.casa.compra;

                    console.log(dolar);

                 }
                    
                    
             })
         }
     })
 }, 5000)



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
