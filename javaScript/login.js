//VERIFICAR STORAGE SI EXISTEN USUARIOS REGISTRADOS

//const listaUsuarios = [];

const verificarStorage = () => {
    let dato = [];
    if (localStorage.getItem("listaUsuarios") != null) {
        dato = JSON.parse(localStorage.getItem("listaUsuarios"))
        //return dato
        console.log(dato);
    }
}
