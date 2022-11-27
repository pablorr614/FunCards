const loggedInLink = document.querySelectorAll('.logged-in')


export const loginCheck = user =>{
    if(user){
        window.open("/src/vistas/unidades.html","unidades")
    }else{
        loggedInLink.forEach(link => link.style.display = 'none')
        console.log("usuario no registrado")
    }
}