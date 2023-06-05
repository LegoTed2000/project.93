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


function logout() {
  localStorage.removeItem("user_name");
  window.location = "index.html";
}
var room_name = localStorage.getItem("Room_Name"); // Replace with the desired room name
  var name = localStorage.getItem("user_name"); // Replace with the desired name
function send() {
  var msg = document.getElementById("msg").value;
  

  firebase.database().ref(room_name).push({
    name: name,
    message: msg,
    likes: 0
  });
  document.getElementById("msg").value = "";
}
function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                    firebase_message_id = childKey;
                    message_data = childData;
                    //Start code
                    console.log(message_data);
                    console.log(firebase_message_id);
                    name = message_data['name'];
                    messag = message_data['message'];
                    likes = message_data['likes'];
                    console.log(name);
                    console.log(messag);
                    console.log(likes);

                    tag_name = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
                    tag_messag = "<h4 class='message_h4'>" + messag + "</h4>";
                    tag_likes = "<button class='btn btn-warning'>";
                    span_with_tag = "<span class='glyphicon glyphicon-thumps-up' >likes : " + likes + "</span> </button>"
                    row = tag_name + tag_messag + tag_likes + span_with_tag;
                    document.getElementById("output").innerHTML = row;
                    //End code
              }
        });
  });
}
getData();