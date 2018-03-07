var formElement=null;
var respuestasTexto=[];
var respuestaSelect=null;
var url="https://rawgit.com/Xavier192/Formulario/master/xml.xml";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  // función personalizada que gestiona la respuesta a la petición de fichero
  gestionarXml(this); 
 }
};
xhttp.open("GET", url, true); //url del fichero
xhttp.send();


window.onload=function(){
	formElement=document.getElementById("myForm");
	formElement.onsubmit=function(){
	comprobar();

  }
}

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarXml(dadesXml){
//Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
  var xmlDoc = dadesXml.responseXML;
  imprimirTitulos(xmlDoc);
  
  
  //preguntasTexto
  for(var answers=2 ; answers<4 ; answers++){
  respuestasTexto[answers]=xmlDoc.getElementsByTagName("answer")[answers].innerHTML;
  }
  
  
  //Selects
  var opcionesSelect=[];
  for(var preguntas=2 ; preguntas<4 ; preguntas++){
  var limite=xmlDoc.getElementsByTagName("question")[preguntas].getElementsByTagName('option').length;
  for(var j=0 ; j<limite ; j++){
	  opcionesSelect[j]=xmlDoc.getElementsByTagName("question")[preguntas].getElementsByTagName("option")[j].innerHTML;
  }
  ponerDatosHtml(opcionesSelect,preguntas);
  }
  
  //Selects multiples
  var opcionesSelectMultiple= [];
  for(var preguntas=4 ; preguntas<6 ; preguntas++){
	  var limite=xmlDoc.getElementsByTagName("question")[preguntas].getElementsByTagName('option').length;
	  for(var j=0 ; j<limite ; j++){
		opcionesSelectMultiple[j]=xmlDoc.getElementsByTagName("question")[preguntas].getElementsByTagName("option")[j].innerHTML; 
	  }
	  ponerDatosHtml(opcionesSelectMultiple,preguntas);
  }
  //checkbox
  var opcionesCheckBox=[];
  for(var check=6 ; check<8 ; check++){
	  var limitecheck=xmlDoc.getElementsByTagName("question")[check].getElementsByTagName('option').length;
	  for(var i=0 ; i<limitecheck ; i++){
		  opcionesCheckBox[i]=xmlDoc.getElementsByTagName("question")[check].getElementsByTagName('option')[i].innerHTML;
	  }
	  ponerDatosCheckBox(opcionesCheckBox,check);
  }
  //radiobutton
  var opcionesRadioButton=[];
  for(var radioButton=8 ; radioButton<10 ; radioButton++){
	var limite=xmlDoc.getElementsByTagName("question")[radioButton].getElementsByTagName("option").length;
	for(var i=0 ; i<limite ; i++){
		opcionesRadioButton[i]=xmlDoc.getElementsByTagName("question")[radioButton].getElementsByTagName("option")[i].innerHTML;
	}
	ponerDatosRadioButton(opcionesRadioButton,radioButton);
  }
}
//Select y select múltiple
function ponerDatosHtml(optSel,preguntas){
	var select=[];
	select[0]=document.getElementsByTagName("select")[0];//select simple
	select[1]=document.getElementsByTagName("select")[1];//select simple
	select[2]=document.getElementsByTagName("select")[2];//select múltiple
	select[3]=document.getElementsByTagName("select")[3];//select multiple
	
	for(var i=0 ; i<optSel.length;i++){
	var option=document.createElement("option");
	option.text=optSel[i];
	option.value=i+1;
	select[preguntas-2].options.add(option);
	}
}
//checkbox
function ponerDatosCheckBox(opt,contador){
	var checkboxContainer=[];
	checkboxContainer[0]=document.getElementsByTagName("div")[0];
	checkboxContainer[1]=document.getElementsByTagName("div")[1];
	var checkAsignado;
	if (contador==6){
     checkAsignado="seis";
    }
    else {
     checkAsignado="siete";
	}
	for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
	
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name=checkAsignado;
    input.id=checkAsignado+i;    
    checkboxContainer[contador-6].appendChild(input);
    checkboxContainer[contador-6].appendChild(label);
    checkboxContainer[contador-6].appendChild(document.createElement("br"));
 }
}

//radioButton
function ponerDatosRadioButton(opt,numPregunta){
	var radioCont = document.getElementsByClassName('radioDiv')[numPregunta-8];
	 var radioAsignado;
    if (numPregunta==8){
     radioAsignado="seis";
    }
    else {
     radioAsignado="siete";
	}
	
    for (var i = 0; i < opt.length; i++) { 
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML=opt[i];
        input.type="radio";
        input.name=radioAsignado;
        input.value=i;    
        radioCont.appendChild(input);
        radioCont.appendChild(label);
        radioCont.appendChild(document.createElement("br"));
} 
}


//títulos
function imprimirTitulos(xmlDoc){
	var limite;
	limite=xmlDoc.getElementsByTagName("questions")[0].getElementsByTagName("question").length;
	for(var i=0 ; i<limite ; i++){
	var titulo=xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue;
	document.getElementsByTagName("span")[i].innerHTML=titulo;
	}
	
}
function comprobar (){
var f=formElement;
var contadorPreguntas=0;
var resta=0;
//comprobar text
for(var numPreg=0 ; numPreg<5 ; numPreg++){
  resta++;
if(f.elements[numPreg].value=="") {

if(numPreg==3){
 alert("Escribe algo en la pregunta "+(numPreg-1));
 f.elements[numPreg-1].focus(); 
}
if(numPreg==1){
  alert("Escribe algo en la pregunta "+(numPreg));
   f.elements[numPreg-1].focus(); 
}
return false;
}
}
//comprobar select
for(var numPreg=5 ; numPreg<8 ; numPreg++){
  if(f.elements[numPreg].selectedIndex==0){
   f.elements[numPreg].focus();
  
  if(numPreg==7){
  alert("Selecciona una opcion en la pregunta "+(numPreg-3));
  }
  if(numPreg==5){
 alert("Selecciona una opcion en la pregunta "+(numPreg-2)); 
  }
   return false; 
  }
}
}
//comprobar select múltiple





