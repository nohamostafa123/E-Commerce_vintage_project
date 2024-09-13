const firebaseConfig = {
    apiKey: "AIzaSyB_XqN_JbkDfMhtg1QinMTu7cJYuQvYkqw",
    authDomain: "login-with-firebase-data-82057.firebaseapp.com",
    projectId: "login-with-firebase-data-82057",
    storageBucket: "login-with-firebase-data-82057.appspot.com",
    messagingSenderId: "590854721246",
    appId: "1:590854721246:web:327cc6ec955e87c9a23c4f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Variables
  const auth = firebase.auth();
  const database=firebase.database();

  //Set up our register function
  function register () {
     fname = document.getElementById('name1').value;
     lname = document.getElementById('name2').value;
     age = document.getElementById('age').value;
     email = document.getElementById('email').value;
     password = document.getElementById('pass').value;

    //validate input fields

    if(validate_email(email) == false || validate_password(password) == false ){
        alert('  Email or Password is not valid');
        return ;
    }
    if(validate_age(age) == false){
        alert('Age is not valid');
        return  ;
    }

    if(validate_field(fname) == false || validate_field(lname) == false || validate_field(age) == false){
        alert('One or More Extra Fields is not valid ');
        return ;
    }


    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
   .then(function() {

    //declare user variables
    var user = auth.currentUser;
    // Add the user to the Firebase database
    var database_ref = database.ref();
    // Create the user data 
    var user_data = {
        first_name: fname,
        last_name: lname,
        age: age,
        email: email,
        last_login : Date.now()
    }

    
        database_ref.child('users/' + user.uid).set(user_data);
        alert('User Created!!');
      
      

   })
   .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code;
    var error_message = error.message;

    // Alert the user of the error
    alert(error_message);
  
   })




}





  //Set up our login function


  function login () {
    email = document.getElementById('email').value;
    password = document.getElementById('pass').value;

    if(validate_email(email) == false || validate_password(password) == false ){
        alert('  Email or Password is not valid');
        return ;
    }

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
        
    //declare user variables
    var user = auth.currentUser;
    // Add the user to the Firebase database
    var database_ref = database.ref();
    // Create the user data 
    var user_data = {
        last_login : Date.now()
    }

    
        database_ref.child('users/' + user.uid).update(user_data);
        alert('User Logged In!!');
      
      

    })
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code;
        var error_message = error.message;
    
        // Alert the user of the error
        alert(error_message);
      
       })



    }







  //validates functions
  function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email)== true){
        return true;
    }else{
        return false;
    }
  }

  function validate_password(password){
    if (password < 8 ){
        return false;
    }else{
        return true;
    }
  }

  function validate_age(age){
    if (age < 0 ){
        return false;
    }else{
        return true;
    }
  }

  function validate_field(field){
    if(field == null){
        return false;
    }

    if (field.length <= 0){
        return false;
    }else{
        return true;
    }
  }







