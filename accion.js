var boton_accion = document.getElementById("btn_ejecutar");
boton_accion.addEventListener("click", ejecutar );

function ejecutar(){
  alert("Seleccione un archivo para verificar los key de MAPBOX");
}

function ejecutarSerial(serial)
{
  var request = new XMLHttpRequest();
  var str1 = "http://api.tiles.mapbox.com/v4/mapbox.streets-basic/17/41775/72601.png?access_token=";
  var res = str1.concat(serial);
  request.open('GET', res, true);
  request.onload = function () {
    console.log("codigo respuesta : "+ request.status);
    if (request.status==200) {
      InsertIntoTable(serial , "ok");
    }else{
      InsertIntoTable(serial , "Error");
    }
  }
  request.send();
}

function InsertIntoTable(key , estado)
{
  var TableRow="<tr><td>"+key+"</td><td>"+estado+"</td></tr>";
  var TrElement = document.createElement("tr");
	TrElement.innerHTML = TableRow;
	document.getElementById("TableBody").appendChild(TrElement);
}
