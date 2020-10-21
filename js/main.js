/*Come visto insieme durante la lezione in classe creiamo un finto biglietto del treno con:
Nome passeggero
Fascia eta selezionata dall'utente
Codice treno CP (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato*/

var bottoneGenera = document.getElementById('agreebutton');
var bottoneAnnulla = document.getElementById('cancelbutton');

//BOTTONE ACCETTA
bottoneGenera.addEventListener('click', function (){

    //NOME
    var nome = document.getElementById('name').value;
    console.log('nome',nome);
    
    //DISTANZA
    var km = document.getElementById('km').value;
    console.log('distanza', km);

    //FASCIA ETA
    var eta = document.getElementById('eta').value;
    console.log('anni', eta);
})

bottoneAnnulla.addEventListener('click', function (){
    
})