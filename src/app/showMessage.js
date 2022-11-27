export function showMessage(message,type){
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type == "success" ? "linear-gradient(to right, #F29492, #114357)":"red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}