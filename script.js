
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const togglePassword = document.getElementById('togglePassword');
const errorMessage = document.getElementById('errorMessage');

function setDefaultCredentials() {
    const defaultUsername = 'admin';
    const defaultPassword = '12345'; 

    if (!localStorage.getItem('username') || !localStorage.getItem('password')) {
        localStorage.setItem('username', defaultUsername);
        localStorage.setItem('password', defaultPassword);
        console.log('Логин и пароль по умолчанию добавлены в localStorage.');
    }
}

function checkFields() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    submitButton.disabled = !(username && password); 
}

togglePassword.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '🙈'; 
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁';
    }
});

function validateCredentials(username, password) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    return username === storedUsername && password === storedPassword;
}


loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (validateCredentials(username, password)) {
        alert('Вы успешно вошли!');
        window.location.href = 'main.html'; 
    } else {
        errorMessage.textContent = 'Логин или пароль неправильный!';
        errorMessage.style.display = 'block'; 
    }
});


setDefaultCredentials();


usernameInput.addEventListener('input', checkFields);
passwordInput.addEventListener('input', checkFields);
