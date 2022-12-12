//Conexion a la base de datos
import {db} from '../fireBase.js'
import { doc,deleteDoc,getDocs,addDoc,collection} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const querySnapshot =  getDocs(collection(db,"palabras1"));
const formPalabra = document.querySelector("#addPalabras")
var Palabra = {};

//Metodo crear

function insertarPalabra(){
    
    Palabra = {
        palabra: formPalabra['palabra'].value,
        significado: formPalabra['significado'].value,
        imagen: formPalabra['imagen'].value,
        unidad: formPalabra['unidad'].value,
        vocabulario: formPalabra['vocabulario'].value
    }

   

     addDoc(collection(db,'palabras1'),Palabra);
}

/*function borrarPalabra(id){
    const id = event.target.dataset.id
         deleteDoc(doc(db,"palabras1",id))
}*/

/*function editarPalabra(id){

}*/



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
        <i class="bi bi-pencil-square edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${doc.id}"></i>
        <i class="bi bi-trash3-fill delete" data-id="${doc.id}"></i>
    </p>  
</td>
</tr>
`;
            html += li;
        });

        palabras.innerHTML = html;
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

