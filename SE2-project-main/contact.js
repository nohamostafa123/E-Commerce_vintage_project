const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");





const firebaseConfig = {
    apiKey: "AIzaSyAceXidTxYBWU86H5glU4NnqfjhnFBv5NA",
    authDomain: "contact-e64d5.firebaseapp.com",
    databaseURL: "https://contact-e64d5-default-rtdb.firebaseio.com",
    projectId: "contact-e64d5",
    storageBucket: "contact-e64d5.appspot.com",
    messagingSenderId: "352949955504",
    appId: "1:352949955504:web:87d677285c9ce664f80475",
    measurementId: "G-QB5X3L6SL5"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database=firebase.database();
const ref = database.ref("messages");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    ref.push({
        name:name,
        email:email,
        phone:phone,
        message:message
    });

   
    alert.style.display = 'block';
    setTimeout(()=>{
        alert.style.display = 'none';
    },4000);
    form.reset();
});