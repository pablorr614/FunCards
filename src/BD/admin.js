import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDocs,collection} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import {auth,db} from '../BD/fireBase.js'
import {setupUser}from '../BD/userList.js'


onAuthStateChanged(auth, async (user)=>{
    if(user){
        const querySnapshot = await getDocs(collection(db,"usuarios"))
        console.log(user.email) 
        setupUser(querySnapshot.docs) 
    }else{
       
    }
    
    
})
console.log("hello word")