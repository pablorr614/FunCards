const postList = document.querySelector('.posts')
const userList = document.querySelector('.user')

export const setupUser = (data) => {
    let html = "";
    

    if(data.length){
        data.forEach(doc => {
           const user = doc.data()
           console.log(user) 
           const li = `
           <tr>
           <td class="centrado">1</td>
           <td class="centrado">${user.nombre}</td>
           <td class="centrado">${user.email}</td>
           <td class="centrado">${user.pass}</td>
           <td class="centrado">${user.lv}</td>
           
           <td class="centrado">
               <p>
                   <i class="bi bi-pencil-square"></i>
                   <i class="bi bi-trash3-fill"></i>
               </p>
               
           </td>
       </tr>
        `;
        html += li
        });
        userList.innerHTML = html
        console.log("loop user")
    }else{
        console.log("no user")
    }
}