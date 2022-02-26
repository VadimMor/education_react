import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAto3vIYK_AF2L9QLumAQ8oMlNV-FvEzLA",
	authDomain: "very-hot-burgers-dc4b8.firebaseapp.com",
	databaseURL: "https://very-hot-burgers-dc4b8-default-rtdb.firebaseio.com",
	projectId: "very-hot-burgers-dc4b8",
	storageBucket: "very-hot-burgers-dc4b8.appspot.com",
	messagingSenderId: "861863875550",
	appId: "1:861863875550:web:6ddc82f32ede8ccbd0434f"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;