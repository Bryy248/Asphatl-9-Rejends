const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const male = document.getElementById('male');
const female = document.getElementById('female');
const dob = document.getElementById('dob');
const acc = document.getElementById('acc');
const toast = document.getElementById('toast');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const gender = document.querySelector('input[name="Gender"]:checked');
    const dobValue = dob.value.trim();
    const currentDate = new Date();

    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Name is required');
        isValid = false;
    } else if (usernameValue.length < 5) {
        setError(username, 'Minimum 5 Name Characters');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!emailValue.endsWith('@gmail.com')) {
        setError(email, 'Email must contain @gmail.com');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (!gender) {
        setError(male.parentElement, 'Gender must be checked!');
        isValid = false;
    } else {
        setSuccess(male.parentElement);
    }

    if (dobValue === '') {
        setError(dob, 'Date of birth is required');
        isValid = false;
    } else if (new Date(dobValue) >= currentDate) {
        setError(dob, 'Date of birth must be in the past');
        isValid = false;
    } else {
        setSuccess(dob);
    }

    if (!acc.checked) {
        setError(acc.parentElement, 'Must agree to terms and conditions');
        isValid = false;
    } else {
        setSuccess(acc.parentElement);
    }

    if (isValid) {
        showToast();
    }
};

const showToast = () => {
    toast.className = 'show';
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 3000);
};
