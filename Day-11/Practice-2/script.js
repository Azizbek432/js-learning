const input = document.querySelector('input[type="text"]');    
const PushBtn = document.querySelector('#PushBtn');
const container = document.querySelector('.container');
const result = document.querySelector('#result');
const PopBtn = document.querySelector('#PopBtn');

let fruits = []

PushBtn.addEventListener('click', () => {
    let fruit = input.value;
    fruits.push(fruit);
    input.value = '';

    show(fruits);
    showHint(fruit);
});

function show(arr) {
    document.querySelectorAll("p").forEach(p => p.textContent = '');
    fruits.forEach(fruit => {
        let p = document.createElement('p');
        p.classList.add('fruit');
        p.textContent = fruit;
        container.appendChild(p);
    });
}   

PopBtn.addEventListener('click', () => {
    fruits.pop();
    show(fruits);
    showHint(fruits);
});


