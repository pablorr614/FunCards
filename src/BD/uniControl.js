import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {getDocs,collection} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import {auth,db} from '../BD/fireBase.js'
import {dataUser} from '../BD/user.js'


var palabras = [];
var contador = 0;

const contenPalabras = document.getElementById('CajaPalabras')
const contenUni = document.getElementById('contenUnidades')

const btnComida = document.getElementById('uniComida')
const btnInstru = document.getElementById('uniIntrumentos')
const btnTranpor = document.getElementById('uniTransporte')
const btnProfe = document.getElementById('uniProfe')
const btnAnimal = document.getElementById('uniAnimal')

var fondo = document.getElementById('fondo')

/** Si el usuario esta  auth (funcion de escucha) */
onAuthStateChanged(auth, async (user)=>{
    if(user){
        dataUser(user)
        console.log(user.email) 
        contenPalabras.style.display = 'none'
       
    }else{
       
    }
    
    
})

btnAnimal.addEventListener('click', async (e) =>{
    contenUni.style.display = 'none'
    contenPalabras.style.display = 'flex'
    var unidad = "1"
    var vocabulari = "1"
    palabras = await listarVocavulario(unidad,vocabulari)
    console.log(palabras)
    setInterval(mostrar, 2000);
    
})

btnProfe.addEventListener('click', async (e) =>{
    contenUni.style.display = 'none'
    contenPalabras.style.display = 'flex'
    var unidad = "1"
    var vocabulari = "4"
    palabras = await listarVocavulario(unidad,vocabulari)
    console.log(palabras)
    setInterval(mostrar, 2000);
    
})


btnComida.addEventListener('click', async (e) =>{
    contenUni.style.display = 'none'
    contenPalabras.style.display = 'flex'
    var unidad = "1"
    var vocabulari = "3"
    palabras = await listarVocavulario(unidad,vocabulari)
    console.log(palabras)
    setInterval(mostrar, 2000);
    
})
btnTranpor.addEventListener('click', async (e) =>{
    contenUni.style.display = 'none'
    contenPalabras.style.display = 'flex'
    var unidad = "1"
    var vocabulari = "6"
    palabras = await listarVocavulario(unidad,vocabulari)
    console.log(palabras)
    setInterval(mostrar, 1300);
})
btnInstru.addEventListener('click', async (e) =>{
    contenUni.style.display = 'none'
    contenPalabras.style.display = 'flex'
    var unidad = "1"
    var vocabulari = "5"
    palabras = await listarVocavulario(unidad,vocabulari)
    console.log(palabras)
    setInterval(mostrar, 1500);
})


/**Funciones */
function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}

function mostrar() {
    
    var texto = document.getElementById('fondo');
    
    
    if (contador < palabras.length) {
       decir(palabras[contador]);
       texto.innerHTML = palabras[contador];
        
        contador++;
    } else {
       contenPalabras.style.display = 'none'
       fondo.style.backgroundColor = 'transparent';
       contenUni.style.display = 'block'
       //modedas.innerHTML = '1';
       location.reload();


    }

}



async function listarVocavulario(unidad,vocabulario){
    var list = []

    const orderby =  await getDocs(collection(db,"palabras1"))
        orderby.docs.forEach((doc) => {
            const data = doc.data();
            

            if(data.unidad == unidad && data.vocabulario == vocabulario ){
                console.log(data.palabra)

                list.push(data.palabra)
            }
            
        })

        return list
}

