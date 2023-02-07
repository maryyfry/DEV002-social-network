/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
// Importa la biblioteca de Firebase
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
  arrayUnion,
  arrayRemove,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

// Your web app's Firebase configuration
// Contiene valores de clave necesarios para conectarse y utilizar un proyecto específico en Firebase.
const firebaseConfig = {
  apiKey: 'AIzaSyAAHfvbH9LChUrOwAbR4cydwCsmHa7Q330',
  authDomain: 'usuarias-journey-mates.firebaseapp.com',
  projectId: 'usuarias-journey-mates',
  storageBucket: 'usuarias-journey-mates.appspot.com',
  messagingSenderId: '15257223280',
  appId: '1:15257223280:web:eecc0cb646124a2f42b4b5',
  measurementId: 'G-4W8ETMYH7S',
};
// Inicializa la aplicación de Firebase
export const app = initializeApp(firebaseConfig); // Inicializa una instancia de Firebase
export const auth = getAuth(app); // Obtiene un servicio de autenticación de Firebase a partir de la instancia inicializada
export const provider = new GoogleAuthProvider(app);// Crea un proveedor de autenticación de Google a partir de la instancia de Firebase.
export const db = getFirestore(app);// Obtiene un servicio de base de datos de Firestore de Firebase a partir de la instancia inicializada.
export const user = () => auth.currentUser;// Define una función que devuelve el usuario actualmente autenticado en Firebase.

// Esta funcion toma como entrada una descripción y agrega un documento a una colección de tareas en Firestore.
export const saveTask = (description) => addDoc(collection(db, 'tasks'), {
  description,
  name: auth.currentUser.displayName,
  uid: auth.currentUser.uid, // Identificador único del usuario actual obtenido a través de la autenticación de Firebase.
  likes: [],
  createdDateTime: Timestamp.fromDate(new Date()), // Es una marca de tiempo que indica la fecha y hora actual cuando se guardó la tarea.
});

// Esta función toma como entrada el nombre, identificador único, correo electrónico y país del usuario, y agrega un documento a una colección de usuarios en Firestore.
export const saveUser = (name, uid, email, pais) => addDoc(collection(db, 'users'), {
  name,
  uid,
  email,
  pais,
  createdDateTime: Timestamp.fromDate(new Date()),
});

// Estas funciones realizan una operación específica en la colección de tareas en Firestore.
export const getTasks = () => getDocs(collection(db, 'tasks')); // Obtiene todos los documentos de la colección de tareas utilizando la función getDocs.
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id)); // Elimina un documento específico de la colección de tareas utilizando la función deleteDoc con su id.
export const getTask = (id) => getDoc(doc(db, 'tasks', id));// Obtiene un documento específico de la colección de tareas utilizando la función getDoc con el id.
export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);// Actualiza un documento específico de la colección de tareas utilizando la función updateDoc.
export const dateTask = (querySnapshot) => { // 0rdena todos los documentos en la colección de tareas por fecha y hora de creación en orden descendente utilizando la función query y orderBy
  const q = query(collection(db, 'tasks'), orderBy('createdDateTime', 'desc'));// escucha los cambios de la coleccion con la función onSnapshot
  onSnapshot(q, querySnapshot);// querySnapshot contiene información sobre los documentos devueltos por la consulta en tiempo real.
};

// Create new users
// Esta funcion sirve para registrar un nuevo usuario con correo electrónico y contraseña mediante la función createUserWithEmailAndPassword.
export async function registerUser(email, password, name, pais, callback) { // Utiliza una promesa
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, {
      displayName: name,
    }); // Si la promesa se resuelve correctamente, se actualiza el perfil del usuario en la base de datos.
    console.log('Usuario registrado correctamente');
    const user = userCredential.user;
    const userId = user.uid;
    user.displayName = name;
    saveUser(user.displayName, userId, email, pais);
    callback(true);// Se llama una función de callback para indicar que el registro se ha realizado correctamente.
  } catch (error) {
    console.error(error.code);
    if (error.code === 'auth/email-already-in-use') {
      alert('Este correo ya está registrado'); // Si la promesa falla, se maneja el error correspondiente y se muestra una alerta.
    } else if (error.code === 'auth/weak-password') {
      alert('Tu contraseña debe contener al menos 6 caracteres');
    } else if (error.code === 'auth/invalid-email') {
      alert('Este correo no existe o es inválido');
    } else if (error.code === 'auth/internal-error') {
      alert('Completa todos los campos');
    }
    callback(false); // Se llama a la función de callback para indicar que el registro no se ha realizado correctamente.
  }
  await sendEmailVerification(auth.currentUser); // Se envía un correo electrónico de verificación al usuario recién registrado.
}

// Inicio de sesión con email
export async function inicioDeSesionEmail(email, password) { // Función asíncrona se utiliza para iniciar sesión con una cuenta existente usando un correo electrónico y una contraseña.
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password); // Se utiliza la función signInWithEmailAndPassword para iniciar sesión.
    console.log('signed in');
    const user = userCredential.user; // Contiene información sobre el usuario, como su id.
    const userId = user.uid;
    console.log(user, userId);
    return true;// Si la operación es exitosa, la función imprime un mensaje "signed in" y devuelve true.
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Este correo ya está registrado');
    } else if (error.code === 'auth/weak-password') {
      alert('Tu contraseña no es segura');
    } else if (error.code === 'auth/invalid-email') {
      alert('Este correo no existe o es inválido');
    } else if (error.code === 'auth/internal-error') {
      alert('Completa todos los campos');
    }
    return false; // Si hay algún error, la función muestra un mensaje de alerta de error y devuelve false.
  }
}

// Sign in with Google
// Esta función que maneja el inicio de sesión con un proveedor de autenticación externo (Google, en este caso).
export const authGoogle = async () => {
  try {
    const userResult = await signInWithPopup(auth, provider); // La función intenta iniciar sesión mediante la función signInWithPopup(auth, provider)
    console.log(userResult);
    console.log('probando');
    window.location.href = '/timeLine'; // Si el inicio de sesión es exitoso, se almacena el resultado en userResult y se redirige a la página /timeLine.
  } catch (error) { // Si hay un error, no se hace nada (no se muestra una alerta o un mensaje de error, ni se redirige a otra página).
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // const correo = error.customData.email;
    // console.log(error);
  }
};

// Cerrar sesión
// Esta función permite cerrar la sesión actual.
export const signOutFirebase = (auth) => auth.signOut(); // Toma un parámetro auth que representa una instancia de Firebase
// y llama a su método signOut() que termina la sesión actual.
export const onAuth = (auth) => { // Toma un parámetro auth y llama al método onAuthStateChanged
  auth.onAuthStateChanged((user) => { // para especificar una función callback que se ejecutará cada vez que el estado de autenticación cambie.
    if (user) {
      console.log('user is signed in');
      // const uid = user.uid;
    } else {
      console.log('user is signed out'); // Se verifica si un usuario está actualmente conectado o no.
    }
  });
};

// Like function

export const tapLike = (id, newLike) => {
  updateDoc(doc(db, 'tasks', id), { // Actualiza el documento en la colección "tasks" con el
    likes: // identificador "id" agregando un nuevo elemento "newLike" a la lista de "likes"
      arrayUnion( // Permite agregar un nuevo elemento a un campo en la base de datos
        newLike,
      ),
  });
};

export const dislike = (id, oldLike) => { // Se realiza la operación opuesta, eliminando un elemento "oldLike" de la lista de "likes".
  updateDoc(doc(db, 'tasks', id), { // updateDoc actualiza el documento en la base de datos y doc toma como argumentos db, task y id
    likes:
      arrayRemove( // Permite eliminar un elemento en la base de datos.
        oldLike,
      ),
  });
};

export {
  createUserWithEmailAndPassword,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  Timestamp,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getFirestore,

};
