// importing rebase : react firebase package to help mirror state to firebase changes
import Rebase from 're-base';
import firebase from 'firebase'

// configuring application

const firebased = firebase.initializeApp({
        apiKey: "AIzaSyA28mXpoiaLmAKRNBjqq0TQKbNmWZBg7-U",
        authDomain: "catch-of-the-day-joladubu.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-joladubu.firebaseio.com",
        projectId: "catch-of-the-day-joladubu",
        storageBucket: "catch-of-the-day-joladubu.appspot.com",
        messagingSenderId: "204805532277"
});

const base = Rebase.createClass(firebased.database()); // rebase bindings

//this is a named export
export { firebased };

// this is a default export
export default base;