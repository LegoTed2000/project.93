var firebaseConfig = {
    apiKey: "AIzaSyDnn4PViIZSuPQZyyAIMlC2FDfFoIn5dKo",
    authDomain: "chat-app-2-a3cff.firebaseapp.com",
    databaseURL: "https://chat-app-2-a3cff-default-rtdb.firebaseio.com",
    projectId: "chat-app-2-a3cff",
    storageBucket: "chat-app-2-a3cff.appspot.com",
    messagingSenderId: "811548797279",
    appId: "1:811548797279:web:80157dba2279ef2f1deeea",
    measurementId: "G-0DY2V5HSEJ"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value',function(snapshot) {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
           row =  "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
           document.getElementById("output").innerHTML = row ;
            //End code
        });
    });
}
getData();

Name = localStorage.getItem("user_name");
document.getElementById("Username").innerHTML = Name;

function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";
}
function addRoom() {
    var room = document.getElementById("roomname").value;
    localStorage.setItem("Room_Name", room);
    console.log(room);
    firebase.database().ref("/").child(room).update({
        purpose: "Adding the room name"
  });
  document.getElementById("roomname").value = "";
}
function redirectToRoomName(roomname) {
    console.log(roomname); 
    localStorage.setItem("roomname", roomname);
    window.location = "chat_room.html";
}
