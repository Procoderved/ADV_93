var firebaseConfig = {
      apiKey: "AIzaSyCNIklA39gotXqejhQC1lzkHa7uSgjdHcs",
      authDomain: "kwitter-487d9.firebaseapp.com",
      databaseURL: "https://kwitter-487d9-default-rtdb.firebaseio.com",
      projectId: "kwitter-487d9",
      storageBucket: "kwitter-487d9.appspot.com",
      messagingSenderId: "102655595452",
      appId: "1:102655595452:web:7260be60d96d8d3ad511b9",
      measurementId: "G-KE6DT88G8E"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
//163-113
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
