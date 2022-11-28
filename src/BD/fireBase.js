import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCChwOQ8IlB6hv17L3TLQLUToZx1laWxYE",
    authDomain: "funcards-js.firebaseapp.com",
    projectId: "funcards-js",
    storageBucket: "funcards-js.appspot.com",
    messagingSenderId: "655102879736",
    appId: "1:655102879736:web:a784b55229e31ac10bd80d"
  };

export const app = initializeApp(firebaseConfig);
console.log(app)
export const db = getFirestore(app)
export const auth = getAuth(app)

