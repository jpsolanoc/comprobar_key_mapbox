document.getElementById('files').addEventListener('change', handleFileSelect, false);

  function handleFileSelect(evt) {
    var files = evt.target.files;
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    leerArchivo(files[0]);
  }

  function leerArchivo(archivo){
    if (!archivo) {
     return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
      var lineas = contenido.split('\n');
      for(var linea of lineas) {
        ejecutarSerial(linea);
      }
    };
    lector.readAsText(archivo);
  }

  function mostrarContenido(contenido) {
    console.log(contenido);
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = contenido;
  }
