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