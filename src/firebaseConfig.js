import Firebase from 'firebase';
import {FIREBASE_API_KEY,FIREBASE_PROJECT_ID} from 'react-native-dotenv';
let config = {
    apiKey: 'AIzaSyD7qrqintw570SMt1A-KPaBZXaD8rW1fbM',
    authDomain:'reacttest-2f6aa.firebaseapp.com',
    databaseURL: "https://reacttest-2f6aa.firebaseio.com",
    storageBucket:{FIREBASE_PROJECT_ID}+".appspot.com",
};


let app = Firebase.initializeApp(config);
export const  conf = config;
export const db = app.database();
