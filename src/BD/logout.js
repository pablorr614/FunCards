import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from './fireBase.js'

const logout = document.querySelector('#logged') 
logout.addEventListener('click', async () => {
   await signOut(auth)

   console.log("user signed out")
   
})