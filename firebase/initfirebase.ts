

import firebase from 'firebase';


const clientCredentials = {
    apiKey: "AIzaSyDFMk5OX_jVvuRHRgqC1IzHv66ebdrUIas",
    authDomain: "fir-emulator-b0345.firebaseapp.com",
    databaseURL: "https://fir-emulator-b0345-default-rtdb.firebaseio.com",
    projectId: "fir-emulator-b0345",
    storageBucket: "fir-emulator-b0345.appspot.com",
    messagingSenderId: "633445818093",
    appId: "1:633445818093:web:76dfbabed1e6c2b06f36e4",
    measurementId: "G-T5TT868KMN"
}

if (!firebase.apps.length) firebase.initializeApp(clientCredentials);


export var db = firebase.firestore();
export default firebase;

