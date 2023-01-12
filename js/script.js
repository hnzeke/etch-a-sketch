const container = document.querySelector("#container");

for (let i = 1; i <= 16; i++) { //Loop that creates columns and rows based on user input
    const row = document.createElement('div'); 
    row.classList.value = (`row ${[i]}`);
    container.appendChild(row);

    for (let i = 1; i <= 16; i++) {
        const unit = document.createElement('div');
        unit.classList.value = (`unit ${[i]}`);
        row.appendChild(unit);
    }
}

