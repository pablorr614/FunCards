import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


import {auth} from '../BD/fireBase.js'
import {dataUser} from '../BD/user.js'


onAuthStateChanged(auth, async (user)=>{
    if(user){
        dataUser(user)
        console.log(user.email) 
        
    }else{
       
    }
    
    
})
console.log("hello word")