// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAbMYuNnuT9iTOALHsNlN6vyia4sOuQ6pM',
	authDomain: 'scorch-447be.firebaseapp.com',
	projectId: 'scorch-447be',
	storageBucket: 'scorch-447be.appspot.com',
	messagingSenderId: '121994680448',
	appId: '1:121994680448:web:69938072e45b2a73c26e65',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
