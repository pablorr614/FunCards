const vistaUser = document.querySelectorAll('.vista-user')
const vistaPalabra = document.querySelectorAll('.vista-palabra')

/*Modales*/
function popupin(){
    document.getElementById("login-formModal").classList.toggle("active");
    
}

function popupup(){
    document.getElementById("signup-formModal").classList.toggle("active");
    
}


function ghostUser(){
    vistaUser.forEach(link => link.style.display = 'none')
    vistaPalabra.forEach(link => link.style.display = 'block')
    
}
function ghostPalabra(){
    vistaUser.forEach(link => link.style.display = 'block')
    vistaPalabra.forEach(link => link.style.display = 'none')
    
}



/**
 * validores
 */

function ValidarNombre(nombre) {
    //Validar nombre con expreciones regulares
    var nom = nombre
    const regexp = new RegExp(/^([A-Za-z])\w+$/)
    var valida = regexp.test(String(nom))

    return valida;

}

function validaVacio(valor) {
    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;
    if (!valor || 0 === valor.trim().length) {
        return true;
    }
    else {
        return false;
    }
}