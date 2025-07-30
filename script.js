const tableBody = document.getElementById("promiseTableBody");
const totalTimeCell = document.getElementById("totalTime");

function createPromise(delay, label) {
  const start = performance.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      const end = performance.now();
      const seconds = ((end - start) / 1000).toFixed(3);
      resolve({ label, time: seconds });
    }, delay);
  });
}

async function runPromises() {
  const startTotal = performance.now();

  const promises = [
    createPromise(2000, "Promise 1"),
    createPromise(1000, "Promise 2"),
    createPromise(3000, "Promise 3"),
  ];

  const results = await Promise.all(promises);

  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.label}</td><td>${result.time}</td>`;
    tableBody.appendChild(row);
  });

  const endTotal = performance.now();
  const totalTime = ((endTotal - startTotal) / 1000).toFixed(3);
  totalTimeCell.textContent = totalTime;
}

runPromises();
