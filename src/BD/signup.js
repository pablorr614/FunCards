
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { showMessage} from '../app/showMessage.js';
import { auth,db } from "./fireBase.js";
//evento del formulario
const  formUp = document.querySelector('#signup-form');


formUp.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const nom = formUp['up-nombre'].value
    const ape = formUp['up-apellido'].value 
    const email = formUp['up-email'].value
    const pass = formUp['up-pass'].value 
    const lv = 2;
    const vidas = 0;
    const monedas = 0;
    const  record =0;
    console.log(nom,ape,email,pass)
    showMessage("Bienvenido "+ nom, "success")
    try {
        
        //Se guardar el userio en authentication firebase nos da una respuesta
        const userCredentials = await createUserWithEmailAndPassword(auth, email, pass)
        console.log(userCredentials.user.uid)
        console.log(userCredentials)
        var uid = userCredentials.user.uid
        //Se guardan los datos en la bd
        const userAdd = addDoc(collection(db,'usuarios'),{nom, ape,email,pass,lv,vidas,monedas,record,uid});
        console.log(userAdd)
        popupup()
        window.open("/src/vistas/unidades.html","unidades")
    } catch (error) {
        if(error.code == 'auth/email-already-in-use'){
            showMessage("email ya registrado", "error")
            
          }else if(error.code == 'auth/invalid-email'){
            showMessage("Invalid email", "error")
            
          }else if(error.code == 'auth/weak-password'){
            showMessage("Contraseña debil", "error")
            
          }else if(error.code){
            showMessage(error.message +" Algo fue mal", "error")
            
          }
      
    }
})