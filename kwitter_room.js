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
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Roome_Name);
 row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
 concosle.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}