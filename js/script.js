let userInput = prompt('Enter # of rows and columns')
const container = document.querySelector("#container");

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

