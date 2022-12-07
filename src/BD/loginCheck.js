
import { getDocs,collection} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {db} from '../BD/fireBase.js'

const loggedInLink = document.querySelectorAll('.logged-in')


export const loginCheck = async user =>{
    if(user){

    const querySnapshot = await getDocs(collection(db,"usuarios"))
     
    
     querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        
        if(user.uid === data.uid){
            console.log(data.lv)
            if(data.lv === 1){
                window.open("/src/vistas/admin/homeAdmin.html","_self")
            }
            else {
                window.open("/src/vistas/unidades.html","_self")
            }
            
        }

    })
        //window.open("/src/vistas/unidades.html","unidades")
    }else{
        loggedInLink.forEach(link => link.style.display = 'none')
        console.log("usuario no registrado")
    }
}