import firebase from 'firebase';

const clientCredentials = {
apiKey: "AIzaSyDXPajsd4TFs7Ji-njQ_M_ANalqtSejtrU",
  authDomain: "testapp-47540.firebaseapp.com",
  databaseURL: "https://testapp-47540-default-rtdb.firebaseio.com",
  projectId: "testapp-47540",
  storageBucket: "testapp-47540.appspot.com",
  messagingSenderId: "1002297083999",
  appId: "1:1002297083999:web:9e22c96eb39c14922773ea",
  measurementId: "G-K5VPLE717B"
}

if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
    if ('measurementId' in clientCredentials) firebase.analytics();    
} 
export var db = firebase.firestore();
db.useEmulator('localhost', 8080);
export default firebase;
