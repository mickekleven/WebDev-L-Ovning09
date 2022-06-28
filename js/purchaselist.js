
let purchasebtn = document.querySelector('#purchasebtn');
let purchaselist = document.querySelector('#purchaselistid');
let purchasepresentation = document.querySelector('#purchasepresentation');

let deleteChkClick = document.querySelector('.pres-main');



purchasepresentation.addEventListener('change', function(event) {
    deleteFromPurchaseList(event.target, event); 
});



//pres-main

purchasepresentation.addEventListener('click', function(event) {
    removeFromPurchaseList(event.target); 
})

purchasebtn.addEventListener('click', function() {
    addToPurchaseList(); 
})


let purchaseArray = [];

purchaselist.addEventListener('input', function () {
    setBtnState();
});


function addToPurchaseList() {

    let seq = purchasepresentation.getElementsByTagName('p').length;

    var item = buildPurchaseItem(seq, purchaselist.value); 

    purchasepresentation.innerHTML += item;

    console.log(item);


    purchaseArray.push(item);

    purchaselist.value = '';
    setBtnState();
}

function setBtnState() {

    console.log(purchaselist.value);
    console.log(purchaselist.value.length);


    if (purchaselist.value !== null && purchaselist.value.length > 0) {
        purchasebtn.disabled = false;
        purchasebtn.classList.remove('btn-disable');
        purchasebtn.classList.add('btn-success');
    }
    else {
        purchasebtn.disabled = true;
        purchasebtn.classList.add('btn-disable');
        purchasebtn.classList.remove('btn-success');
    }

}


function removeFromPurchaseList(element) {

    if (element.tagName.toLowerCase() !== 'p') {return;}

    if (element.getAttribute("style") == null || element.getAttribute("style") == "") {
        element.style.setProperty("text-decoration", "line-through");
        element.style.setProperty("text-decoration-color", "#b30000");
        element.style.setProperty("background", "#CCC");
        element.style.setProperty("color", "#fff");
    }
    else {
        element.style.removeProperty("text-decoration");
        element.style.removeProperty("background");
        element.style.removeProperty("color");
    }
}

function buildPurchaseItem(sequence, content) {

    console.log('Test ' + sequence); 

    let seq = sequence === 0 ? 0 : sequence; 
     return `<div class="pres-main" id="i${seq}_pres-main">
                <div id="i${seq}_mainc1" class="pres-main__c1"><p id="i${seq}_puritem${seq}">${content}</p></div>
                <div class="pres-main__c2">
                    <input id="i${seq}_chkitem${seq} class="chkicls" type="checkbox"></input></div>
    </div>`

}


function deleteFromPurchaseList(_element , _event) {

    let splitted = _element.id.split('_')[0]; 

    document.getElementById(splitted + '_pres-main').remove(); 
}



