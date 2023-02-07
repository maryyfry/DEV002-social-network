/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle
import { Login } from './pages/login.js';
// eslint-disable-next-line import/no-cycle, import/no-unresolved
import { Register } from './pages/Register.js';
// eslint-disable-next-line import/no-cycle
import { timeLine } from './pages/timeLine.js';
import { profile } from './pages/profile.js';

const root = document.getElementById('root');
const routes = {
  '/': Login,
  '/login': Login,
  '/register': Register,
  '/timeLine': timeLine,
  '/profile': profile,
};

// Esta funcion permite cambiar la ruta (URL) actual y reemplazar el contenido HTML en la página sin recargar la página.
// El primer argumento es un objeto vacío, el segundo es el nuevo nombre de ruta y el tercero es la URL completa.
export const next = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = ''; // limpia el contenido actual de un elemento con el ID "root"
  root.appendChild(routes[pathname]()); // agrega un nuevo contenido HTML al elemento "root" usando la función asociada
}; // con la nueva ruta especificada en "pathname" del objeto "routes".

export const onNavigate = (pathname) => {
  window.history.pushState( // cambia la URL actual en el navegador sin recargar la página.
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild); // elimina el primer hijo del elemento con el ID "root".
  root.appendChild(routes[pathname]());// agrega un nuevo contenido HTML al elemento "root" usando la función asociada
};// con la nueva ruta especificada en "pathname" del objeto "routes".

// Esta función permite mostrar diferentes componentes en la página web sin necesidad de recargarla, y actualizar el contenido de la página.
const component = routes[window.location.pathname]; // asigna un componente específico a la constante  basada en la ruta actual del navegador.
// La ruta actual se obtiene de "window.location.pathname", y el componente se obtiene de "routes[window.location.pathname]"
// que es un objeto que mapea las rutas a funciones que devuelven componentes.
window.onpopstate = () => { // define un controlador de eventos que se activa cada vez que el usuario navega hacia atrás o adelante en el historial del navegador.
  root.removeChild(root.firstChild);// elimina el primer hijo del elemento con el ID "root"
  root.append(component());// agrega el componente actual al elemento "root" ejecutando la función correspondiente.
};

root.appendChild(component());// agrega el componente correspondiente a la ruta actual al elemento "root" ejecutando la función correspondiente.
