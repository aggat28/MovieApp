import firebase from "firebase";


export default function register({email, password}) {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
  })
  
}