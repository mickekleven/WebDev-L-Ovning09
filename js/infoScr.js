const info01 = [
    "Förklaring - Bish-Bosh", 
    "Sidan är skapad i syfte att räkna ut ifall inskickade parametrar bish, bosh, är jämt delbart med iterationvärden som default är definerat till 100 men kan ändras efter behov.",
    "Om talen är jämt delbara med inskickade parametrar där resultatet blir 1 behövs ej någon ytterligare beräkning och kommer att klassas som antingen bish, bosh eller Bish-Bosh om bägge kriterierna kan delas jämt",
    "resulatet får ej vara mindre än eller större än 1 relaterat bish, bosh och/eller Bish-Bosh. I detta fall visas iterationsnr från loopen. ",
    "Exempel",
    "1. Bish = 3 | Ex01. (15/3) % 2 = 1 (Ok) | Ex02. (14 % 3) % 2 = 1.666666 (Nok) "
]

let _infoid = document.querySelector('#infoid'); 
_infoid.addEventListener('click', function() {
    showDetails();
}); 


function showDetails() {

    clearBox(); 

    for (let i = 0; i< info01.length; i++) {

        presentationdiv.style.fontSize = '16px'; 
        presentationdiv.innerHTML += '<p>' + info01[i] + '</p>';
    }

}
