// const firebaseConfig = {
//     apiKey: "AIzaSyAhzDJDvSSgPcDnG7fzA5vV3x7Jvu5Mst0",
//     authDomain: "clientmakingweb.firebaseapp.com",
    // projectId: "clientmakingweb",
    // storageBucket: "clientmakingweb.firebasestorage.app",
//     messagingSenderId: "1073223710706",
//     appId: "1:1073223710706:web:57815f0e711fff6b4a1d6b"
//   };

//   var app = firebase.initializeApp(firebaseConfig);






  // const firebaseConfig = {
  //   apiKey: "AIzaSyCstaVRUD4QK0Dik4DqlgPMTd72930CDFQ",
  //   authDomain: "clientweb-2e544.firebaseapp.com",
  //   projectId: "clientweb-2e544",
  //   storageBucket: "clientweb-2e544.firebasestorage.app",
  //   messagingSenderId: "255391055737",
  //   appId: "1:255391055737:web:774bb8a6768a6526d7f9a8"
  // };





  // function submit() {
  //   try {
  //     var firstName = document.getElementById("firstName").value;
  //     var lastName = document.getElementById("lastName").value;
  //     var phoneNumber = document.getElementById("phoneNumber").value;
  //     var email = document.getElementById("email").value;
  //     var city = document.getElementById("city").value;
  //     var password = document.getElementById("password").value;


     
  //     console.log(firstName, lastName, phoneNumber ,email ,city);
  

  //         firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         var user = userCredential.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         var errorCode = error.code;
  //         var errorMessage = error.message;
  //         console.log(errorMessage);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  
  
//   function Login() {
//     try {
//       var email = document.getElementById("Loginemail").value;
//       var password = document.getElementById("Loginpassword").value;
  
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//           // Signed in
//           var user = userCredential.user;
//           console.log(user);
//         })
//         .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           console.log(errorMessage);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }