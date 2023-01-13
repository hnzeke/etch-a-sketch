let userInput = prompt('Enter # of rows and columns')
const container = document.querySelector("#container");
let mouseDown = false;

for (let i = 1; i <= userInput; i++) { //Loop that creates columns and rows based on user input
    const row = document.createElement('div'); 
    row.classList.value = (`row ${[i]}`);
    container.appendChild(row);

    if (i === (userInput - 1) + 1) {
        row.style.border = "0px";
    }

    for (let i = 1; i <= userInput; i++) {
        const unit = document.createElement('div');
        unit.classList.value = (`unit ${[i]}`);
        row.appendChild(unit);
        
        if (i === (userInput - 1) + 1) {
            unit.style.border = "0px";
        }
    }


}

const units = document.querySelectorAll('div.unit')

units.forEach(unit => unit.addEventListener('mousedown', function () { // The following blocks contribute to the "drawing" function
    mouseDown = true;
}));

units.forEach(unit => unit.addEventListener('mouseup', function () {
    mouseDown = false;
}));

units.forEach(unit => unit.addEventListener('mousemove', function () {
    if (mouseDown === true) {
        unit.style.backgroundColor = 'black';
    }
}));