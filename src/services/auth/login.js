import firebase from "firebase";



export default async function login({email, password}) {

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
 
 
}