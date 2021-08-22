  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyB_ced-rjUp1XllH9Ok2A0pZQB-RxOeryY",
//     authDomain: "bottomless-f85c1.firebaseapp.com",
//     projectId: "bottomless-f85c1",
//     storageBucket: "bottomless-f85c1.appspot.com",
//     messagingSenderId: "192067594646",
//     appId: "1:192067594646:web:93e736823c568ba82ed5b7",
//     measurementId: "G-FQY94K4YVK"
//   };

  var firebaseConfig = {
    apiKey: "AIzaSyB_ced-rjUp1XllH9Ok2A0pZQB-RxOeryY",
    authDomain: "bottomless-f85c1.firebaseapp.com",
    projectId: "bottomless-f85c1",
    databaseURL: "https://bottomless-f85c1-default-rtdb.firebaseio.com/",
    storageBucket: "bottomless-f85c1.appspot.com",
        messagingSenderId: "192067594646",
    appId: "1:192067594646:web:93e736823c568ba82ed5b7",
    measurementId: "G-FQY94K4YVK"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();