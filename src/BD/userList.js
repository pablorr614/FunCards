import { doc,deleteDoc,getDoc,addDoc,collection,updateDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import {db} from '../BD/fireBase.js'

const userList = document.querySelector('.user')

const fromAdd = document.getElementById('addUser')
const fromActu = document.getElementById('upUser')

const btnAdd = document.getElementById('btnAdd')
const btnUp = document.getElementById('btnUp')

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
var myModalActu = new bootstrap.Modal(document.getElementById('modalActulizar'))

let id = '';



btnUp.addEventListener("click", (e) => {
    e.preventDefault()
   const nom = fromActu['nombre'].value
   const ape = fromActu['ape'].value
   const lv = 2
   const email = fromActu['correo'].value
   const pass = fromActu['contra'].value
   const vidas = fromActu['vida'].value
   const monedas = fromActu['monedas'].value
   const record = fromActu['rgInco'].value
   const userAdd = updateDoc(doc(db,'usuarios',id),{nom, ape,email,pass,lv,vidas,monedas,record});
   console.log(userAdd)
    myModalActu.hide()

})


btnAdd.addEventListener("click", (e) => {
    e.preventDefault()
   const nom = fromAdd['nombre'].value
   const ape = fromAdd['correo'].value
   const lv = 2
   const email = fromAdd['correo'].value
   const pass =fromAdd['contra'].value
   const vidas = fromAdd['vida'].value
   const monedas = fromAdd['monedas'].value
   const record = fromAdd['rgInco'].value
   const userAdd = addDoc(collection(db,'usuarios'),{nom, ape,email,pass,lv,vidas,monedas,record});
   console.log(userAdd)
   myModal.hide()
 
   
   

})

export const setupUser = (data) => {
    
    let html = "";
    //<td class="centrado">${doc.id}</td> Mostrar id en la tabla

    if(data.length){
        
        data.forEach(doc => {
           const user = doc.data()   
           const li = `
           <tr>  
           <td class="centrado">${user.nom}</td>
           <td class="centrado">${user.ape}</td>
           <td class="centrado">${user.email}</td>
           <td class="centrado">${user.pass}</td>
           <td class="centrado">${user.lv}</td>
           <td class="centrado">${user.vidas}</td>
           <td class="centrado">${user.monedas}</td>
           <td class="centrado">${user.record}</td>
           <td class="centrado">
               <p>
                   <i class="bi bi-pencil-square edit" data-bs-toggle="modal" data-bs-target="#modalActulizar" data-id="${doc.id}"></i>
                   <i class="bi bi-trash3-fill delete" data-id="${doc.id}"></i>
               </p>  
           </td>
       </tr>
        `;
        html += li
        });

        userList.innerHTML = html

        const btnDelete = userList.querySelectorAll('.delete')
        const btnEdit = userList.querySelectorAll('.edit')

        btnDelete.forEach(btn =>{
            btn.addEventListener('click',(event)=>{
                const id = event.target.dataset.id
                deleteDoc(doc(db,"usuarios",id))
                
            })
        })


       
        btnEdit.forEach(btn =>{
            btn.addEventListener('click',async (event)=>{
                id = event.target.dataset.id
                const docus = await getDoc(doc(db,"usuarios",id))
                console.log(docus.data())
                const user = docus.data()
                fromActu['nombre'].value = user.nom
                fromActu['ape'].value = user.ape
                fromActu['correo'].value  = user.email
                fromActu['contra'].value     = user.pass 
                fromActu['vida'].value = user.vidas
                fromActu['monedas'].value = user.monedas
                fromActu['rgInco'].value = user.record

            })
        })

       
    }else{
        console.log("no user")
    }
    
}

