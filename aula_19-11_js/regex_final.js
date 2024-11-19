function isNameValid(name) {
    const regexName = /^[a-zA-Zá-úÁ-Ú\s]+$/;
    return regexName.test(name);
}

function isBirthdayValid(birthday) {
    const regexBirthday = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regexBirthday.test(birthday);
}

function isCPFValid(cpf) {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regexCPF.test(cpf);
}

function isPasswordValid(password) {
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regexPassword.test(password);
}

function arePasswordsEqual(password, passwordCheck) {
    return password === passwordCheck;
}

function isFormValid() {
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;
    const passwordCheck = document.getElementById('passwordCheck').value;
    
    if (!isNameValid(name)) {
        alert("Nome inválido. Apenas letras e espaços são permitidos.");
        return false;
    }
    if (!isBirthdayValid(birthday)) {
        alert("Data de nascimento inválida. Use o formato DD/MM/AAAA.");
        return false;
    }
    if (!isCPFValid(cpf)) {
        alert("CPF inválido. Use o formato XXX.XXX.XXX-XX.");
        return false;
    }
    if (!isPasswordValid(password)) {
        alert("Senha inválida. Deve ter no mínimo 6 caracteres, incluindo letras e números.");
        return false;
    }
    if (!arePasswordsEqual(password, passwordCheck)) {
        alert("As senhas não coincidem.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}
