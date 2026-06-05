const name = document.querySelector('.name');
const sure = document.querySelector('.sure');
const age = document.querySelector('.age');
const salary = document.querySelector('.salary');
const address = document.querySelector('.address');
const submit = document.querySelector('.submit');
const allSalary = document.querySelector('.allSalary');
const allSalaryResult = document.querySelector('#allSalaryResult');

let employeers = [];

submit.addEventListener('click', () => {
    const employeer = {
        name: name.value,
        sure: sure.value,
        age: age.value,
        salary: salary.value,
        address: address.value
    }

    employeers.push(employeer);
    console.log(employeers);

    name.value = '';
    sure.value = '';
    age.value = '';
    salary.value = '';
    address.value = '';
})

allSalary.addEventListener("click", () => {
    let sum = 0;
    for (let i = 0; i < employeers.length; i++) {
        sum += Number(employeers[i].salary);
    }
    allSalaryResult.textContent = `${sum}`;
})

