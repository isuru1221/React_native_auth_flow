import Firebase from 'firebase';
let config = {
    apiKey: '',
    authDomain:'',
    databaseURL: "",
    storageBucket:"",
};


let app = Firebase.initializeApp(config);
export const  conf = config;
export const db = app.database();
