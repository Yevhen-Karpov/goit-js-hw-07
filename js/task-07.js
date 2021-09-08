const targetInput = document.querySelector('#font-size-control');
const targetSpan = document.querySelector('#text');

targetInput.addEventListener('input', onInput);

targetSpan.style.fontSize = 0
targetInput.value = 0

function onInput(event) {
    targetSpan.style.fontSize = `${event.target.valueAsNumber}px`
}