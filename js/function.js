function renderBalance( account ) {
    const DOM = document.querySelector('#balance');
    let HTML = '';
    for (let i = 0; i < months.length; i++) {
        const month = months[i];
        for (let t = 0; t < account.length; t++) {
            const list = account[i];
            for ( let k=0; k<list.income.length; k++) {
                const totalIncome = list.income[i];
                for ( let s=0; s<list.expense; s++) {
                const totalExpense = list.expense[i];
                const totalBalance = totalIncome - totalExpense;

            HTML += `<div class="table-row">
                <div class="cell">${list.month}</div>
                <div class="cell">${month[i]}</div>
                <div class="cell">${list.income}</div>
                <div class="cell">${list.expense}</div>
                <div class="cell">${list.income} - ${list.expense}</div>
                </div>
                <div class="table-footer">
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">${totalIncome}</div>
                    <div class="cell">${totalExpense}</div>
                    <div class="cell">${totalBalance}</div>
                </div>`
                }
            }
        }
    }
    return DOM.innerHTML = HTML;
}