const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const algoliasearch = require('algoliasearch');
const algoliaFunctions = require('algolia-firebase-functions');
 
const algolia = algoliasearch(functions.config().algolia.app,
                              functions.config().algolia.key);
 const index = algolia.initIndex(functions.config().algolia.index);
 
 exports.syncAlgoliaWithFirebase = functions.database.ref('/answers').onWrite(
    event => algoliaFunctions.syncAlgoliaWithFirebase(index, event));