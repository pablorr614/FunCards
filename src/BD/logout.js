import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from './fireBase.js'

const logout = document.querySelector('#logged') 
const indexPrincipal = "/src/index.html";
logout.addEventListener('click', async () => {
   await signOut(auth)
   window.open(indexPrincipal, "_self")
   console.log("user signed out")
   
})