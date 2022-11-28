import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from './BD/fireBase.js'
import {loginCheck} from './BD/loginCheck.js'

import './BD/signup.js'
import './BD/logout.js'
import './BD/signin.js'

onAuthStateChanged(auth, async (user)=>{
    if(user){
        loginCheck(user)
        console.log(user.email)  
    }else{
        loginCheck(user) 
    }
    
    
})
console.log("hello word")





