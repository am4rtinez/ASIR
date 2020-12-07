# Tarea LMSGI-01 #

## Contenido: ##

Se han añadido los ficheros indicados en la tarea (RTF, PS, XML, HTML, CSS):
 * RTF - codiRTF.rtf.
 * PS - codiPS.ps.
 * XML - codiXML.xml.
 * HTML - codiHTML.html.
 * CSS - codiCSS.css.
 
También se ha añadido el fichero **_ENUNCIADO_Tarea.md_** y en el que está contenido el enunciado de moodle de la tarea (formateado con MarkDown).
 
### RTF ###
El fichero _codiRTF.rtf_ contiene el código del ejemplo **RTF** de los apuntes.
```rtf
{\rtf1\ansi\ansicpg1252\deff0\deflang3082{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
\viewkind4\uc1\pard\sa200\sl276\slmult1\lang10\f0\fs22 soy \i cursiva\i0\par}
```
### PS ###
El fichero _codiPS.ps_ contiene el código del ejemplo **PS** de los apuntes.  
Ha sido testeado con la aplicación GSView. Se puede descargar de [aquí](http://www.gsview.com/downloads.html).

```ps
%!PS
/Courier % Elige el tipo de letra
20 selectfont % Establece el tamaño de la letra y
% la toma como el tipo de letra en uso
72 500 moveto % Coloca el cursor en las coordenadas
% 72, 500 (contando los píxeles desde
3
% la esquina izquierda de la página)
(Hola mundo!) show % Escribe el texto entre paréntesis,
showpage % Imprime el resultado
```
### XML ###
El fichero _codiXML.xml_ contiene el código del ejemplo **XML Example 2** del "XML Tutorial" de la web [w3schools](http://www.w3schools.com/xml/).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
<food>
    <name>Belgian Waffles</name>
    <price>$5.95</price>
    <description>
   Two of our famous Belgian Waffles with plenty of real maple syrup
   </description>
    <calories>650</calories>
</food>
<food>
    <name>Strawberry Belgian Waffles</name>
    <price>$7.95</price>
    <description>
    Light Belgian waffles covered with strawberries and whipped cream
    </description>
    <calories>900</calories>
</food>
<food>
    <name>Berry-Berry Belgian Waffles</name>
    <price>$8.95</price>
    <description>
    Belgian waffles covered with assorted fresh berries and whipped cream
    </description>
    <calories>900</calories>
</food>
<food>
    <name>French Toast</name>
    <price>$4.50</price>
    <description>
    Thick slices made from our homemade sourdough bread
    </description>
    <calories>600</calories>
</food>
<food>
    <name>Homestyle Breakfast</name>
    <price>$6.95</price>
   <description>
    Two eggs, bacon or sausage, toast, and our ever-popular hash browns
    </description>
    <calories>950</calories>
</food>
</breakfast_menu>
```

### HTML  ###
El fichero _codiHTML.html_ contiene el código del ejemplo **HTML** de los apuntes.  
En éste se ha modificado el link de CSS para que aparezca el estilo CSS del ejemplo codiCSS.css.
> link rel="stylesheet" **href="codiCSS.css"** type="text/css"

```hmtl
<!DOCTYPE html>
<html>
<head>
<title>Jen's Kitchen</title>
<link rel="stylesheet" href="codiCSS.css" type="text/css" >
</head>
<body>
<h1><img src="foods.gif" alt="food illustration"> Jen&rsquo;s Kitchen</h1>
<p>If you love to read about <strong>cooking and eating</strong>, would like to find out
about
of some of the best restaurants in the world, or just want a few choice recipes to add to
your
collection, <em>this is the site for you!</em></p>
<p><img src="spoon.gif" alt="spoon illustration"> Your pal, Jen at Jen's Kitchen</p>
<hr>
<p><small>Copyright 2011, Jennifer Robbins</small></p>
</body>
</html>
```
### CSS ###
El fichero _codiCSS.css_ contiene el código del ejemplo **CSS** de los apuntes.
```css
body { font: normal 1em Verdana; margin: 1em 10%;}
h1 { font: italic 3em Georgia; color: rgb(23, 109, 109); margin: 1em 0 1em;}
img { margin: 0 20px 0 0; }
h1 img { margin-bottom: 20px; }
small { color: #666666; }
```
