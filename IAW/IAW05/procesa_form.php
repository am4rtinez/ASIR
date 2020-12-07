<?php

    $actividades_array = array (
        0 => "Boxeo",
        1 => "Thai", 
        2 => "Yoga", 
        3 => "Máquinas",
        4 => "TRX",
        5 => "Spinning",
        6 => "Crossfit",
        7 => "Natación"
    );
    $days_array = array(
        0 => 1, 
        1 =>3, 
        2 =>5, 
        3 =>7
    );
    $extras_array = array (
        0 => "SPA",
        1 => "Parking", 
        2 => "Toallas"
    );
    $centros_array = array (
        0 => "Calvià",
        1 => "Inca", 
        2 => "Manacor", 
        3 => "Palma"
    );
    $suscripcion_array = array (
        0 => "Mensual",
        1 => "Trimestral", 
        2 => "Semestral", 
        3 => "Anual"
    );
            
    $name = $_POST['nombre'];
    $apellido1 = $_POST['apellido1'];
    $apellido2 = $_POST['apellido2'];
    $dni = $_POST['dni'];
    $bday = $_POST['bday'];
    $sexo = $_POST['sexo'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];
    $activities = $_POST['activities'];
    $days = $_POST['days'];
    $extras = $_POST['extras'];
    $centros_select = $_POST['centros_select'];
    $suscription = $_POST['suscription'];


    $cuota = 0;
    $suma_actividades = 0;
    $suma_dias = 0;
    $suma_extras = 0;
?>
<html>
    <head>
        <title>IIG - Imperial Intergalactical Gym</title>
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="icon" type="image/png" href="favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Tarea 05 IAW">
        <meta name="keywords" content="IAW, Tema05, formulario">
        <meta name="author" content="Ángel Martínez">
        <meta charset="utf-8">
    </head>
    <body>
        <div id="wrapper">
            <div id="page">
                <?php include("header.php"); ?>
                <div id="titulo">
                    <h1>Datos registrados</h1>
                </div>
                
                <div id="formulario">
                    <div>
                        <br><br>
                        <span>Deberá acudir a nuestras dependencias para validar los datos registrados a continuación.</span><br>
                        <span class="importante">Importante que aporte su documento de acreditación (DNI / NIE / Pasaporte).</span>
                    </div>
                    <?php
                        echo "<h3>Nombre: </h3>".$name;
                        echo "<h3>Apellidos: </h3>".$apellido1." ".$apellido2;
                        echo "<h3>DNI / NIE / Pasaporte: </h3>".$dni;
                        echo "<h3>Fecha Nacimiento: </h3>".$bday;
                        echo "<h3>Sexo: </h3>".$sexo;
                        echo "<h3>Móvil: </h3>".$tel;
                        echo "<h3>E-mail: </h3>".$email;
                        echo "<h3>Observaciones: </h3>".$comment;
                        
                        echo "<h3>Actividades: </h3>";
                        if (isset($activities)){
                            foreach($activities as $checkbox1) {
                                echo $actividades_array[$checkbox1]."<br>";
                                $suma_actividades = $suma_actividades + 20;
                            }
                            echo "<br><div class=\"info\"><span>Total actividades: ".$suma_actividades."€.</span></div>";
                            $cuota = $cuota + $suma_actividades;
                        }else{
                            echo "No se han seleccionado actividades.";
                        }
                        
                        echo "<h3>Días: </h3>".$days_array[$days]."<br>";
                        if ($days == 0){
                            $suma_dias = $suma_dias;
                        }elseif ($suscription == 1) {
                            $suma_dias = $suma_dias + 1;
                        }elseif ($suscription == 2) {
                            $suma_dias = $suma_dias + 3;
                        }elseif ($suscription == 3) {
                            $suma_dias = $suma_dias + 5;
                        }
                        echo "<br><div class=\"info\"><span>Total días: ".$suma_dias."€.</span></div>";
                        $cuota = $cuota + $suma_dias;
                        
                        echo "<h3>Extras: </h3>";
                        if (isset($extras)){   
                            foreach($extras as $checkbox2) {
                                echo $extras_array[$checkbox2]."<br>";
                                $suma_extras = $suma_extras + 2;
                            }
                            echo "<br><div class=\"info\"><span>Total extras: ".$suma_extras."€.</span></div>";
                            $cuota = $cuota + $suma_extras;
                        } else {
                            echo "No se han seleccionado extras.";
                        }
                        echo "<h3>Centro: </h3>".$centros_array[$centros_select];
                        echo "<h3>Suscripción: </h3>".$suscripcion_array[$suscription];
                    ?>
                </div>
                <div id="cuota">
                    <?php
                        $descuento;
                        if ($suscription == 0){
                            $cuota = $cuota;
                            $descuento = "0%";
                        }elseif ($suscription == 1) {
                            $cuota = ($cuota * 3) - ($cuota * 0.01);
                            $descuento = "1% (0.01)";
                        }elseif ($suscription == 2) {
                            $cuota = ($cuota * 6) - ($cuota * 0.04);
                            $descuento = "4% (0.04)";
                        }elseif ($suscription == 3) {
                            $cuota = ($cuota * 12) - ($cuota * 0.1);
                            $descuento = "10% (0.1)";
                        }
                        echo "<h2>".$cuota."€ / ".$suscripcion_array[$suscription]."</h2>";
                        echo "<div class=\"info\"><span> Aplicado un ".$descuento." de descuento.</span></div>"
                    ?>
                </div>
                <?php include("footer.php"); ?>
            </div>
        </div>
    </body>
</html>
