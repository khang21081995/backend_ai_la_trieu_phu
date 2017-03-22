/**
 * Created by khang on 3/20/2017.
 */
'use strict';


var admin = require("firebase-admin");

var serviceAccount = require("../firebase/demofirebase-38eb1-firebase-adminsdk-f2mgm-df2fa51a0a.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://demofirebase-38eb1.firebaseio.com"
});

const messaging = admin.messaging();

