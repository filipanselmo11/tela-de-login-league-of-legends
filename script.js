const inputs = document.querySelectorAll('.input');

const button = document.querySelector('.login_button');

const handlerFocus = ({ target }) => {
    const span = target.previousElementSibing;
    span.classList.add('span-active');
};

const handlerFocuOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibing;
        span.classList.remove('span-active');
    }
};

const handlerChange = () => {
    const [username, password] = inputs;
    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disable', '');
    }
    //const username = inputs[0];
};

inputs.forEach((input) => {
    input.addEventListener('focus', handlerFocus);
});

inputs.forEach((input) => {
    input.addEventListener('focusout', handlerFocuOut);
});

inputs.forEach((input) => {
    input.addEventListener('input', handlerChange);
});
