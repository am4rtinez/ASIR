<?php

include ('libreria.php');
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$altas = $_POST['altas'];
$bajas = $_POST['bajas'];

$matricula = $_POST['matricula'];
?>

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
                <div id="contenido">
                <?php
                if ($altas == 1){
                    echo "<div id='titulo'>";
                        echo "<h1>Procesamiento alta vehículo</h1>";
                    echo "</div>";
                                     
                    $marca = $_POST['marca'];
                    $modelo = $_POST['modelo'];
                    $motor = $_POST['motor'];
                    $combustible = $_POST['combustible_select'];
                    $kilometraje = $_POST['kilometraje'];
                    $color = $_POST['color'];
                    $itv = $_POST['itv'];
                    $tareas = $_POST['tareas'];

                    $link = conectarDB();

                    $consulta = "INSERT INTO coches (matricula, marca, modelo, motor, combustible, kilometraje, color, itv, tareas, fecha_alta, fecha_modificacion)"
                            . "VALUES ('".$matricula."', '".$marca."', '".$modelo."', '".$motor."', '".$combustible."', '".$kilometraje."', '".$color."', '".$itv."', '".$tareas."', now(), now())";

                    $res = mysql_query($consulta,$link) OR die(mysql_error($link));
                    if ($res) {
                        echo "<div id=\"formulario\">";
                            echo "<h2>Datos procesados</h2>";

                            echo "<div class=\"campo\">";
                                echo "<b>Matricula: </b>".$matricula;
                            echo "</div>";
                            echo "<div class=\"campo\">";
                                echo "<b>Marca: </b>".$marca;
                            echo "</div>";
                            echo "<div class=\"campo\">";
                                echo "<b>Modelo: </b>".$modelo;
                            echo "</div>";
                            echo "<div class=\"campo\">";
                                echo "<b>Combustible: </b>".$combustible;
                            echo "</div>";
                            echo "<div class=\"campo\">";
                                echo "<b>Kilometraje: </b>".$kilometraje;
                            echo "</div>";
                            echo "<div class=\"campo\">";
                                echo "<b>Color: </b>".$color;
                            echo "</div>";
                            echo "<div class=\"campo\">";
                                if($itv == 1){
                                    echo "<b>ITV: </b>Sí";
                                }else{
                                    echo "<b>ITV: </b>No";
                                }
                            echo "</div>";
                            echo "<div class=\"campo\">";
                                echo "<b>Tareas: </b>".$tareas;
                            echo "</div>";                     
                            echo "<br>";
                            echo "<div id='botonera'>";
                                echo "<form id='form1'>";
                                    echo "<button class='button' type='submit' formaction='index.php'>Volver</button>";
                                echo "</form>";
                            echo "</div>";
                        echo "</div>";
                    } else {
                        echo "Error: " . $consulta . "<br>" . mysql_error($conn);
                    }
                    desconectarBD();
                    

                }elseif ($bajas == 1) {
                    echo "<div id='titulo'>";
                        echo "<h1>Procesamiento baja vehículo</h1>";
                    echo "</div>";
                    
                    $link = conectarDB();
                    
                    $consulta = "SELECT matricula FROM coches WHERE matricula = '".$matricula."'";
                    $res = mysql_query($consulta,$link) OR die(mysql_error($link));
                    
                    if (mysql_num_rows($res)>0){
                        $consulta = "DELETE FROM coches WHERE matricula = '".$matricula."'";
                        $res1 = mysql_query($consulta,$link) OR die(mysql_error($link));
                        if ($res1) {
                            echo "<div class=\"procesado\">";
                            echo "Vehículo con matrícula: <b>$matricula</b> ha sido eliminado.";
                            echo "</div>";

                            echo "<div id='botonera'>";
                            echo "<form id='form1'>";
                            echo "<button class='button' type='submit' formaction='index.php'>Volver</button>";
                            echo "</form>";
                            echo "</div>";
                        } else {
                            echo "Error: " . $consulta . "<br>" . mysql_error($conn);
                        }                        
                    }else{
                        echo "<div class=\"procesado\">";
                        echo "<span style = 'color:red'>Vehículo con matrícula: <b>$matricula</b> no existe en BD.</span>";
                        echo "</div>";                        
                    }
                    
                    desconectarBD();
                }              
                ?>
                <?php include('footer.php'); ?>
            </div>
            </div>
        </div>
    </body>
</html>
