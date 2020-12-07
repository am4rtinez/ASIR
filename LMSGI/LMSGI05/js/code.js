var formElement=null;

var divResultados;

var nota = 0;  //nota de la prueba sobre 10 puntos (hay 10 preguntas)

var answerq01 = null;
var answerq02 = null;
var answerq03 = null;
var answerq04 = null;
var answerq05 = [];
var answerq06 = [];
var answerq07 = null;
var answerq08 = null;
var answerq09 = [];
var answerq10 = [];

//Contiene el texto de las respuestas .
var answerq01r = null;
var answerq02r = null;
var answerq03r = null;
var answerq04r = null;
var answerq05r = [];
var answerq06r = [];
var answerq07r = null;
var answerq08r = null;
var answerq09r = [];
var answerq10r = [];

var xmlDoc = null; //global, para modificarlo y serializarlo (y sacarlo por pantalla).
var xslDoc = null;

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

	divResultados = document.getElementById("resultadosDiv");

    //Temporizador.
    /*
     * http://www.forosdelweb.com/f13/temporizador-30-minutos-para-enviar-datos-formulario-1105378/#post4623405
     */
    var salida = document.getElementById("tiempo"),
    minutos = 2,
    segundos = 30,
    intervalo = setInterval(function(){
        if (--segundos < 0){
            segundos = 59;
            minutos--;
        }
      
        salida.innerHTML = minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);

        if (!minutos && !segundos){
            clearInterval(intervalo);
            correction();
            presentarNota();
            enableReloadButton();
        }
            
    }, 1000);

	//divResultados.style.display = "none";

	// buttonReload.onclick = function(){
	//    	window.location.reload(true);
 	// }

	//Procede a la realización de la corrección.
    formElement = document.getElementById("myForm");
    formElement.onsubmit = function () {
        clearInterval(intervalo); //detiene el contador.
    	//Muestra una ventana emergente pidiendo la confirmación de la correción.
        if (confirm("¿Desea proceder a la corrección del examen?")) {
        	if (comprobar()){
        		inicializar();
	            correction();
		 		presentarNota();
		 		enableReloadButton();
        	}
        }
        return false;
    }
 
 	//LEER XML de xml/questions.xml

    //LEER XML de xml/questions.xml
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            gestionarXml(xmlDoc);
        }
    };
    //xhttp.open("GET", "https://rawgit.com/am4rtinez/LMSGI05/master/xml/questions.xml", true); //desarrollo.
    xhttp.open("GET", "xml/questions.xml", true);
    xhttp.send();

    //LEER XSL de xml/questions.xml
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xslDoc=this.responseXML;
        }
    };
    //xhttp2.open("GET", "https://rawgit.com/am4rtinez/LMSGI05/master/xml/questions.xsl", true); //desarrollo
    xhttp2.open("GET", "xml/questions.xsl", true);
    xhttp2.send();
};

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/questions.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dataXml){
	//xmlDoc = dataXml.responseXML; //Parse XML to xmlDoc

	//---------- Tipo TEXTO -----------
	//---------- AMRQ_001 -----------

	generarTipoTexto(0,"quest01");
	answerq01 = getAnswerText("AMRQ_001");
	answerq01r = answerq01;
    
    //---------- AMRQ_002 -----------
    generarTipoTexto(1,"quest02");
	answerq02 = getAnswerText("AMRQ_002");
	answerq02r = answerq02;

    //---------- Tipo RADIO -----------
    //---------- AMRQ_003 -----------
    generarTipoRadio(2, "quest03", "AMRQ_003", "radioDiv1");
    answerq03 = getAnswerRadio("AMRQ_003");
    answerq03r = getAnswerDataRadio("AMRQ_003", answerq03-1);
    
    //---------- AMRQ_004 -----------
    generarTipoRadio(3, "quest04", "AMRQ_004", "radioDiv2");
    answerq04 = getAnswerRadio("AMRQ_004");
    answerq04r = getAnswerDataRadio("AMRQ_004", answerq04-1);

    //---------- Tipo MULTIPLE -----------
    //---------- AMRQ_005 -----------
    generarTipoMultiple (4, "quest05", "AMRQ_005", 0);
    answerq05 = getAnswerMultiple("AMRQ_005");
    answerq05r = getAnswerDataMultiple("AMRQ_005", answerq05);
    
    // //---------- AMRQ_006 -----------
	generarTipoMultiple (5, "quest06", "AMRQ_006", 1);
	answerq06 = getAnswerMultiple("AMRQ_006");
	answerq06r = getAnswerDataMultiple("AMRQ_006", answerq06);

    //---------- Tipo SELECT -----------
    //---------- AMRQ_007 -----------
    generarTipoSelect (6, "quest07", "AMRQ_007", 2);
    answerq07 = getAnswerSelect("AMRQ_007");
    answerq07r = getAnswerDataSelect("AMRQ_007", answerq07-1);

    //---------- AMRQ_008 -----------
    generarTipoSelect (7, "quest08", "AMRQ_008", 3);
    answerq08 = getAnswerSelect("AMRQ_008");
    answerq08r = getAnswerDataSelect("AMRQ_008", answerq08-1);

    //---------- Tipo CHECKBOX -----------
    //---------- AMRQ_009 -----------
    generarTipoCheckbox (8, "quest09", "AMRQ_009", "checkboxDiv1");
    answerq09 = getAnswerCheckbox("AMRQ_009");
    answerq09r = getAnswerDataCheckbox("AMRQ_009", answerq09);
	//---------- AMRQ_010 -----------
	generarTipoCheckbox (9, "quest10", "AMRQ_010", "checkboxDiv2");
	answerq10 = getAnswerCheckbox("AMRQ_010");
	answerq10r = getAnswerDataCheckbox("AMRQ_010", answerq10);

	//---------------------------------------------------------------------------------------------------------
	// Métodos que generan los tipos de datos. 
	//---------------------------------------------------------------------------------------------------------

	//Obtiene el título y lo carga.
	function generarTipoTexto (idTag,idHtml){
    	var tituloText = xmlDoc.getElementsByTagName("title")[idTag].innerHTML;
    	ponerDatosText(tituloText, idHtml);
    } 

    //Obtiene el título y las opciones para cargarlo.
    function generarTipoRadio(idTag,idHtml, idXml, divId){
    	var tituloRadio = xmlDoc.getElementsByTagName("title")[idTag].innerHTML;
	    var opcionesRadio = [];
	    var nopt = xmlDoc.getElementById(idXml).getElementsByTagName('option').length;
	    for (i = 0; i < nopt; i++) {
	        opcionesRadio[i] = xmlDoc.getElementById(idXml).getElementsByTagName('option')[i].innerHTML;
	    }
	    ponerDatosRadio(tituloRadio, idHtml, opcionesRadio, divId);
    }

    /*
     * Se usa la función de generarTipoSelect ya que usa el mismo código que está comentado 
     * dentro de la función.
     */
    function generarTipoMultiple (idTag, idHtml, idXml, numSelect){
    	//var tituloSelect = xmlDoc.getElementsByTagName("title")[idTag].innerHTML;
        //var xpath = "/questions/question[@id=\'"+idXml+"\']/option";
        //var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
	    //ponerDatosMultiple(tituloMultiple, idHtml, nodesSelect, numSelect);
        generarTipoSelect (idTag, idHtml, idXml, numSelect);    
    }

    function generarTipoSelect (idTag, idHtml, idXml, numSelect){
    	var tituloSelect = xmlDoc.getElementsByTagName("title")[idTag].innerHTML;
        var xpath = "/questions/question[@id=\'"+idXml+"\']/option";
        var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
        ponerDatosSelect(tituloSelect, idHtml, nodesSelect, numSelect);
    }

    function generarTipoCheckbox (idTag, idHtml, idXml, divId){
    	var tituloCheckbox = xmlDoc.getElementsByTagName("title")[idTag].innerHTML;
        var xpath = "/questions/question[@id=\'"+idXml+"\']/option";
        var nodesCB = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
		ponerDatosCheckbox(tituloCheckbox, idHtml, nodesCB, divId);
    }
    
    //---------------------------------------------------------------------------------------------------------
	// Métodos que realizan el get de las respuestas validas 
	//---------------------------------------------------------------------------------------------------------

    //Hace el get de la respuesta tipo texto.
    function getAnswerText(idXml){
    	return xmlDoc.getElementById(idXml).getElementsByTagName('answer')[0].innerHTML;
    }

    //Hace el get de la respuesta tipo radio.
    function getAnswerRadio(idXml){
    	return parseInt(xmlDoc.getElementById(idXml).getElementsByTagName('answer')[0].innerHTML);
    }

    function getAnswerMultiple (idXml){
    	var nres = xmlDoc.getElementById(idXml).getElementsByTagName('answer').length;
    	var answer = [];
	    for (i = 0; i < nres; i++) {
	       answer[i] = xmlDoc.getElementById(idXml).getElementsByTagName('answer')[i].innerHTML;
	    }
	    return answer;
    }

    function getAnswerSelect (idXml){
    	return xmlDoc.getElementById(idXml).getElementsByTagName('answer')[0].innerHTML;
    }

    function getAnswerCheckbox (idXml){
    	var nres = xmlDoc.getElementById(idXml).getElementsByTagName('answer').length;
    	var answer = [];
	    for (i = 0; i < nres; i++) {
	       answer[i] = xmlDoc.getElementById(idXml).getElementsByTagName('answer')[i].innerHTML;
	    }
	    return answer;
    }

    //---------------------------------------------------------------------------------------------------------
	// Métodos que realizan el texto de los resultados correctos.
	//---------------------------------------------------------------------------------------------------------

    //Hace el get de la respuesta tipo radio.
    function getAnswerDataRadio(idXml, id){
    	return xmlDoc.getElementById(idXml).getElementsByTagName('option')[id].innerHTML;
    }

    function getAnswerDataMultiple (idXml, id){
    	var answer = [];
	    for (i = 0; i < id.length; i++) {
		    answer[i] = xmlDoc.getElementById(idXml).getElementsByTagName('option')[id[i]-1].innerHTML;
	    }
	    return answer;
    }

    function getAnswerDataSelect (idXml, id){
    	return xmlDoc.getElementById(idXml).getElementsByTagName('option')[id].innerHTML;
    }

    function getAnswerDataCheckbox (idXml, id){
    	var answer = [];
	    for (i = 0; i < id.length; i++) {
		    answer[i] = xmlDoc.getElementById(idXml).getElementsByTagName('option')[id[i]-1].innerHTML;
	    }
	    return answer;
    }

}

//-----------------------------------------------
// Métodos que proceden a la inserción de datos.
//-----------------------------------------------

//TEXT
function ponerDatosText(titulo, id) {
    document.getElementById(id).innerHTML = titulo;
}

//RADIO
function ponerDatosRadio(titulo, id, options, divId) {
    document.getElementById(id).innerHTML = titulo;
    var radioContainer = document.getElementById(divId);

    for (i = 0; i < options.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = options[i];
        label.setAttribute("for", divId + "_" + i);
        input.type = "radio";
        input.id = divId + "_" + i;
        input.className = "radio_opt";
        input.name = divId;
        input.value = i;
        radioContainer.appendChild(input);
        radioContainer.appendChild(label);
        radioContainer.appendChild(document.createElement("br"));
    }
}

/*
 * Esta función es la misma que la de ponerDatosSelect. Se deja comentada ya que no se hace uso de ella.
 *
function ponerDatosMultiple(titulo, id, options, numSelect) {
    document.getElementById(id).innerHTML = titulo;

    var select = document.getElementsByTagName("select")[numSelect];
    var result = options.iterateNext();

    i=0;
    while (result) {
        var option = document.createElement("option");
        option.text = result.innerHTML;
        option.value=i; i++;
        select.options.add(option);
        result = options.iterateNext();
    }
}
*/

//SELECT
function ponerDatosSelect(titulo, id, options, numSelect) {
    document.getElementById(id).innerHTML = titulo;

    var select = document.getElementsByTagName("select")[numSelect];
    var result = options.iterateNext();

    i=0;
    while (result) {
        var option = document.createElement("option");
        option.text = result.innerHTML;
        option.value=i; i++;
        select.options.add(option);
        result = options.iterateNext();
    }
}

function ponerDatosCheckbox(titulo, id, options, divId){
 	var checkboxContainer=document.getElementById(divId);
 	document.getElementById(id).innerHTML = titulo;

    var result = options.iterateNext();

    i=0;
    while (result) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML=result.innerHTML;
        label.setAttribute("for", "opt_check_"+ divId + "_" + i);
        input.type="checkbox";
        input.name=divId;
        input.id="opt_check_" + i;
        input.value=i;
        i++;
        checkboxContainer.appendChild(input);
        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(document.createElement("br"));
        result = options.iterateNext();
    }
}

//---------------------------------------------------------
// Métodos de corrección.
//---------------------------------------------------------

// Método de inicialización.
function inicializar(){
	divResultados.style.display = "block";
	document.getElementById('resultadosDiv').innerHTML = "";
	nota=0.0;
}

// Método que comprueba que el formulario ha sido rellenado.
function comprobar(){
	var f=formElement;
	var checked=false;

	//Comprobacion de los tipo texto
	if (document.getElementById("answ_text_01").value.length == 0) {
        alert("¡Responde la pregunta 1!");
        document.getElementById("answ_text_01").focus();
        return false;
    }

    if (document.getElementById("answ_text_02").value.length == 0) {
        alert("¡Responde la pregunta 2!");
        document.getElementById("answ_text_02").focus();
        return false;
    }

    //Comprobación tipo radio.  
    for (var i = 0; i < f.radioDiv1.length; i++) {
	    if( f.radioDiv1[i].checked) checked = true;
	}

	if (!checked) {
        alert("¡Responde la 3 pregunta!");
        document.getElementById("radioDiv1").focus();
        return false;
    }

    checked = false;
    for (var i = 0; i < f.radioDiv2.length; i++) {
	    if( f.radioDiv2[i].checked) checked = true;
	}

	if (!checked) {
        alert("¡Responde la 4 pregunta!");
        document.getElementById("radioDiv2").focus();
        return false;
    }

    //Comprobación tipo multiple.
    console.log(document.getElementById("multiple1").selectedIndex);
    if (document.getElementById("multiple1").selectedIndex == -1) {
        alert("¡Responde la 5 pregunta!");
        document.getElementById("multiple1").focus();
        return false;
    }
    if (document.getElementById("multiple2").selectedIndex == -1) {
        alert("¡Responde la 6 pregunta!");
        document.getElementById("multiple2").focus();
        return false;
    }

    //Comprobación tipo select.
        if (document.getElementById("select1").selectedIndex == 0) {
        alert("Responde la 7 pregunta!");
        document.getElementById("select1").focus();
        return false;
    }


    if (document.getElementById("select2").selectedIndex == 0) {
        alert("Responde la 8 pregunta!");
        document.getElementById("select2").focus();
        return false;
    }

    //Comprobación tipo checkbox.
    checked = false;
    for (var i = 0; i < f.checkboxDiv1.length; i++) {
	    if( f.checkboxDiv1[i].checked) checked = true;
	}

	if (!checked) {
        alert("¡Responde la 9 pregunta!");
        document.getElementById("checkboxDiv1").focus();
        return false;
    }

    checked = false;
    for (var i = 0; i < f.checkboxDiv2.length; i++) {
	    if( f.checkboxDiv2[i].checked) checked = true;
	}

	if (!checked) {
        alert("¡Responde la 10 pregunta!");
        document.getElementById("checkboxDiv2").focus();
        return false;
    }

    return true;
}

// Método que lanza la corrección de los diferentes tipos de inputs.
function correction (){
	addTitulo("Corrección Examen");
	corregirTexto("answ_text_01", answerq01r, "quest01", "AMRQ_001");
	corregirTexto("answ_text_02", answerq02r, "quest02", "AMRQ_002");
	corregirRadio("radioDiv1", answerq03, answerq03r, "quest03", "AMRQ_003");
    corregirRadio("radioDiv2", answerq04, answerq04r, "quest04", "AMRQ_004");
    corregirMultiple("multiple1", answerq05, answerq05r, "quest05", "AMRQ_005");
    corregirMultiple("multiple2", answerq06, answerq06r, "quest06", "AMRQ_006");
    corregirSelect("select1", answerq07, answerq07r, "quest07", "AMRQ_007");
    corregirSelect("select2", answerq08, answerq08r, "quest08", "AMRQ_008");
    corregirCheckbox("checkboxDiv1", answerq09, answerq09r, "quest09", "AMRQ_009"); 
    corregirCheckbox("checkboxDiv2", answerq10, answerq10r, "quest10", "AMRQ_010");
}

// Método encargado de corregir las preguntas de tipo texto.
function corregirTexto(elementId, answer, question, idXml){
	var texto = document.getElementById(elementId).value;
	var puntuacion = 0;
    var useranswer = xmlDoc.createElement("useranswer");
    useranswer.innerHTML = texto;
    var correcto = xmlDoc.createElement("correcto");
	if (texto == answer) {
		puntuacion = 1;
		nota += puntuacion;
        correcto.innerHTML = 1;
	} else {
		puntuacion = 0;
        correcto.innerHTML = 0;
	}
    useranswer.appendChild(correcto);
    xmlDoc.getElementById(idXml).appendChild(useranswer);
}

function corregirRadio(elementName, answer, answer1, question, idXml){
	var rad = document.getElementsByName(elementName);
	var valida = false;
	var puntuacion = 0;
	for (var i = 0, length = rad.length; i < length; i++) {
	    if (rad[i].checked) {
            var useranswer = xmlDoc.createElement("useranswer");
            useranswer.innerHTML = "O" + (i+1);
            var correcto = xmlDoc.createElement("correcto");

	        if (rad[i].value == answer-1){
				valida = true;
				puntuacion = 1;
				nota += puntuacion;
                correcto.innerHTML = 1;
		 	} else {
		 		puntuacion = 0;
		 		valida = false;
                correcto.innerHTML = 0;
			}
            useranswer.appendChild(correcto);
            xmlDoc.getElementById(idXml).appendChild(useranswer);
	        break;
	    }
	}
}

function corregirMultiple(elementId, answer, answer1, question, idXml){
	var f = formElement;
    var escorrecta = [];
    var mult = document.getElementById(elementId);
   	var puntuacion = 0;
    for (var i = 0; i < mult.options.length; i++) {
	    if(mult.options[i].selected){
            var useranswer = xmlDoc.createElement("useranswer");
            var valida = false;   
            useranswer.innerHTML = "O" + (i+1);
            
	    	for (var j = 0; j<answer.length; j++){
	    		if (mult.options[i].value == answer[j]-1){
	    			escorrecta.push(mult.options[i].value);
                    valida = true;
	    		}
	    	}
            var correcto = xmlDoc.createElement("correcto");
            if (valida){
                correcto.innerHTML = 1;
            }else{
                correcto.innerHTML = 0;
            }
            useranswer.appendChild(correcto);
            xmlDoc.getElementById(idXml).appendChild(useranswer);
	    }
	}
	if (escorrecta.length > 0) {
		puntuacion = escorrecta.length / answer.length;
		nota += puntuacion;
	} else {
		puntuacion = 0;
		nota += puntuacion;
	}
}

function corregirSelect(elementId, answer, answer1, question, idXml){
	var sel = document.getElementById(elementId);
	var puntuacion = 0;
    var valida = false;
	if (sel.selectedIndex == answer) {
		puntuacion = 1;
		nota += puntuacion;
        valida = true;
	} else {
        valida = false;
		puntuacion = 0;
	}

    var useranswer = xmlDoc.createElement("useranswer");   
    var correcto = xmlDoc.createElement("correcto");
    if (valida){
        correcto.innerHTML = 1;
    }else{
        correcto.innerHTML = 0;
    }
    useranswer.innerHTML = "O" + sel.selectedIndex;
    useranswer.appendChild(correcto);
    xmlDoc.getElementById(idXml).appendChild(useranswer);
}

function corregirCheckbox(elementName, answer, answer1, question, idXml){
	var f = formElement;
    var escorrecta = [];
    var check = document.getElementsByName(elementName);
    var respuestas = answer.length;
    var puntuacion = 0;
    for (var i = 0; i < check.length; i++) {
	    if(check[i].checked){
            var useranswer = xmlDoc.createElement("useranswer");
            var valida = false;   
            useranswer.innerHTML = "O" + (i+1);
            
    		for (var j = 0; j<answer.length; j++){
		 		if (check[i].value == answer[j]-1){
	 				escorrecta.push(check[i].value);
                    valida = true;
	 			}
	 		}
            var correcto = xmlDoc.createElement("correcto");
            if (valida){
                correcto.innerHTML = 1;
            }else{
                correcto.innerHTML = 0;
            }
            useranswer.appendChild(correcto);
            xmlDoc.getElementById(idXml).appendChild(useranswer);
	    }
	}

	if (escorrecta.length > 0) {
		puntuacion = escorrecta.length / answer.length;
		nota += puntuacion;
	} else {
		puntuacion = 0;
		nota += puntuacion;
	}
}

function presentarNota(){
	var div = document.createElement("div");
	var h2 = document.createElement("h2");

	document.getElementById('resultadosDiv').style.display = "block";
	if (document.implementation && document.implementation.createDocument) {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xslDoc);
        var resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);
        document.getElementById('resultadosDiv').appendChild(resultDocument);
    }

 	h2.innerHTML="NOTA: " + nota.toFixed(2);
	div.id = "nota";
	if (nota >= 5){
	   div.className = "aprobado";
	}else{
		div.className = "suspenso";
	}
	div.appendChild(h2);
	document.getElementById('resultadosDiv').appendChild(div);

	var f=formElement;
	var e = f.elements;
	for (var i = 0, len = e.length; i < len; ++i) {
		e[i].disabled = true;
	}
}

function addTitulo(str){
	var div = document.createElement("div");
	var h1 = document.createElement("h1");
 	var node = document.createTextNode(str);

	div.id = "titulo_correccion";
	div.appendChild(h1);
	h1.appendChild(node); 
	document.getElementById('resultadosDiv').appendChild(div);
}

function enableReloadButton(){
	var div = document.createElement("div");
	var buttonReload = document.createElement("button");

	var buttonReload= document.createElement('input');
	buttonReload.setAttribute('type','button');
	buttonReload.setAttribute('name','reload');
	buttonReload.setAttribute('value','Reload');
	buttonReload.setAttribute('class','button');
	buttonReload.onclick = function(){
		window.location.reload(true);
	};
	div.id = "reload";
	div.appendChild(buttonReload);
	document.getElementById('resultadosDiv').appendChild(div);
}
