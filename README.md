# Journey Mates :avión_despegando:
## Índice
* [i. Acerca de "Journey Mates"](#i-acerca-de-Journey-Mates)
* [ii. Historias de Usuario](#ii-historias-de-usuario)
* [iii. Prototipos](#iii-prototipos)
* [iv. Consideraciones técnicas UX](#iv-consideraciones-tecnicas-UX)
* [v. Proyectos desplegados](#v-proyectos-desplegados)
***
## i. Acerca de Journey Mates
El proyecto _"Journey Mates"_ surge con la finalidad de brindar a las usuarias que disfrutan de viajar y conocer nuevos lugares en Latinoamerica, una red social en la cual, podrán compartir sus experiencias y recomendaciones, y descubrir a través de las recomendaciones de otras usuarias, nuevos lugares, ciudades y otros sitios de interés.
## ii. Historias de Usuario
Las historias de usuario las realizamos en función de los hallazgos de una investigación con personas que disfrutan de viajar.
Nuestras Historias de Usuario fueron 8:
1. ** HU | Crear Cuenta:** Como viajera, quiero registrarme en JourneyMates para crear un perfil.
**Criterios de aceptación:**
    *La página tiene que ser responsive.
    * Al presionar el botón "Registrarme" permite crear una cuenta usando un correo electrónico o a través de gmail.
    * Permite crear una contraseña de acceso.
    *Fiel a prototipo.
**Definición de terminado:**
    *Debe ser una SPA.
    La página muestra un botón "Registarme".
    *La página se puede abrir tanto en computadora como en dispositivos móviles y es funcional.
    *La página muestra un input a través del cual se puede crear una cuenta usando un correo electrónico.
    Se puede crear una contraseña para poder acceder a la cuenta.
    *Se muestra un error si el correo electrónico ya se registró anteriormente.
    *Se muestra un error si la contraseña no cumple con los requisitos (mínimo 8 caracteres y un número)
  2. **HU | Login:** Yo como viajera quiero ingresar a mi cuenta de JourneyMates con mi usuario y contraseña/ con cuenta de google para tener acceso a mi perfil.
**Criterios de aceptación:**
    *La página tiene que ser responsive.
    *La página permite ingresar a un perfil al momento de iniciar sesión con usuario y contraseña.
    *La página muestra un error si la contraseña y/o correo son incorrrectos.
    *Fiel a prototipo.
**Definición de terminado:**
    *Debe ser una SPA.
    *El código pasa los tests necesarios.
    *La página se puede abrir tanto en computadora como en dispositivos móviles y es funcional.
    *Al presionar el botón de "iniciar sesión" te dirige a la página de Home.
    *La página muestra error si el correo ya está registrado o si no es válido.
3. **HU | Mostrar timeline/home:** Yo como viajera quiero ver la página de home para visualizar las publicaciones de mis amigas/os.
**Criterios de aceptación:**
    *La página tiene que ser responsive.
    *Se visualizan las publicaciones de los amigos y amigas del perfil en el que se está iniciando sesión.
    *Se muestran las publicaciones de la más reciente a la más antigua.
    *Fiel a prototipo.
**Definición de terminado:**
    *Debe ser una SPA.
    *El código pasa los tests necesarios.
    *La página se puede abrir tanto en computadora como en dispositivos móviles y es funcional.
4. **HU | Mostrar perfil:** Yo como viajera quiero ver/acceder a mi perfil de Journey Mates para visualizar, publicar y editar mis posts.
**Criterios de aceptación:**
    *La página tiene que ser responsive.
    *Se visualiza la información de la usuaria.
    *Se muestra mi foto de perfil.
    *Se muestra la opción de editar perfil.
    *Fiel a prototipo.
**Definición de terminado:**
    *Debe ser una SPA.
    *El código pasa los tests necesarios.
    *La página se puede abrir tanto en computadora como en dispositivos móviles y es funcional.
    *Se muestra la sección de información y contiene foto de perfil e información de la persona (nombre, edad, país)
5. **HU | Publicar:** Yo como viajera quiero publicar en mi perfil estados y/o fotos
para compartir en mi perfil lo que estoy haciendo.
**Criterios de aceptación:**
    *La página tiene que ser responsive.
    *Existe un input para poder agregar mi estado y un botón para publicarlo.
    *Se muestra mi foto de perfil.
    *Se muestra la opción de "publicar".
    *Fiel a prototipo.
**Definición de terminado:**
    *Debe ser una SPA.
    *El código pasa los tests necesarios.
    *La página se puede abrir tanto en computadora como en dispositivos móviles y es funcional.
    *La página te permite scrollear para visualizar las publicaciones.
6. **HU | Editar:** Yo como viajera quiero editar mis publicaciones para poder modificar errores o publicaciones en general..
**Criterios de aceptación:**
    *La página tiene que ser responsive.
    *Existe un botón para poder editar mis publicaciones.
    *Se muestra el input de la publicación para poder editarlo.
    *Se muestra la opción de "publicar".
    *Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
    *Fiel a prototipo.
**Definición de terminado:**
    *Debe ser una SPA.
    *El código pasa los tests necesarios.
    *La página se puede abrir tanto en computadora como en dispositivos móviles y es funcional.
    *Puedes editar cada una de tus publicaciones a través de un botón de editar.
    *Tu estado se publica nuevamente y al recargar la página se muestra editado.
    *Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
7. **HU | Likear:** Yo como viajera quiero poder dar y quitar like a las publicaciones.
para interactuar con las publicaciones.
**Criterios de aceptación:**
    *La página tiene que ser responsive.
    *Existe un botón/logo que al momento de dar click, muestra un like y cambia de color.
    *Se puede quitar el like de la publicación.
    *Existe un conteo de likes.
    *Fiel a prototipo.
**Definición de terminado:**
    *Debe ser una SPA.
    *El código pasa los tests necesarios.
    *La página se puede abrir tanto en computadora como en dispositivos móviles y es funcional.
    *Cada publicación cuenta con un logo que al momento de darle click, se agrega un like al conteo.
## iii. Prototipos
* Prototipo de baja fidelidad
![img](./src/images/Prototipo%20de%20baja_mobile.JPG)
![img](./src/images/Prototipo%20de%20baja_desktop.JPG)
* Prototipo de alta fidelidad
![img](./src/images/1.png)
![img](./src/images/2.png)
![img](./src/images/3.png)
![img](./src/images/4.png)
## iv. Consideraciones técnicas UX
* Usuaria #1:
    Como usuaria de Journey Mates, considero que la interfaz es muy amigable. La idea detrás de la página es valiosa, ya que me permite compartir y leer recomendaciones y reseñas de otros viajeros. Además, la página es responsive, lo que significa que puedo abrirla tanto en mi computadora como en mi celular y sigue siendo funcional en ambos dispositivos. La navegación es clara y fácil de seguir, lo que hace que sea sencillo encontrar la información que estoy buscando. La interfaz de usuario es atractiva y la disposición de la información es clara y legible. En general, estoy muy contenta con la experiencia de usuario en Journey Mates.
* Usuaria #2:
    Como usuaria de Journey Mates, me gustó especialmente la funcionalidad de dar "like" a las recomendaciones y reseñas de otros viajeros, ya que me permite destacar aquellas que realmente me gustaron. Además, los colores elegidos para la página me parecen adecuados y ayudan a crear una atmósfera acogedora y amigable.
    Sin embargo, me gustaría ver un mapa o imágenes en la página para hacerla más atractiva visualmente. Creo que sería una excelente manera de mostrar los diferentes países de las recomendaciones que se pueden encontrar en la página y hacer que sea más fácil para las usuarias visualizarlos. En general, estoy muy contenta con la experiencia de usuario en Journey Mates, pero creo que un mapa o imágenes añadirían un toque adicional de atractivo visual a la página.
## v. Proyectos desplegados
* :computadora: Daniela: https://journey-mates.netlify.app/
* :computadora: Carmen:  https://journey-mates.netlify.app/
* :computadora: Miriam:  https://journey-mates.netlify.app/
