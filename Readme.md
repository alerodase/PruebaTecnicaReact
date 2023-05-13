Este proyecto muestra una lista de posts y permite crear nuevos posts. Está desarrollado utilizando React y utiliza componentes reutilizables, validación de formularios y estilos CSS para lograr una interfaz de usuario atractiva.


COMPONENTES REUTILIZABLES

En el archivo `Card.jsx`, hemos creado un componente reutilizable llamado `Cards` que muestra un post en una tarjeta individual. Este componente acepta props para personalizar el título, el contenido y el botón de eliminación del post. Al utilizar este componente en el archivo `App.jsx`, podemos mostrar fácilmente múltiples posts en la interfaz de usuario.

En el archivo `PostForm.jsx`, hemos creado otro componente reutilizable llamado `PostForm` que muestra un formulario para crear nuevos posts. Este componente utiliza el hook `useForm` de `react-hook-form` para gestionar el estado del formulario y realizar validaciones. También se proporciona retroalimentación visual al usuario en caso de que el título del post sea requerido y no se haya proporcionado.


USO DE HOOKS

En el archivo `App.jsx`, utilizamos los hooks `useState` y `useEffect` de React. Usamos `useState` para almacenar el estado de los posts obtenidos de la API y `useEffect` para realizar la solicitud de los posts una vez que el componente se ha montado. 


USO DE AXIOS

En el archivo `App.jsx`, utilizamos Axios para realizar solicitudes al servidor. Axios es una librería de JavaScript que nos permite realizar solicitudes HTTP y trabajar con respuestas JSON. Al utilizar Axios, podemos hacer una solicitud HTTP a la API de JSONPlaceholder y, cuando obtengamos la respuesta, actualizamos el estado de los posts utilizando el hook useState de React. Esto nos permite mostrar la lista de posts en la interfaz de usuario.


ESTILOS CON CSS

Cada componente tiene su propio archivo CSS asociado para gestionar los estilos específicos de ese componente. También hay un archivo `App.css` que contiene los estilos globales para el componente principal `App`. Se utilizan clases CSS y estilos flexbox para lograr un diseño centrado verticalmente.

