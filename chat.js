// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAle4KMxtoNWWO67v8ekVHDq46im4OHxXo",
    authDomain: "letschat-ac030.firebaseapp.com",
    projectId: "letschat-ac030",
    storageBucket: "letschat-ac030.appspot.com",
    messagingSenderId: "212525289111",
    appId: "1:212525289111:web:21825f6f646e540344e3d2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}





