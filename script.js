const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let sum = 0;

  prices.forEach((price) => {
    sum += Number(price.textContent);
  });

  let ansCell = document.getElementById("ans");

  if (ansCell) {
    // If total already exists, just update
    ansCell.textContent = sum;
  } else {
    // Create new total row
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.id = "ans";
    td.colSpan = document.querySelectorAll("thead th").length || 1;
    td.textContent = sum;

    tr.appendChild(td);
    document.getElementsByTagName("table")[0].appendChild(tr);
  }
};

getSumBtn.addEventListener("click", getSum);