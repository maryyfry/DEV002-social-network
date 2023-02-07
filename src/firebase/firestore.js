/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
// import { async } from 'regenerator-runtime';
import {
  saveTask, deleteTask, getTask, updateTask, tapLike, dislike, user, auth, dateTask,
} from './configuracion.js';

const tasksContainer = document.getElementById('contenedor-publicaciones'); // Elementos del DOM estan en timeLine
const taskForm = document.getElementById('task-form');

let editStatus = false; // Es una variable booleana que indica si se está editando una tarea existente o no.
let id = ''; // Es una cadena vacía que representa el identificador de la tarea que se está editando.

window.addEventListener('DOMContentLoaded', async () => {
  dateTask((querySnapshot) => { // Se utiliza dateTask para obtener un conjunto de tareas (querySnapshot).
    let html = '';

    querySnapshot.forEach((doc) => { // doc se utiliza para crear una referencia a un documento en una colección específica
      const task = doc.data(); // Luego, se itera sobre cada tarea (doc) y se extraen los datos relevantes (task)
      const likes = task.likes; // Contiene lista de usuarios que han dado "Me gusta"
      const likesNumber = likes.length; // Es el número de "Me gustas"
      const userId = user().uid; // "userId" contiene el identificador de usuario actual.
      const currentLike = likes.indexOf(userId); // Contiene la posición en la lista "likes" del usuario actual.
      let likeSrc = ''; // Es una cadena que indica la ubicación de la imagen que se usará para mostrar si el usuario ha dado "Me gusta" a la tarea o no.
      const likeImg = () => { // Aqui se verifica si el usuario dio like o lo quito.
        if (currentLike === -1) { //
          likeSrc = 'images/like-logo.png';
        } else {
          likeSrc = './images/heart.png';
        }
      };
      likeImg();

      html += `
                <div class = 'contenedor-padre'> 
                  <p class="name-post"> ${task.name} </p>
                  <p class="date">${task.createdDateTime.toDate().toLocaleString('es-ES', {
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
  })} </p>
                    <textarea class ='div-post-publicado'>${task.description}</textarea>`;

      if (task.uid === auth.currentUser.uid) { // Aqui se compara el campo "uid" en los datos de (task) con el identificador de usuario actual en la autenticación (auth).
        // Si son iguales, significa que el usuario actual es el autor de la tarea y puede editar o eliminar la tarea.
        html += `
                        <img src="./images/editlogo2.png" class='btn-edit' data-id="${doc.id}">
                        <img src="./images/deletelogo2.png" class='btn-delete' data-id="${doc.id}"> 
                    <div class="contenedor-likes">
                        <img class="like-logo" data-id="${doc.id}" src='${likeSrc}' alt="heart">
                        <p class="contadorLikes" data-id="${doc.id}"> ${likesNumber}</p>
                    </div>
                `;
      } else {
        html += ` 
                     <div class="contenedor-likes">
                        <img class="like-logo" data-id="${doc.id}" src='${likeSrc}' alt="heart">
                        <p class="contadorLikes" data-id="${doc.id}"> ${likesNumber}</p>
                    </div>
                    </div>
                    `;
      }
    });

    tasksContainer.innerHTML = html;

    const userId = user().uid; // Almacena el identificador único de un usuario
    const botonLike = tasksContainer.querySelectorAll('.like-logo'); // Se almacenan listas de elementos html que contengan la clase .like-logo

    botonLike.forEach((btn) => {
      btn.addEventListener('click', async (e) => { // Esta función asigna un event listener a cada botón de me gusta y al hacer click se ejecuta una funcion asincrona
        const id1 = e.target.dataset.id; // Aqui se extrae el valor de data-id del elemento que ha sido clicado.
        console.log('id', id1);
        const doc = await getTask(id1); // Llama a la función "getTask(id1)" para obtener un documento correspondiente al id.
        console.log('doc', doc);
        const likes = doc.data().likes; // Se obtiene el array "likes" del documento obtenido.
        const currentLike = likes.indexOf(userId); // Busca el índice del id de usuario actual dentro del array de "likes".

        console.log(likes);
        if (currentLike === -1) { // Si el índice es -1, significa que el usuario actual no ha dado "me gusta" por lo que llama a la función "tapLike" para agregar el "me gusta".
          tapLike(id1, userId);
        } else { // Si el índice no es -1, significa que el usuario actual ya ha dado "me gusta" por lo que llama a la función dislike para eliminar el "me gusta".
          dislike(id1, userId);
        }
      });
    });

    // Eliminar tareas

    const btnsDelete = tasksContainer.querySelectorAll('.btn-delete');// Esta función es para manejar el evento de click en los botones "Eliminar".
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => { // se itera sobre cada uno de ellos con un addeventlistener para cuando se hace clic.
        if (confirm('¿Estás segura de que deseas eliminar esta publicación?')) { // Se muestra una alerta de confirmación
          deleteTask(dataset.id); // dataset es una propiedadque permite acceder a los atributos personalizados de un elemento HTML.
        }
      });
    });

    // Editar tareas

    const btnsEdit = tasksContainer.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getTask(e.target.dataset.id);
        console.log(doc.data());
        const task = doc.data();

        taskForm['task-description'].value = task.description;

        editStatus = true;
        id = doc.id;

        taskForm['btn-publicar'].innerText = 'Publicar';
      });
    });
  });
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const description = taskForm['task-description'];

  if (description.value.trim() === '') {
    alert('No se pueden publicar campos vacíos :(');
  } else {
    if (!editStatus) {
      saveTask(description.value);
    } else {
      updateTask(id, {
        description: description.value,
      });

      editStatus = false;
    }

    taskForm.reset();
  }
});
