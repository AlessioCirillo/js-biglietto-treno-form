
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

    //COSTO BIGLIETTO
    var tasso = 0.21;
    var costo = tasso * km;
    var offerta = 'Standard'

    //OFFERTE
    if( eta == 'minorenne'){
        costo -= costo * 0.2;
        offerta = 'Sconto Minorenne'
    } else if ( eta == 'over-65'){
        costo -= costo * 0.4;
        offerta = 'Sconto Over 65'
    } else {
        offetta = 'Standard'
    }

    //COSTO FINALE
    costo = costo.toFixed(2) + '€';
    console.log(costo);

    //CARROZZA
    var carrozza = Math.floor(Math.random () *10) +1;
    console.log(carrozza);

    //CODICE CP
    var codiceCp = Math.floor(Math.random () *(10000 - 9000)) +9000;
    console.log(codiceCp);

    //BIGLIETTO

    //NOME PASSEGGERO
    document.getElementById('nome-passeggero').innerHTML = nome;

    //OFFERTA
    document.getElementById('offerta').innerHTML = offerta;

    //CARROZZA
    document.getElementById('numero-carrozza').innerHTML = carrozza;

    //CODICECP  
    document.getElementById('codice-cp').innerHTML = codiceCp;

    //COSTO
    document.getElementById('costo').innerHTML = costo;

    //VISIBILITA SEZIONE BIGLIETTO
    var biglietto = document.getElementById('biglietto');
    biglietto.className = 'show;'
})

//BOTTONE ANNULLA
bottoneAnnulla.addEventListener('click', function (){

    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';


    document.getElementById('nome-passeggero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('numero-carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';
    document.getElementById('costo').innerHTML = '';

    biglietto.className = 'hidden';
})