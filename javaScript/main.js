//FUNCIONES DE USUARIO

class Usuarios {

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

const listaDeUsuarios = [];

const archivarUsuario = () => {
    
    const nombre = prompt("Ingresa su nombre:");
    const apellido = prompt("Ingresa su apellido:");
    const mail = prompt("Ingresa su email:");
    const pass = prompt("Ingresa su contraseña:");
    console.log(`Bienvenido ${nombre} ${apellido}.`);
    
    const usuario = new Usuarios({
        nombre: nombre,
        apellido: apellido,
        email: mail,
        pass: pass,
    })

    if (localStorage.getItem("usuarios") == null) {
        listaDeUsuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(listaDeUsuarios));
    }else{
        const nuevaLista = JSON.parse(localStorage.getItem("usuarios"));
        nuevaLista.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(nuevaLista));
    }
}

const mostrarUsuarios = () => {

    if (localStorage.getItem("usuarios") == null) {
        console.log("No hay usuarios registrados.");
    } else {
        const dato = JSON.parse(localStorage.getItem("usuarios"))
        console.log(dato);
    }
}


function Verificar () {
    let emailVerificado = prompt("Ingresa tu email:");
    let passVerificado = prompt("Ingresa tu contraseña:");

    if(emailVerificado === "admin" && passVerificado === "admin") {
        console.log("Bienvenido "+ emailVerificado);
    } else {
        Error1();
    }
}

function Error1() {
    console.log("Algo salio mal. Intenta de nuevo.");
};

//Consulta si ya existe el usuario en la BD.
let usuario = prompt("¿Usted ya esta registado? SI/NO");
usuario= usuario.toLowerCase();

    switch (usuario) {
        case "si": 
            Verificar(); //Si dice que si se verifica el correo y la pass
            break;
        case "no": //Si dice que no llama a la funcion de registrar usuario
            archivarUsuario();
            break;
        default :
        alert("ERROR 404"); //Si no esta dentro de las opciones da error
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






