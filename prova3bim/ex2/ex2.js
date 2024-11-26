function isNameValid(name) {
    const regexName = /^[a-zA-Zá-úÁ-Ú\s]+$/;
    return regexName.test(name);
}

function isAgeValid(age) {
    const regexAge = /^(?:1[01][0-9]|120|[1-9]?[0-9])$/;
    return regexAge.test(String(age));
}

function isPasswordValid(password) {
    if (password.length >= 8) {
        return true
    }
    else {
        return false
    }
}

function arePasswordsEqual(password, passwordCheck) {
    return password === passwordCheck;
}


function isFormValid() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    const passwordCheck = document.getElementById('passwordCheck').value;
    
    if (!isNameValid(name)) {
        alert("Nome inválido. Apenas letras e espaços são permitidos.");
        return false;
    }
    if (!isAgeValid(age)) {
        alert("Idade inválida. Deve conter apenas números entre 0 e 120");
        return false;
    }
    if (!isPasswordValid(password)) {
        alert("Senha inválida. Deve ter no mínimo 8 caracteres.");
        return false;
    }
    if (!arePasswordsEqual(password, passwordCheck)) {
        alert("As senhas não coincidem.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}
