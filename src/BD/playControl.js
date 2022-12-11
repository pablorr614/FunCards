import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


import {auth} from '../BD/fireBase.js'
import {dataUser} from '../BD/user.js'
var ModelUser = [];

import { traerMonedas} from "../miniPlay/mainDino.js"

onAuthStateChanged(auth, async (user)=>{
    ModelUser = dataUser(user)
    if(user){
        ModelUser = dataUser(user)
        console.log(user.email) 
        traerMonedas(ModelUser)
        
    }else{
       
    }
    
    
})
console.log(ModelUser)