  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB1tGgJ1t6BtLjQN3bJjGoEQA28MmwifEk",
    authDomain: "interest-check-repairman.firebaseapp.com",
    databaseURL: "https://interest-check-repairman.firebaseio.com",
    projectId: "interest-check-repairman",
    storageBucket: "interest-check-repairman.appspot.com",
    messagingSenderId: "720339378857",
    appId: "1:720339378857:web:240e2b26dc035b4b72bfb8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function submitForm(e) {
  e.preventDefault();
  console.log("hihihi")
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
   let phone = document.querySelector(".phone").value;
  let location = document.querySelector(".location").value;
  let model = document.querySelector(".model").value;



 
   saveIntrestInfo(name, email, phone, location, model);

  document.querySelector(".intrest-form").reset();
  $('#exampleModalCenter').modal('show');

}

let intrestInfo = firebase.database().ref("infos");
document.querySelector(".intrest-form").addEventListener("submit", submitForm);


// Save infos to Firebase
function saveIntrestInfo(name, email,  phone, location, model) {
  let newIntrestInfo = intrestInfo.push();

  newIntrestInfo.set({
    name: name,
    email: email,
    phone: phone,
    location: location,
    model: model,

   });
}
