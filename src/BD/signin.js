import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./fireBase.js";
import { showMessage} from '../app/showMessage.js';


const signIn = document.querySelector('#login');
const envio = document.getElementById('envio')


envio.addEventListener('click',  e =>{

    e.preventDefault()
    try {
        const email =   document.getElementById('login-email').value;
        const password = document.getElementById('login-pass').value; 
        const userCredentials = signInWithEmailAndPassword(auth, email, password)
        
        console.log(userCredentials)
        console.log(userCredentials.user)
        popupin()  
        
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showMessage("Wrong password", "error")
          } else if (error.code === 'auth/user-not-found') {
            showMessage("User not found", "error")
          } else {
            showMessage("Something went wrong", "error")
          }
    }
})