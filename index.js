

//FLOWER WITH RANDOM COLORS

function getColor() {
    const colorNumbers = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorNumbers[Math.floor(Math.random() * 16)];
    }
    return color;
}

let liElement = document.getElementsByClassName("round");


setInterval(() => {
    for (const element of liElement) {
        element.style.backgroundColor = getColor();
    }
}, 1000);


//DATATABLE INSERT DATAS WITH SETINTERVAL

let students = [
    { name: "Aygün", surname: "Əmiraslanova", id: "1" },
    { name: "Həcər", surname: "Məmmədzadə", id: "2" },
    { name: "Zinyət", surname: "Abbasova", id: "3" },
    { name: "Tamilla", surname: "Qasımova", id: "4" },
    { name: "Turan", surname: "Hidayətov", id: "5" },
    { name: "İlkin", surname: "Yusubov", id: "6" },
    { name: "Kənan", surname: "Mahmudov", id: "7" },
    { name: "Nofəl", surname: "Əsədov", id: "8" },
    { name: "Cavad", surname: "Cabbarlı", id: "9" },
    { name: "Vüqar", surname: "Aslanov", id: "10" },
    { name: "Cəfər", surname: "Nuriyev", id: "11" },
    { name: "Qədim", surname: "Musayev", id: "12" }
];

let tableList = document.querySelector(".data-table");
let tableRow = document.getElementsByClassName(".data-row");

function addELementInRow(row, content) {

    let addRowElement = document.createElement("td");
    addRowElement.textContent = content;
    row.appendChild(addRowElement);

    return row;
}

let i = 0;

setInterval(() => {

    let addTableRow = document.createElement("tr");

    let person = Object.values(students[i]);

    for (let j = 0; j < 3; j++) {
        let rowElement = addELementInRow(addTableRow, person[j]);
    }

    tableList.appendChild(addTableRow);

    i++;

}, 2000);