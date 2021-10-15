var firebaseConfig = {
    apiKey: "AIzaSyCkaUFcHiNZE-bFtaJPHRyitxiretYAmPw",
    authDomain: "kwitter-2-784cd.firebaseapp.com",
    projectId: "kwitter-2-784cd",
    storageBucket: "kwitter-2-784cd.appspot.com",
    messagingSenderId: "278631726742",
    appId: "1:278631726742:web:74652977ddaa46947d4cb7"
  };

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="Welcome" +user_name+"|";

  function add_room(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("roomname",room_name);
      window.location="kwitter_page.html";
  }

  