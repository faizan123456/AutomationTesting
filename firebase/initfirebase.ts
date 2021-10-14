

import firebase from 'firebase';
import firebaseConfig from './firebaseconfig.json'
const clientCredentials = {

    apiKey: process.env.APIKEY,
    authDomain:process.env.AUTHDOMAIN,
    databaseURL:process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket:process.env.STORAGE_BUCKET,
    messagingSenderId:process.env.MESSAGE_SENDER_ID,
    appId:process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);


export var db = firebase.firestore();
export default firebase;

