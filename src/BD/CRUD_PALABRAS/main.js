//Conexion a la base de datos
import {db} from '../fireBase.js'
import { doc,deleteDoc,getDocs,addDoc,collection,getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


let id = '';

const querySnapshot =  getDocs(collection(db,"palabras1"));
const formPalabra = document.querySelector("#addPalabras")

const fromActuP = document.getElementById('UpPalabras')
const btnUp = document.getElementById('btnUpPalabra')

var myModalPala = new bootstrap.Modal(document.getElementById('exampleModalq'))
var myModalActuPala = new bootstrap.Modal(document.getElementById('modalUp'))

var Palabra = {};

btnUp.addEventListener("click", (e) => {
    e.preventDefault()
   const palabra = fromActuP['palabratxt'].value
   const imagen = fromActuP['imagen'].value
   const significado = fromActuP['significado'].value
   const unidad = fromActuP['unidad'].value
   const vocabulario = fromActuP['vocabulario'].value
  
   const userAdd = updateDoc(doc(db,'palabras1',id),{palabra, imagen,significado,unidad,vocabulario});
   console.log(userAdd)
    myModalActuPala.hide()

})

function insertarPalabra(){
    
    Palabra = {
        palabra: formPalabra['palabra'].value,
        significado: formPalabra['significado'].value,
        imagen: formPalabra['imagen'].value,
        unidad: formPalabra['unidad'].value,
        vocabulario: formPalabra['vocabulario'].value
    }

   

     addDoc(collection(db,'palabras1'),Palabra);

     myModalPala.hide()
}

function borrarPalabra(id){
    
    deleteDoc(doc(db,"palabras1",id))
}





export  async function listarVocavulario(unidad,vocabulario){
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


async function listarPalabras(){
  
        const querySnapshot =  await getDocs(collection(db,"palabras1"))
        pintar(querySnapshot.docs);


       

        
  
}

const pintar = (data) =>{
    const palabras = document.querySelector('.palabras')
    
    let html = "";

    if (data.length) {
        data.forEach(doc => {
            const Palabra = doc.data();
            const li = `
            <tr>
            <td class="centrado">${Palabra.palabra}</td>
            <td class="centrado">${Palabra.significado}</td>
            <td class="centrado">${Palabra.imagen}</td>
            <td class="centrado">${Palabra.unidad}</td>
            <td class="centrado">${Palabra.vocabulario}</td>
            <td class="centrado">
                <p>
                    <i class="bi bi-pencil-square editP" data-bs-toggle="modal" data-bs-target="#modalUp" data-id="${doc.id}"></i>
                    <i class="bi bi-trash3-fill deleteP" data-id="${doc.id}"></i>
                </p>  
            </td>
            </tr>
            `;
            html += li;
        });

        palabras.innerHTML = html;

        const btnDelete = palabras.querySelectorAll('.deleteP')
        const btnEdit = palabras.querySelectorAll('.editP')

        btnDelete.forEach(btn =>{
            btn.addEventListener('click',(event)=>{
                const id = event.target.dataset.id
                borrarPalabra(id)
                
                
            })
        })
        btnEdit.forEach(btn =>{
            btn.addEventListener('click',async (event)=>{
                id = event.target.dataset.id
                const docus = await getDoc(doc(db,"palabras1",id))
                console.log(docus.data())
                const pala = docus.data()
                fromActuP['palabratxt'].value = pala.palabra
                fromActuP['significado'].value = pala.significado
                fromActuP['imagen'].value  = pala.imagen
                fromActuP['unidad'].value     = pala.unidad
                fromActuP['vocabulario'].value = pala.vocabulario
                

            })
        })
    }
}


const btnAddPalabra = document.getElementById("btnAddPalabra")

btnAddPalabra.addEventListener('click', (e) =>{
  
    insertarPalabra()
})

listarPalabras()

var unidad = "1"
var vocabulari = "1"
const list1 = await listarVocavulario(unidad,vocabulari)


console.log(list1)
for (var i = 0; i < list1.length; i++) {
    console.log(list1[i]);
  } 

