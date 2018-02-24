var admin = require("firebase-admin");

var serviceAccount = require("./ejhail-ajah-firebase-adminsdk-y4a93-765d77bb46.json");

admin.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://ejhail-ajah.firebaseio.com"
});

const database = firebase.database();
const auth = firebase.auth();

exports.database = database;
exports.auth = auth;