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

    const usuarios = new Usuario({
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("correo").value,
        pass: document.getElementById("pass").value,
    })


    let lista;
    if (localStorage.getItem("listaPersonas") != null) {
        lista = JSON.parse(localStorage.getItem("listaPersonas"))
        lista.push(usuarios)
        localStorage.setItem("listaPersonas", JSON.stringify(lista))
    }
    listaPersonas.push(usuarios)


    return usuarios

}


//Funcion de Guardar Datos en localstorage
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

 
/***********************************
 *           EVENTOS
 ***********************************/


 document.getElementById("btnSave").addEventListener("click", () => {
    guardarEnBaseDeDatos()
    alert("Se ha guardado correctamente")
})

if (localStorage.getItem("listaPersonas") != null) {
    console.log(listaPersonas);
}

console.log(verificarStorage())



//______________________________________________________________

 

