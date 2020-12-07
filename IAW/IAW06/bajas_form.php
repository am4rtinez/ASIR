<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>IIMW - Imperial Intergalactical Mechanical Workshop</title>
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="icon" type="image/png" href="favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Tarea 06 IAW">
        <meta name="keywords" content="IAW, Tema06, formulario, php, mysql">
        <meta name="author" content="Ángel Martínez">
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    </head>
    <body>
        <div id="wrapper">
            <div id="page">
                <?php include("header.php"); ?>
                <?php include("nav.php"); ?>
                <div id="titulo">
                    <h1>Formulario altas vehículos</h1>
                </div>
                <div id="formulario">
                    <form action="procesa_form.php" method="post">
                        <h2>Datos vehículo</h2>
                        <div class="campo">
                            <div class ="field">Matrícula:</div>
                            <div class="data">
                                <input type="text" name="matricula" class="texto" required maxlength="8"><span class="requirido">*</span>
                            </div>
                        </div>

                        <hr><br>
                        <div id="botonera">
                            <input type="submit" name="submit" value="Baja" class="button">
                            <input type="reset" name="reset" value="Reset" class="button">
                            <input hidden name="altas" value="0">
                            <input hidden name="bajas" value="1">
                        </div>
                    </form>
                </div>
                <?php include("footer.php"); ?>
            </div>
        </div>
    </body>
</html>
