document.getElementById('formPartecipanti').addEventListener('submit', function(event) {

    const numeroPartecipanti = parseInt(document.getElementById('numeroPartecipanti').value);

    alert('Il numero dei partecipanti è' + ' ' + numeroPartecipanti);
    
  });


document.getElementById('formPointsPartecipanti').addEventListener('submit', function(event) {

  const punteggi = parseInt(document.getElementById('punteggi').value);


    alert('Punteggi dei partecipanti:'+ ' ' + punteggi);

});