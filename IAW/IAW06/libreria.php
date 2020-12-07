<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$link;

function conectarDB(){

	$host = "localhost";
	$port = "3306";
	$user = "root";
	$pass = "";
	$database = "taller";

    $link = mysql_connect($host, $user, $pass);
    if (!$link) {
	    die ('No se puede conectar con MySQL: ' . mysql_error());
	}
	mysql_set_charset('utf8',$link);

    $bd_seleccionada = mysql_select_db('taller', $link);
	if (!$bd_seleccionada) {
	    die ('No se puede usar taller: ' . mysql_error());
	}
    return $link;
}

function desconectarBD(){
    mysql_close();
}