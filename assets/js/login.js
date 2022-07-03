const INPUT = document.querySelector('.login-input');
const BUTTON = document.querySelector('.login-button');
const FORM = document.querySelector('.login-form');

const VALIDATE_INPUT = ({ target }) => {
    if (target.value.length > 2) {
        BUTTON.removeAttribute('disabled');
    } else {
        BUTTON.setAttribute('disabled', '');
    }
}

const HANDLE_SUBMIT = (event) => {
    event.preventDefault();

    localStorage.setItem('player', INPUT.value);
    window.location = 'assets/pages/game.html';
}

INPUT.addEventListener('input', VALIDATE_INPUT);
FORM.addEventListener('submit', HANDLE_SUBMIT);