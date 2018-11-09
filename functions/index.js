
const functions = require('firebase-functions');
const { firestore } = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { Router } = require('express');
const app = express();
const router = new Router();
const cookieParser = require('cookie-parser')();
const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);
//admin.initializeApp();
admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });
let db = admin.firestore();

app.use(cors({ origin: true }));
app.use(cookieParser);

router.get('/', (req, res) => {
        console.log('request data-----',req.query);
        //addUser(req.query);
        // res.sendStatus(200);
        res.send(`Hello`);
});

function addUser(object){
    
    console.log('-----adduser in process',db.collection('users'));
     return db
    .collection('users')
    .add(object) //.then(result=>{
//      console.log("-------user added to database--------");
//      return true;
//    }) .catch(err => {
//     console.log('error occured while adding document', err);
//     return err;
//   });

return true;

}


exports.cloudapi = functions.https.onRequest(router);
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
   });
   







