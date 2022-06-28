
const hasDigitsOnly = string => [...string].every(d => '0123456789'.includes(d));

let clearbtn = document.querySelector('#clearbtn');
clearbtn.addEventListener('click', clearBox);

let copyRight = document.querySelector('#copyrightid');
copyRight.addEventListener('onchange', getCopyRightInfo());


let progbar = document.querySelector('.progressbar');


let nrOfIteration = 100;

function clearBox() {

    presentationdiv.innerHTML = "";
    usrmsgid.innerHTML = "";

    form.querySelector('#loopnrid').value = "100";
    form.querySelector('#bishid').value = "3";
    form.querySelector('#boshid').value = "4";

}


function util_CallBishBosh(elementid) {

    let element = document.getElementById(elementid);


    let result = "";
    let color = "";

    for (let i = 1; i < nrOfIteration; i++) {
        let lt3 = (i / 3) % 2;
        let lt4 = (i / 4) % 2;

        if ((lt4 === 0 || lt4 === 1) && (lt3 === 0 || lt3 === 1)) {
            result = `Bish-Bosh ${i}`;
            color = "green";

        }
        else if (lt3 === 0 || lt3 === 1) {
            result = `Bish ${i}`;
            color = "blue";
        }

        else if (lt4 === 0 || lt4 === 1) {

            result = `Bosh ${i}`;
            color = "brown";
        }
        else {
            result = i;
            color = "red";
        }

        console.log(result);
        element.innerHTML += '<p>' + result + '</p>';

    }

    setParagraphBgColor(elementid);
}


function setParagraphBgColor(_elementid) {
    console.log(document.getElementById(_elementid));
}



function getCopyRightInfo() {
    copyRight.innerHTML = `CopyRight © ${new Date().getFullYear()}`;
};


function checkArgs(arg) {
    return arg !== "" && arg !== undefined
}




function showProgressBar() {
    var width = 1;
    let i = 0;
    var id = setInterval(frame, 10);

    progbar.innerHTML = "Bearbetning pågår..."

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            progbar.style.width = width + '%';
            progbar.style.backgroundColor = "green";
        }
    }
}

function resetProgressBar() {
    progbar.style.backgroundColor = "transparent"; 
    progbar.innerHTML = "";
}


function setColor() {

    var ps = presentationdiv.getElementsByTagName('p'); 

    for (let i = 0; i< ps.length; i++) {

        ps[i].id = 'pcol' + i; 
        let pc = document.getElementById('pcol' + i);

        if (pc.innerHTML.startsWith('Bish-Bosh')) {pc.style.color = "green";}
        else if (pc.innerHTML.startsWith('Bish ')) {pc.style.color = "blue";} 
        else if (pc.innerHTML.startsWith('Bosh ')) {pc.style.color = "gray";} 
        else {pc.style.color = "red";}
  



        console.log(ps[i]); 
    }

}

