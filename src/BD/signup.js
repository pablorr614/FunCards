console.log("hello up")
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { auth,db } from "./fireBase.js";
//evento del formulario
const  formUp = document.querySelector('#signup-form');
console.log(formUp)

formUp.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const nom = formUp['up-nombre'].value
    const ape = formUp['up-apellido'].value 
    const email = formUp['up-email'].value
    const pass = formUp['up-pass'].value 

    console.log(nom,ape,email,pass)

    try {
        
        //Se guardar el userio en authentication firebase nos da una respuesta
        const userCredentials = await createUserWithEmailAndPassword(auth, email, pass)
        console.log(userCredentials)
        //Se guardan los datos en la bd
        addDoc(collection(db,'usuarios'),{nom, ape,email,pass});
    } catch (error) {
        
    }
})