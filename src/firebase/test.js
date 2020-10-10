import firebase from './firebase.utils.js'
import 'firebase/firestore'

const firestore = firebase.firestore();

// different ways to query from firestore
//1.query
firestore.collection('users').doc('BXVu7hCY4m5P3umx3vlA').collection('items');

//2.query
firestore.doc('users/BXVu7hCY4m5P3umx3vlA/items')

//3.query
firestore.collection('users/BXVu7hCY4m5P3umx3vlA/items')