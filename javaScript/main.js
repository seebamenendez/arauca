/****************************************
 *       ENTIDADES
 ****************************************/

class Usuario {

    constructor({
        nombre,
        apellido,
        email,
        pass
    }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.pass = pass;
    }
}

/***********************************
 *           VARIABLES
 ***********************************/

const listaPersonas = [];


/***********************************
 *           FUNCIONES
 ***********************************/

 const crearUsuario = () => {

    const usuario = new Usuario({
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        mail: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
    })


    let lista;
    if (localStorage.getItem("listaPersonas") != null) {
        lista = JSON.parse(localStorage.getItem("listaPersonas"))
        lista.push(usuario)
        localStorage.setItem("listaPersonas", JSON.stringify(lista))
    }
    listaPersonas.push(usuario)


    return usuario

}


//Funcion de Guardar Datos
const guardarEnBaseDeDatos = () => {

    crearUsuario()

    if (verificarStorage() != undefined) {
        localStorage.setItem("listaPersonas", JSON.stringify(verificarStorage()))
    } else {
        localStorage.setItem("listaPersonas", JSON.stringify(listaPersonas))
    }
}


//Funcion de Verificar Storage
//Return Array
const verificarStorage = () => {
    let dato = [];
    if (localStorage.getItem("listaPersonas") != null) {
        dato = JSON.parse(localStorage.getItem("listaPersonas"))
        return dato
    }
}


const eliminarDeLaLista = (email) => {

    let listaVieja = JSON.parse(localStorage.getItem("listaPersonas"))
    let listaNueva = listaVieja.filter(e => e.email != email)

    localStorage.setItem("listaPersonas", JSON.stringify(listaNueva))
    location.reload()

}

 //______________________________________________________________

 //FUNCIONES PARA EL CARRITO

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


//Creo una lista vacia para ir agregando las compras.
const listaDeCarrito =[];

const agregarAlCarrito = () => {

   var compra = confirm("¿Añadir este producto al carrito de la compra?");
   if (compra == false){
       return;
   } else{
       listaDeCarrito.push(compra);
       console.log("El producto se agrego correctamente.");
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


const verCarrito = () => {

    if (localStorage.getItem("carrito") == null) {
        console.log("El carrito está vacio.");
    } else {
        const dato = JSON.parse(localStorage.getItem("carrito"))
        console.log(dato);
    }
}



/***********************************
 *           EVENTOS
 ***********************************/


 document.getElementById("btnSave").addEventListener("click", () => {
    guardarEnBaseDeDatos()
})

if (localStorage.getItem("listaPersonas") != null) {
    imprimirDatos()
}

console.log(verificarStorage())



