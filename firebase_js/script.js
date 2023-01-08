

//  declaring ids
const mid = 1;
const jid = 2;
const lid = 3;


// declaration of company tag and values 

let mark = document.getElementById('mark').innerText;
let jacob = document.getElementById('jacob').innerText;
let lorem = document.getElementById('lorem').innerText;


// declaration of company name tags and values

let mname = document.getElementById('mname').innerText;
let jname = document.getElementById('jname').innerText;
let lname = document.getElementById('lname').innerText;



// declartion of td cost tag 

let mark_cost = document.getElementById('mark_cost');
let jacob_cost = document.getElementById('jacob_cost');
let lorem_cost = document.getElementById('lorem_cost');

let mcost, jcost, lcost;

//  grabbing the ids of table rows to interchange the sorted data 

let mrow = document.getElementById('mrow');
let jrow = document.getElementById('jrow');
let lrow = document.getElementById('lrow');


// declaring global variables for array 

let arrSort = [];

arrSort[0] = 100;
arrSort[1] = 200;
arrSort[2] = 300;

mark_cost.innerHTML.valueOf = mcost = arrSort[0];
jacob_cost.innerText.valueOf = jcost = arrSort[1];
lorem_cost.innerText.valueOf = lcost = arrSort[2];





// grabbing the input btn id 

let sub_btn = document.getElementById('submit');

// uploading the values in the database 

sub_btn.addEventListener('click', function () {
    storeCost(mid, mark, mname, mcost);
    storeCost(jid, jacob, jname, jcost);
    storeCost(lid, lorem, lname, lcost);
    // console.log(mark);
})




// setting the values of cost 

mark_cost.addEventListener('click', function (e) {
    let markcost = updateCost();
    console.log(arrSort);
    // a1 = this.mcost;
    arrSort[0] = markcost;
    mark_cost.innerText = markcost;
})

jacob_cost.addEventListener('click', function (e) {
    let jacobcost = updateCost();
    console.log(arrSort);
    // b1 = this.jcost;
    arrSort[1] = jacobcost;
    jacob_cost.innerText = jacobcost;
})


lorem_cost.addEventListener('click', function (e) {
    let loremcost = updateCost();
    console.log(arrSort);
    // c1 = this.lcost;
    arrSort[2] = loremcost;
    lorem_cost.innerText = loremcost;
})


// function to update the value of cost 

function updateCost() {
    let cost = prompt("Enter the cost:", "cost here");
    return parseInt(cost);
}



// database 
const firebaseConfig = {

    apiKey: "AIzaSyBX21HIOm5v8lJArc91hV-d5kigAQ4laDE",

    authDomain: "projfirebasejs.firebaseapp.com",

    databaseURL: "https://projfirebasejs-default-rtdb.firebaseio.com",

    projectId: "projfirebasejs",

    storageBucket: "projfirebasejs.appspot.com",

    messagingSenderId: "391551330422",

    appId: "1:391551330422:web:0f3dacaea566f7b8f19757",

    measurementId: "G-3RE9SRQDDC"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);



// connection with  firebase and updatation values 

const companyDB = firebase.database().ref('companies');


function storeCost(id, company, name, cost) {

    var pushCompany = companyDB.push();

    pushCompany.set({
        id: id,
        logo: company,
        name: name,
        cost: cost
    });

}