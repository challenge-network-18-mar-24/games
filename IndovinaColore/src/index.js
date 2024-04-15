 const container = document.getElementById('cambiaColoreBtn').addEventListener('click', function() {
    // Genera un colore casuale in formato RGB
    let coloreRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // I valori vengono quindi interpolati all'interno della stringa di formato RGB usando ${...}.
    
    // Cambia il colore di sfondo della pagina
    document.body.style.backgroundColor = coloreRandom;
  });

 
