document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("../index.html");
  }
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      document.getElementById("show-error").innerHTML=error.message;
    });
  console.log(email);
  console.log(password);
}

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
       document.getElementById("show-error").innerHTML=error.message;
    });
}


// function forgetPassword(){
//     const email = document.getElementById("email").value;
//     firebase
//       .auth()
//       .sendPasswordResetEmail(email)
//       .then(() => {
//           alert("Reset link sent email id");
//         // Password reset email sent!
//         // ..
//       })
//       .catch((error) => {
//         document.getElementById("show-error").innerHTML=error.message;
//       });
// }