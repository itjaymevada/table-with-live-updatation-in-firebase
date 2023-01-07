
let sortDirection = false;

let companyData = [
    {"logo": "first", "name":"Tata Motors","cost":200 },
    {"logo": "second", "name":"Infosys","cost":190 },
    {"logo": "third", "name":"L&T","cost":70 },
    {"logo": "fourth", "name":"Reliance","cost":250 },
    {"logo": "fifth", "name":"Tata Tcs","cost":300 }
];


    window.onload = () => {
        loadTableData(companyData);
    }

    //  to implement the data into the table

function loadTableData(companyData){
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';
    let i=1;
   
        for(let company of companyData){
            dataHtml += `<tr> <td id="logo${i}">${company.logo}</td> <td>${company.name}</td> <td id="cost${i}">${company.cost}</td> </tr>`;
            i++;
        }   

    console.log(dataHtml);

    tableBody.innerHTML= dataHtml;

}


// to edit the table data of cost 





//  function to sort the table data into deccendig order 

function sortColumn(columnName){

    const dataType = typeof companyData[0][columnName];
    // sortDirection = !sortDirection;

    switch(dataType){
        case "number":
            sortNumberColumn(sortDirection,columnName);
            break;
    }

    // // console.log(companyData);
    loadTableData(companyData);

}

function sortNumberColumn(sort,columnName){
    companyData = companyData.sort((p1,p2) => {
        return sort ? p1[columnName] - p2[columnName] :p2[columnName] - p1[columnName]  ;
    });
}






