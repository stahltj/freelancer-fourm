/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

let totalRate = 0;
//loop through number of freelancers and create them
function createFreelancers() {
  const freelancers = [];
  for (let i = 0; i < NUM_FREELANCERS; i++) {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation =
      OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const rate =
      Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
      PRICE_RANGE.min;
    const freelancer = { name: name, occupation: occupation, rate: rate };
    createFreelancerRow(freelancer);
    totalRate += rate;
  }
}

//fuction to create single table row for freelancer
function createFreelancerRow(freelancer) {
  const tbody = document.getElementById(`freelancerTable`);
  const row = document.createElement(`tr`);
  row.innerHTML = ` <td>${freelancer.name}</td>
        <td>${freelancer.occupation}</td>
        <td>${freelancer.rate}</td>`;
  tbody.appendChild(row);
}

function updateAverageRate() {
  //calcualte average rate
  const averageRate = totalRate / NUM_FREELANCERS;
  document.getElementById(`averageRate`).innerHTML = averageRate;
}

createFreelancers();
updateAverageRate();
