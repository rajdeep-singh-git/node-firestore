const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

// Path to your service account key file
const serviceAccount = path.join(__dirname, 'serviceAccountKey.json');

// Create a new Firestore client instance with your credentials
const firestore = new Firestore({
    projectId: 'learning-firebase-38b4a',
    keyFilename: serviceAccount,
});

// firestore.collection("/students").orderBy("name").where("city", '==', "Sangrur").get().then(snapshot => {
//     snapshot.forEach(doc => {
//         console.log(doc.id, doc.data())
//     })
// })

// let docRef = firestore.collection("/students").doc("ANDS");
// docRef.get().then(data => {
//     console.log(data.data());
// })

// firestore.collection("/students").onSnapshot(snapshot => {
//     // snapshot.forEach(doc => {
//     //     console.log(doc.id, doc.data())
//     // });
//     snapshot.docChanges().forEach(change => {
//         if (change.type == "added") {
//             let doc = change.doc;
//             console.log(doc.id, doc.data())
//         }
//     })
// })