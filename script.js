// Select all price cells
const priceCells = document.querySelectorAll('.prices');

let total = 0;

// Sum all prices
priceCells.forEach(cell => {
  const value = parseFloat(cell.textContent);
  if (!isNaN(value)) {
    total += value;
  }
});

// Create a new row for total
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.setAttribute('colspan', '2');
totalCell.style.fontWeight = 'bold';
totalCell.style.textAlign = 'right';
totalCell.textContent = `Total: Rs ${total}`;

totalRow.appendChild(totalCell);

// Append to the table
const table = document.querySelector('table');
table.appendChild(totalRow);
