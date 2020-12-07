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
                        
                        <div class="campo">
                            <div class ="field">Marca:</div>
                            <div class="data">
                                <input type="text" name="marca" class="texto" required maxlength="100"><span class="requirido">*</span>
                            </div>
                        </div>

                        <div class="campo">
                            <div class ="field">Modelo:</div>
                            <div class="data">
                                <input type="text" name="modelo" class="texto" required maxlength="100"><span class="requirido">*</span>
                            </div>
                        </div>

                        <div class="campo">
                            <div class ="field">Motor:</div>
                            <div class="data">
                                <input type="text" name="motor" class="texto" required maxlength="100"><span class="requirido">*</span>
                            </div>
                        </div>

                        <div class="campo">
                            <div class ="field">Combustible:</div>
                            <div class="data">
                                <select name="combustible_select" class="select" required>
                                    <option selected value="gasolina">Gasolina</option>
                                    <option value="diesel">Diesel</option>
                                </select><span class="requirido">*</span>
                            </div>
                        </div>

                        <div class="campo">
                            <div class ="field">Kilometraje:</div>
                            <div class="data">
                                <input type="number" name="kilometraje" class="texto" required max="999999"><span class="requirido">*</span>
                            </div>
                        </div>

                        <div class="campo">
                            <div class ="field">Color:</div>
                            <div class="data">
                                <input type="text" name="color" class="texto" required maxlength="50"><span class="requirido">*</span>
                            </div>
                        </div>

                        <div class="campo">
                            <div class ="field">ITV:<span class="requirido">*</span>
                                <input type="radio" name="itv" value="0" required><label for="itv">No</label>
                                <input type="radio" name="itv" value="1"><label for="itv">Sí</label>
                            </div>
                        </div>          

                        <div class="campo">
                            <div class="field">Tareas a realizar:<span class="requirido">*</span></div>
                            <textarea rows="10" cols="40" name="tareas" maxlength="500">
                            </textarea>
                        </div>

                        <hr><br>
                        <div id="botonera">
                            <input type="submit" name="submit" value="Alta" class="button">
                            <input type="reset" name="reset" value="Reset" class="button">
                            <input hidden name="altas" value="1">
                            <input hidden name="bajas" value="0">
                        </div>
                    </form>
                </div>
                <?php include("footer.php"); ?>
            </div>
        </div>
    </body>
</html>
