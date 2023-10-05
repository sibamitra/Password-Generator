document.addEventListener("DOMContentLoaded", function () {
    const lengthInput = document.getElementById("length");
    const lengthLabel = document.getElementById("lengthLabel");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const specialCheckbox = document.getElementById("special");
    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");
    const passwordTextarea = document.getElementById("password");
  
    lengthInput.addEventListener("input", updateLengthLabel);
  
    generateButton.addEventListener("click", generatePassword);
  
    copyButton.addEventListener("click", copyToClipboard);
  
    function updateLengthLabel() {
        lengthLabel.textContent = lengthInput.value;
    }
  
    function generatePassword() {
        const length = parseInt(lengthInput.value);
        const includeUppercase = uppercaseCheckbox.checked;
        const includeLowercase = lowercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSpecial = specialCheckbox.checked;
  
        const charset = generateCharset(
            includeUppercase,
            includeLowercase,
            includeNumbers,
            includeSpecial
        );
  
        if (charset.length === 0) {
            alert("Please select at least one character option.");
            return;
        }
  
        const password = generateRandomPassword(length, charset);
        passwordTextarea.value = password;
        copyButton.disabled = false;
    }
  
    function generateCharset(upper, lower, numbers, special) {
        let charset = "";
        if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lower) charset += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) charset += "0123456789";
        if (special) charset += "!@#$%^&*()_-+=<>?/{}[]|";
  
        return charset;
    }
  
    function generateRandomPassword(length, charset) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }
        return password;
    }
  
    function copyToClipboard() {
        passwordTextarea.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    }
  });
  