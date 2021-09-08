const targetInput = document.querySelector('#name-input');
const targetSpan = document.querySelector('#name-output');

targetInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    targetSpan.textContent = event.currentTarget.value;
    if (event.currentTarget.value == "") {
       targetSpan.textContent = 'незнакомец' 
    };
};