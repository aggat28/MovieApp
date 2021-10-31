import firebase from 'firebase'

export default async function pushViewLater({userId, movieId}){
   
    return firebase.database().ref(`/users/${userId}/viewlater/`).set({id: movieId});
 
}