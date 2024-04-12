 const container = document.getElementById('cambiaColoreBtn').addEventListener('click',
    function() {
    // Genera un colore casuale in formato RGB
    let coloreRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // I valori vengono quindi interpolati all'interno della stringa di formato RGB usando ${...}.
    
    // Cambia il colore di sfondo della pagina
    document.body.style.backgroundColor = coloreRandom;
  });

  document.getElementById('startGameBtn').addEventListener('click', function() {
    let participants = document.getElementById('participants').value;
    // Implement game logic here
  });

  let numero = 40;

  let riduciNumero = () => {
      // aggiorna variabile numero
      numero = numero - 1
      // aggiorna contenuto HTML
      container.innerHTML = numero;
  
      if (numero===0) {
          clearInterval(intervallo)
          container.innerHTML = "Tempo scaduto!"
          alert('Reimposta il numero giocatori e premi Start')
      }
  }
  
  let intervallo = setInterval(riduciNumero, 100)
  
  
  
  container.style.fontSize= "100px"
