const container = document.getElementById('setTimer').addEventListener('click',
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
})

let intervallo = setInterval(riduciNumero, 1000)



container.style.fontSize= "100px"