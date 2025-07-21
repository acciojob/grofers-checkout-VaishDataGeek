const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const priceCells = document.querySelectorAll(".price");

  let total = 0;
  priceCells.forEach(cell => {
  total += parseFloat(cell.textContent);
  });
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

