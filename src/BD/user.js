
import { doc,deleteDoc,getDocs,addDoc,collection} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import {db} from '../BD/fireBase.js'


const mony = document.getElementById("money")

var datos;

export const dataUser = async user =>{
    
    
    if(user){

    const querySnapshot = await getDocs(collection(db,"usuarios"))
    
     querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        
        if(user.uid === data.uid){
            
            mony.innerHTML = data.monedas
            datos = doc.data()
            
        }
        

    })
        
    }else{
        
        console.log("usuario no registrado")
    }
    return datos
}