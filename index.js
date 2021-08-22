const sf = {};

sf.container = document.querySelector('.btn-container');
sf.form = document.querySelector('.btn-container > #singular-form');
sf.trigger = document.querySelector('.btn-container > #singular-form > button#trigger');
sf.input = document.querySelector('.btn-container>#singular-form>#input-container>input');
sf.submitButton = document.querySelector('.btn-container > #singular-form > #input-container > button');
sf.successMessage = document.querySelector('.btn-container > #singular-form > #success');


const phone = document.getElementById('phone-input');

sf.submitDelay = 1500;

window.onload = (event) => {
    sf.container.style.width = '37rem'
    // event.target.classList.remove('shown');
    sf.input.classList.add('shown');
    sf.submitButton.classList.add('shown');
    sf.container.style.opacity = '1'
    sf.input.focus();
 };

sf.clickHandler = (e) => {
    switch (e.target) {
        case sf.trigger:
            // console.log('case trigger');
            // sf.container.style.width = '37rem'
            // e.target.classList.remove('shown');
            // sf.input.classList.add('shown');
            // sf.submitButton.classList.add('shown');
            // sf.container.style.opacity = '1'
            // sf.input.focus();
            break;
        case sf.submitButton:
            sf.submitForm();
            break;
    }
}

sf.handleInputKeypress = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        sf.submitForm();
    }
}

sf.submitForm = () => {
    sf.input.style.transition = 'all .4s ease';
    sf.submitButton.style.transition = 'all .4s ease';
    sf.input.classList.remove('shown');
    sf.submitButton.classList.remove('shown');
    sf.container.style.transition = 'all .4s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
    sf.container.style.width = '';
    sf.successMessage.classList.add('shown');
    let submission = setTimeout(() => sf.form.submit(), sf.submitDelay);
}

phone.addEventListener("keydown", (e) => {
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 3) {
        phone.value = phone.value + "-";
    }
    if(e.target.value.length === 7) {
        phone.value = phone.value + "-";
    }
    if(e.target.value.length === 14) {
        phone.value = phone.value + "-";
    }
});

sf.input.addEventListener('keypress', (e) => sf.handleInputKeypress(e));
document.addEventListener('click', (e) => sf.clickHandler(e));