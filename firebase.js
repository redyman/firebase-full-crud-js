// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration

//reemplazar si el proyecto cambia
const firebaseConfig = {
  apiKey: "AIzaSyD09qLGbD422dV1nte_hGUT4wvsGxNqhI0",
  authDomain: "crud-puro-js.firebaseapp.com",
  projectId: "crud-puro-js",
  storageBucket: "crud-puro-js.appspot.com",
  messagingSenderId: "910427831931",
  appId: "1:910427831931:web:1add8e935ec4a8a2be2cde",
  measurementId: "G-D5GE2LQB3L"
};  
//reemplazar si el proyecto cambia

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  // addDoc(collection(db, "tasks"), { title, description });
  addDoc(collection(db, "tareas"), { title, description });// -- "collection" is same to table on database, creamos una tabla llamada tareas

export const onGetTasks = (callback) =>
  // onSnapshot(collection(db, "tasks"), callback);
  onSnapshot(collection(db, "tareas"), callback); //llamamos a las tareas 

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
