export const timeLine = () => {
  const divTimeLine = document.createElement('div');
  divTimeLine.setAttribute('class', 'container-div-timeLine');
  const viewTimeLine = `
    <header>
<nav class="contenedor-nav">
    <li class="perfil-nav"> Timeline </li>
    <li>
        <img class="logo-nav" src="./images/logo.png" alt="">
    </li>
</nav>
</header>
<section class="seccion-publicar">
    <div class="contenedor-publicaciones">
        <picture>  <img class="user-logo-publicaciones" src="./images/user.png" alt=""> </picture>
        <div> <input class="input-recomendaciones" type="text" placeholder="¿Cuáles son tus  recomendaciones de hoy?"> </div>
    </div>
    <button class="btn-publicar">Publicar</button>
</section>
<hr>
<section class="seccion-publicar2">
    <div class="contenedor-publicaciones">
        <picture>  <img class="user-logo-publicaciones2" src="./images/user.png" alt="user-logo"> </picture>
        <div> <input class="input-publicacion" type="text"> </div> </div>
     <div class="contenedor-likes">
        <img class="heart-logo" src="./images/heart.png" alt="heart">
        <p> 3 </p>
    </div>
    </section>
    <nav class="navbar">
        <li class="li-navbar"> <img class="navbar-img" src="./images/home.png" alt="Home"> </li>
        <li class="li-navbar"> <img class="navbar-img" src="./images/profilelogo.png" alt="Profile"> </li>
        <li class="li-navbar"> <img class="navbar-img" src="./images/log-out.png" alt="log-out"> </li>
    </nav>
`
  divTimeLine.innerHTML = viewTimeLine;
  return divTimeLine;
};

