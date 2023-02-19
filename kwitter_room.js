
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyDOKkmLIJ1z-3vNY67LSoICB_NqPbdPKvM",
      authDomain: "red-social-6cf1c.firebaseapp.com",
      databaseURL: "https://red-social-6cf1c-default-rtdb.firebaseio.com",
      projectId: "red-social-6cf1c",
      storageBucket: "red-social-6cf1c.appspot.com",
      messagingSenderId: "165869451981",
      appId: "1:165869451981:web:637a40178f1fd5ec578784"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    console.log(user_name);
    document.getElementById("user_name").innerHTML="¡Hola " + user_name + "!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "agregando nombre de sala"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("nombre sala - " + Room_names);
      row = "<div class='romm_name' id=" +  Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //Final del código
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
window.location="index.HTML";
}

