function renderBalance ( account ) {
    const DOM = document.querySelector('balance');
    let HTML = '';

    for ( let i=0; i<months.length; i++) {
        const month = months[i];
    
        for ( let t=0; t<account.length; t++) {
            const list = account[i]
        

    
    HTML += `<div class="table-row">
                <div class="cell">${list.month}</div>
                <div class="cell">${month[i]}</div>
                <div class="cell">${list.income}</div>
                <div class="cell">${list.expense}</div>
                <div class="cell">${list.income} - ${list.expense}</div>
            </div>`
        }
    }
    return DOM.innerHTML = HTML;
}