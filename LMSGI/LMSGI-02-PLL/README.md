# LMSGI-02-PLL
Project Lunar Landing

##Contenido##
Podemos observar que el proyecto contiene 4 branches (una de ellas la master).

  * Master.
  * Indent.
  * Minify.
  * CSS-media-query.

###Master###
Es el branch master del proyecto. A partir de este se crean los diferentes branches.

###Indent###
Es el branch dedicado a la versión correctamente identada.

###Minify##
Branch dedicado a realizar una Versión optimitzada y reducida a la mínima expresión (minify).

La optimización ha sido realizada con las herramientas en linea encontradas en las siguientes url:

 * **HTML**: http://minifycode.com/html-minifier.
 * **CSS**: https://cssminifier.com/.

###Branch CSS-media-query###
Este branch es debido a que por no leer el enunciado detenidamente cree el CSS con media query por lo que no es válido para la primera entrega del "Project Lunar Landing".

Utiliza CSS Media Query.

##Diseño de la maquetación###
Se ha optado por intentar ser fiel al diseño indicado en la practica aunque se han añadido 2 elementos como el header y un elemento de navegación.

El diseño se ha hecho responsive y se ha testeado en Chrome y en Firefox con las herramientas que emulan dispositivos de diferentes resoluciones.

La maquetación se ha hecho en función del device-width, indicado en el tag link, y se ha asociado a un fichero css correspondiente (style, mobile o tablet).

 * Dispositivos resolución móviles - device-width = max 599px > mobile.css.
 * Dispositivos resolución tablet - device-width = min 600px y max 767px > tablet.css.
 * Dispositivos resolución escritorio - device-width = min 768px > style.css.

Aquí podemos ver lo indicado en el código html:

```html
<link rel="stylesheet" type="text/css" href="css/mobile.css" media="screen and (max-device-width: 599px)">
<link rel="stylesheet" type="text/css" href="css/tablet.css" media="screen and (min-width: 600px) and (max-width: 767px)">
<link rel="stylesheet" type="text/css" href="css/style.css" media="screen and (min-width: 768px)">
```
El contenido se ha dividido en: 
 * Header.
 * Col0: contiene los elementos de navegación (Home, About, How to play).
 * Col1: contiene los elementos de play/pause. 
 * Col2: contiene la nave.
 * Col3: contiene los elementos de display con la velocidad, energia y altura.
 * Col4: contiene la "luna" y el footer.

###Diseño escritorio###
Se ha optado por que se divida la pantalla en 3 columnas (col1, col2, col3).

**Header** ocupa el 100% del ancho de pantalla.
**Col0** ocupa el 100% del ancho de pantalla, oculta los elementos de la lista y solo muestra el actual.
**Col1** ocupa el 33.33%, se muestra a la izquierda y un bloque.
**Col2** ocupa el 33.33%, se muestra en el centro y centra la nave.
**Col3** ocupa el 33.33%, se muestra a la derecha y un bloque.
**Col4** ocupa el 100% y se coloca abajo.

###Diseño tablets###
Se ha optado por que se divida la pantalla en 3 columnas (col1, col2, col3) pero redimensiona la pantalla con menor tamaño.

**Header** ocupa el 100% del ancho de pantalla.
**Col0** ocupa el 100% del ancho de pantalla, oculta los elementos de la lista y solo muestra el actual.
**Col1** ocupa el 33.33%, se muestra a la izquierda y un bloque.
**Col2** ocupa el 33.33%, se muestra en el centro y centra la nave.
**Col3** ocupa el 33.33%, se muestra a la derecha y un bloque.
**Col4** ocupa el 100% y se coloca abajo.

###Diseño móvil##
Se ha optado por hacer que todo ocupe el total de ancho de la pantalla exceptuando col2 y col3.

**Header** ocupa el 100% del ancho de pantalla.
**Col0** ocupa el 100% del ancho de pantall, oculta los elementos de la lista y solo muestra el actual.
**Col1** ocupa el 100% y se ha hecho que los elementos se muestren en una barra horizontal.
**Col2** ocupa el 33.33% de pantalla y se coloca a la derecha.
**Col3** ocupa el 66.66% y se coloca a la izquierda.
**Col4** ocupa el 100% y se coloca abajo.

http://es.ccm.net/faq/2533-javascript-modificar-la-altura-height-de-un-elemento-html
