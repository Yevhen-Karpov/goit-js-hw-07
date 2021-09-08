const targetInput = document.querySelector('#validation-input')

targetInput.addEventListener('blur', outFocus)

const count = Number(targetInput.attributes["data-length"].value);

function outFocus(event) {
    event.currentTarget.value.length === count ? (targetInput.classList = 'valid') : (targetInput.classList = 'invalid');
  
}