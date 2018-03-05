import firebase from "firebase";
var config = {
	/* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
	apiKey: "AIzaSyBMVQbdf3Jdi-b47y-UX4NSzNAkIHp_kBQ",
	authDomain: "wot-fing.firebaseapp.com",
	databaseURL: "https://wot-fing.firebaseio.com",
	storageBucket: "wot-fing.appspot.com",
	messagingSenderId: "331331873212"
};
var fire = firebase.initializeApp(config);
export default fire;
