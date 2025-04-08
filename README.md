# HUB-ENTRETENIMIENTO-MEGA-Cuevanetfliz
Obed Esau Castro Herrera

Cuevanetfliz es una página WEB de streaming interactivo con catálogo de películas/series, sistema de login y gestión de favoritos. Ofrece filtros por género y tarjetas visuales con efectos hover, desarrollado con HTML, CSS y JavaScript

Requerimientos tecnicos:
-Login Modal (Validación básica de usuario/contraseña)
-Filtrado dinámico (Por géneros y tipo de contenido)
-Favoritos (Almacenamiento en array durante la sesión)
-Diseño Responsive (Adaptable a móviles, tablets y desktop)

¿Cómo Instalar Cuevanetfliz?
-Descarga el repositorio: https://github.com/ObedeCastroh/HUB-ENTRETENIMIENTO-MEGA-Cuevanetfliz
-Asegúrate de que los archivos estén organizados así:
/cuevanetfliz/
index.html
styles.css
scripts.js
imagenes .jpg(13 en total)

-Ejecútalo: Abre index.html en tu navegador (Chrome, Firefox, etc.). ¡Listo! Usa admin/1234 para iniciar sesión.
-Mockup:
<img width="3176" alt="Mockup_Cuevanetfliz" src="https://github.com/user-attachments/assets/3a6d423b-b80b-41b9-8131-e516e32bf991" />


-Capturas
Nos logueamos con usuario: admin, contraseña: 1234 ![image](https://github.com/user-attachments/assets/4ffd305f-6e41-4a33-b568-20625fd2956a)

Podemos seleccionar la opción de favoritos para guardar el contenido que nos guste:![image](https://github.com/user-attachments/assets/511f6454-4e39-472f-abcc-5489ddc66603)

Podemos eliminar de la lista de favoritos cuando se requiera:![image](https://github.com/user-attachments/assets/5e77ecf8-5566-4f17-b7fd-215162900ae8)

En generos podemos separar por genero la opción que queramos:![image](https://github.com/user-attachments/assets/6665bdb9-cd96-47a6-9f6c-cccb231cba0f)


-Proceso:
Planeación:
Objetivo: Crear un sitio de entretenimiento.
Features clave: Login básico, Catálogo con películas/series, Filtros por género, Sección de favoritos.
Stack elegido: HTML + CSS + JavaScript puro (sin frameworks).

Estilos (CSS)
Definí variables CSS para la paleta de azules.
Implementé: Efectos hover en tarjetas, Diseño responsive con media queries, Animaciones básicas (transiciones suaves).

-Sprint Review: Cuevanetfliz

¿Qué salió bien? 
*Login funcional con validación básica
*Diseño responsive en móvil/desktop
*Filtros por género dinámicos
*UI atractiva con efectos hover

¿Qué puedo hacer diferente?
*Implementar autenticación con Firebase o backend
*Usar SASS para organizar mejor el CSS
*Migrar a React/Vue para mejor manejo de estado
*Agregar búsqueda y paginación al catálogo
*Integrar un reproductor real (ej. Vimeo/YouTube)

¿Qué no salió bien
*Favoritos no persisten al recargar la página
*Algunas imágenes no cargan si no están en la ruta exacta
*Código JavaScript muy largo (podría modularizarse)
