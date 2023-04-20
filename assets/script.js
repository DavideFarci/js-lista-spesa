/*
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
gli elementi della lista individualmente con un ciclo for.
*/

const arrList = [
	'pomodori',
	'funghi',
	'latte',
	'carne',
	'caffè',
	'peperoni',
	'biscotti',
	'salmone',
	'pasta',
];

const eleList = document.querySelector('.list');


// soluzione con il ciclo for
// for (let i = 0; i < arrList.length; i++) {
// 	console.log(arrList[i]);
// 	eleList.innerHTML += `<li>${arrList[i]}</li>`;
// }



// SOLUZIONE CON IL CICLO WHILE

let i = 0;
while (i < arrList.length) {
	console.log(arrList[i]);
	eleList.innerHTML += `<li>${arrList[i]}</li>`;
    i++
}

const btnAdd = document.querySelector("#btn-add");
const inputAdd = document.querySelector("#input-add");

btnAdd.addEventListener("click",
function() {
	const addText = inputAdd.value.trim();
	console.log(addText);
	arrList.push(addText);
	console.log(arrList);
	eleList.innerHTML += `<li>${addText}</li>`;
}
)