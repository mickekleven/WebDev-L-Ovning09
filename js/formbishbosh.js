
let form = document.querySelector('#formid');
let formbtn = document.querySelector('#formbtn');

//let progressBar = ducument.querySelector('#progressbarid'); 

let presentationdiv = document.querySelector('#presentationid');

formbtn.addEventListener('click', (e) => onSubmitAsync(), false);

let usrMsg = document.querySelector('#usrmsgid');


function submitForm() {

    let counter = 0;

    let loopnr = form.querySelector('#loopnrid');
    let bishnr = form.querySelector('#bishid');
    let boshnr = form.querySelector('#boshid');

    if (!checkArgs(loopnr.value) || !checkArgs(bishnr.value) || !checkArgs(boshnr.value)) {
        alert("Det är ej tillåtet att skicka formuläret med tomma fält");
        return;
    }

    if (!hasDigitsOnly(loopnr.value) || !hasDigitsOnly(bishnr.value) || !hasDigitsOnly(boshnr.value)) {
        alert("Det är endast tillåtet att använda numeriska värden i representerade fält");
        return;
    }

    // Clear date in presentation div.
    //clearBox();


    usrMsg.innerHTML = "Bearbetas...";

    let _loopNr = parseInt(loopnr.value);
    let _bishNr = parseInt(bishnr.value);
    let _boshNr = parseInt(boshnr.value);





    let result = "";
    let color = "";

    let hitBish = 0;
    let hitBosh = 0;
    let hitBishBosh = 0; 



    for (let i = 0; i < _loopNr; i++) {

        counter++;

        let lt3 = (i / _bishNr) % 2;
        let lt4 = (i / _boshNr) % 2;


        if (i === 0) continue;


        if ((lt4 === 0 || lt4 === 1) && (lt3 === 0 || lt3 === 1)) {
            result = `Bish-Bosh ${i}`;
            color = "green";
            hitBishBosh++;

        }
        else if (lt3 === 0 || lt3 === 1) {
            result = `Bish ${i}`;
            color = "blue";
            hitBish++;
        }

        else if (lt4 === 0 || lt4 === 1) {

            result = `Bosh ${i}`;
            color = "brown";
            hitBosh++; 
        }
        else {
            result = i;
            color = "red";
        }

        console.log(result);
        presentationdiv.innerHTML += '<p>' + result + '</p>';


    }

    usrMsg.innerHTML = counter + " poster har laddats | ";
    usrMsg.innerHTML +=  `Bish ${hitBish} st | Bosh ${hitBosh} st | Bishbosh ${hitBishBosh} st | `;   
    usrMsg.innerHTML += 'Övriga poster ' + (+counter -  (hitBish + hitBosh + hitBishBosh)); 


    setColor(); 

    return usrMsg.innerHTML;

}


function onProcessSubmit() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(submitForm());
        }, 1000);
    });
}



async function onSubmitAsync() {
    presentationdiv.innerHTML = "Pågår....";

    await showProgressBar();

    let d = await onProcessSubmit().then(data => {
        console.log(data);
        return data
    });

    resetProgressBar();

    console.log("End function");
    console.log(d);
}