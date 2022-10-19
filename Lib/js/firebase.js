// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import { getAnalytics } from "./firebase-analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUSzG1EDNohfEQkdyBHtaP6hgdUAq6GoI",
  authDomain: "dev3apes-c5b59.firebaseapp.com",
  projectId: "dev3apes-c5b59",
  storageBucket: "dev3apes-c5b59.appspot.com",
  messagingSenderId: "257103445211",
  appId: "1:257103445211:web:65421a17e8079d11a5a0fe",
  measurementId: "G-D001YYJNNH",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
let userID;
onAuthStateChanged(auth, (user) => {
  if (user) {
    //   window.location.href = "Explore.html";
    console.log(user.uid);
    userID = user.uid;
    $("#loginUser").remove();
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    $("#profile").remove();
    $("#settings").remove();
    $("#logoutUser").remove();
    $("#create-tag").remove();
    // $("#LogoutUser").empty();
  }
});

// creating new user on firebase
let userDetail = {
  useremail: document.getElementById("email"),
  userpassword: document.getElementById("password"),
};

let regUser = {
  email: document.getElementById("new-email"),
  password: document.getElementById("new-password"),
  confirm_password: document.getElementById("confirm-password"),
  fname: document.getElementById("name"),
  lname: document.getElementById("last-name"),
};

$("#CreateNewUser").on("click", function (e) {
  e.preventDefault();

  if (regUser.confirm_password.value != regUser.password.value) {
    alert("does not match");
  } else {
    const email = regUser.email.value;
    const password = regUser.confirm_password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        window.location.href = "Explore.html";
        const user = userCredential.user;
        console.log(user.uid);
        // ...
        const userDetails = {
          name: regUser.fname.value,
          lastName: regUser.lname.value,
          email: regUser.email.value,
          userid: user.uid,
        };

        $.ajax({
          type: "POST",
          url: "../Lib/php/addUser.php",
          data: userDetails,

          success: function (response) {
            console.log(response);
          },
        });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        $("#errorMessage").text(errorMessage).css("color", "red");
        // ..
      });
  }
});

$("#signIn").on("click", function (e) {
  e.preventDefault();
  const email = userDetail.useremail.value;
  const password = userDetail.userpassword.value;

  console.log(password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      window.location.href = "Explore.html";
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      $("#errorMessage").text(errorMessage).css("color", "red");
    });
});
$("#logoutUser").on("click", function () {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "Explore.html";
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
});
$("#resetPassword").on("click", function (e) {
  e.preventDefault();
  const email = userDetail.useremail.value;
  console.log(email);
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
