
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDlDenQfNZahP7NRupdWSmj-vJBPnr5HDM",
  authDomain: "downtown-bookstore-8deb0.firebaseapp.com",
  projectId: "downtown-bookstore-8deb0",
  storageBucket: "downtown-bookstore-8deb0.appspot.com",
  messagingSenderId: "1025411657338",
  appId: "1:1025411657338:web:1742456e42bd64e3d5d5c3",
  measurementId: "G-GSCPT57N7J"
};



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
	
  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Registered Successful");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Login Successful");
    window.location='products.html';
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
	  window.location='index.html';
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
     document.getElementById('user').innerHTML = 'Active User: '+email;
    }
    else{
      document.getElementById('user').innerHTML = 'Not Logged In';
    }
  })

 
    //  document.getElementById("user").innerHTML = "Active User "+email;