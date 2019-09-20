import Firebase from 'firebase';
import {FIREBASE_API_KEY,FIREBASE_PROJECT_ID} from 'react-native-dotenv';
let config = {
    apiKey: {FIREBASE_API_KEY},
    authDomain:{FIREBASE_PROJECT_ID} + '.firebaseapp.com',
    databaseURL: "https://"+{FIREBASE_PROJECT_ID}+".firebaseio.com",
    storageBucket:{FIREBASE_PROJECT_ID}+".appspot.com",
};


let app = Firebase.initializeApp(config);
export const  conf = config;
export const db = app.database();
