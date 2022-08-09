//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCfqiwvIuasXhlNMwCb-0DcuJK9iEfZWeg",
    authDomain: "lets-chat-web-app-59f74.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-59f74-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-59f74",
    storageBucket: "lets-chat-web-app-59f74.appspot.com",
    messagingSenderId: "67706995546",
    appId: "1:67706995546:web:26678e1132e6c46181a963",
    measurementId: "G-MX9F1BR86F"
  };
  
  // Initialize Firebase
  forebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  
    function addUser()
    {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
      });
    }