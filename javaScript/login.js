

function obtenerListaUsuarios() {
    var listaUsuarios = JSON.parse(localStorage.getItem('listausuarios'));

    if (listaUsuarios == null) {
        listaUsuarios =
        [
            //nombre  apellido       mail            pass    
            ['admin', 'admin', 'admin@gmail.com', 'admin1234']
        ]
    }
    return listaUsuarios;
}