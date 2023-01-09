

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


// grabbing the ids of logo images 

// let m_logo = document.getElementById('m_logo');
// let j_logo = document.getElementById('j_logo');
// let l_logo = document.getElementById('l_logo');

// console.log(m_logo);

// function  to get logo image 
var m_logo,j_logo,l_logo;

function getmlogo(e){
    m_logo = e.target.files[0];
}

function getllogo(e){
    l_logo = e.target.files[0];
}

function getmjogo(e){
    j_logo = e.target.files[0];
}


// declaring global variables for array 

let arrSort = [];

arrSort[0] = 100;
arrSort[1] = 200;
arrSort[2] = 300;

mark_cost.innerText = arrSort[0];
jacob_cost.innerText = arrSort[1];
lorem_cost.innerText = arrSort[2];





// grabbing the input btn id 

let sub_btn = document.getElementById('submit');

// uploading the values in the database 

sub_btn.addEventListener('click', function () {
    storeCost(mid, mark, mname, arrSort[0]);
    storeCost(jid, jacob, jname,arrSort[1]);
    storeCost(lid, lorem, lname,arrSort[2]);
    uploadImg(m_logo,mark);
    uploadImg(j_logo,jacob);
    uploadImg(l_logo,lorem);
    // console.log(mark);
    // sub_btn.ariaDisabled;
});

// grabbing the update btn

let update_btn = document.getElementById('update');

// to update the cost values in database

update_btn.addEventListener('click', function(){
    updatecost(mark,arrSort[0]);
    updatecost(jacob,arrSort[1]);
    updatecost(lorem,arrSort[2]);
});




// setting the values of cost 

mark_cost.addEventListener('click', function (e) {
    let markcost = changeCost();
    console.log(arrSort);
    // a1 = this.mcost;
    arrSort[0] = markcost;
    mark_cost.innerText = markcost;
})

jacob_cost.addEventListener('click', function (e) {
    let jacobcost = changeCost();
    console.log(arrSort);
    // b1 = this.jcost;
    arrSort[1] = jacobcost;
    jacob_cost.innerText = jacobcost;
})


lorem_cost.addEventListener('click', function (e) {
    let loremcost = changeCost();
    console.log(arrSort);
    // c1 = this.lcost;
    arrSort[2] = loremcost;
    lorem_cost.innerText = loremcost;
})


// function to update the value of cost 

function changeCost() {
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
// import { getDatabase } from 'firebase-admin/database';


const companyDB = firebase.database().ref('companies');
const companyLogo = firebase.storage().ref('companies');

function storeCost(id, name,company, cost) {

    var pushCompany = companyDB.child(name);

    pushCompany.set({
        id: id,
        logo: company,
        name: name,
        cost: cost
    });
}


// function to update values in database 

function updatecost(name,cost){

    var updateCompany = companyDB.child(name);

    updateCompany.update({
        cost:cost
    });
}


// function to upload the image 

function uploadImg(fileItem,name){
    // let storageRef = firebase.storage().ref("images/"+name);
    // let uploadtask = storageRef.ref.put(fileItem);

    var pushCompany = companyLogo.child(name);

    pushCompany.set({
        logo:fileItem
    });
}