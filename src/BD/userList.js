
const userList = document.querySelector('.user')

export const setupUser = (data) => {
    let html = "";
    

    if(data.length){
        data.forEach(doc => {
           const user = doc.data()
           console.log(user) 
           console.log(doc.id) 
           const li = `
           <tr>
           <td class="centrado">1</td>
           <td class="centrado">${user.nom}</td>
           <td class="centrado">${user.email}</td>
           <td class="centrado">${user.pass}</td>
           <td class="centrado">${user.lv}</td>
           <td class="centrado">${user.vidas}</td>
           <td class="centrado">${user.monedas}</td>
           <td class="centrado">${user.record}</td>
           
           
           <td class="centrado">
               <p>
                   <i class="bi bi-pencil-square"></i>
                   <i class="bi bi-trash3-fill delete"></i>
               </p>
               
           </td>
       </tr>
        `;
        html += li
        });
        userList.innerHTML = html

        const btnDelete = userList.querySelectorAll('.delete')

        btnDelete.forEach(btn =>{
            btn.addEventListener('click',()=>{
                console.log("delete")
            })
        })

       
    }else{
        console.log("no user")
    }
}