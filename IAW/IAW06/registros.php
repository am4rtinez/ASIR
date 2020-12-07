<?php

/* 
 * 
 */
include("libreria.php");

$link = conectarDB();
$consulta = "select * from coches";
$res = mysql_query($consulta,$link);

echo "<div id='titulo'><h1>BD registros vehículos</h1></div><br>";

echo "<div id='content'>";
echo "<table>";
    echo "<thead>";
        echo "<tr>";
            echo "<th>Matrícula</th>";
            echo "<th>Marca</th>";
            echo "<th>Modelo</th>";
            echo "<th>Motor</th>";
            echo "<th>Combustible</th>";
            echo "<th>Kilometraje</th>";
            echo "<th>Color</th>";
            echo "<th>ITV</th>";
            echo "<th>Tareas</th>";
            echo "<th>Fecha Alta</th>";
            echo "<th>Fecha Modificación</th>";
        echo "</tr>";
    echo "</thead>";
    echo "<tbody>";
        if (!$res) {
            echo ('<td colspan="11">NO HAY RESULTADOS</td>');
        } else {
            while ($row = mysql_fetch_array($res)){
                echo "<tr>";
                    echo "<td>".$row[0]."</td>";
                    echo "<td>".$row[1]."</td>";
                    echo "<td>".$row[2]."</td>";
                    echo "<td>".$row[3]."</td>";
                    echo "<td>".$row[4]."</td>";
                    echo "<td>".$row[5]."</td>";
                    echo "<td>".$row[6]."</td>";
                    if ($row[7] == 1){
                        echo "<td>Sí</td>";
                    }else{
                        echo "<td>No</td>";
                    }                    
                    echo "<td>".$row[8]."</td>";
                    echo "<td>".$row[9]."</td>";
                    echo "<td>".$row[10]."</td>";  
                echo "</tr>";
            }
        }
    echo "</tbody>";
echo "</table>";

if ($res) {
    mysql_free_result($res);
}

desconectarBD();

echo "<br>";
echo "<div id='botonera'>";
    echo "<form id='form1'>";
        echo "<button class='button' type='submit' formmethod='post' formaction='altas_form.php'>Alta vehiculos</button>";
        echo "<button class='button' type='submit' formmethod='post' formaction='bajas_form.php'>Baja vehiculos</button>";
    echo "</form>";
echo "</div>";
echo "</div>";
?>