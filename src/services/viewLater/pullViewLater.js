import firebase from 'firebase';

export default async function pullViewLater(userId, callback){
   
    var viewLater = firebase.database().ref(`/users/${userId}/viewlater/`);
    viewLater.on('value', (snapshot) => {
        const data = snapshot.val();
        callback(data)
    });
 
}