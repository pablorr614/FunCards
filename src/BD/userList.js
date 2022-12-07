import { doc,deleteDoc,getDoc,addDoc,collection} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import {db} from '../BD/fireBase.js'

const userList = document.querySelector('.user')
const fromAdd = document.getElementById('addUser')

const btnAdd = document.getElementById('btnAdd')

btnAdd.addEventListener("click", (e) => {
    e.preventDefault()
   const nom = fromAdd['nombre'].value
   const ape = "pedro"
   const lv = 2
   const email = fromAdd['correo'].value
   const pass =fromAdd['contra'].value
   const vidas = fromAdd['vida'].value
   const monedas = fromAdd['monedas'].value
   const record = fromAdd['rgInco'].value
   const userAdd = addDoc(collection(db,'usuarios'),{nom, ape,email,pass,lv,vidas,monedas,record});
   console.log(userAdd)
    

})

export const setupUser = (data) => {
    let html = "";
    

    if(data.length){
        data.forEach(doc => {
           const user = doc.data()   
           const li = `
           <tr>
           <td class="centrado">${doc.id}</td>
           <td class="centrado">${user.nom}</td>
           <td class="centrado">${user.email}</td>
           <td class="centrado">${user.pass}</td>
           <td class="centrado">${user.lv}</td>
           <td class="centrado">${user.vidas}</td>
           <td class="centrado">${user.monedas}</td>
           <td class="centrado">${user.record}</td>
           <td class="centrado">
               <p>
                   <i class="bi bi-pencil-square edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${doc.id}"></i>
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
                const id = event.target.dataset.id
                const docus = await getDoc(doc(db,"usuarios",id))
                console.log(docus.data())
                const user = docus.data()
                fromAdd['nombre'].value = user.nom
                fromAdd['correo'].value  = user.email
                fromAdd['contra'].value     = user.pass 
                fromAdd['vida'].value = user.vidas
                fromAdd['monedas'].value = user.monedas
                fromAdd['rgInco'].value = user.record
            })
        })

       
    }else{
        console.log("no user")
    }
}

