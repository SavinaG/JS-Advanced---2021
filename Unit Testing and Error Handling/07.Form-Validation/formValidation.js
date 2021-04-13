function validate() {
    let userInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let confirmInput = document.getElementById('confirm-password');
    let checkBox = document.getElementById('company');
    let submitBtn = document.getElementById('submit');
    let validDiv = document.getElementById('valid');
    let companyNumber = document.getElementById('companyNumber');
    let companyInfo = document.getElementById('companyInfo');
    
    let isValidUser = false;
    let isValidMail = false;
    let isValidPass = false;
    let isValidNum = true;

    checkBox.addEventListener('change', function () {   
        if (checkBox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
        
    });

    submitBtn.addEventListener('click', e => {
        e.preventDefault();

        if ((/^[A-Za-z\d]{3,20}$/gm).test(userInput.value)) {
            isValidUser = true;
            userInput.style.border = 'none';
        } else {
            userInput.style.borderColor = 'red';
        }
        if ((/^(.+@(.+)?\.(.+)?)$/gm).test(emailInput.value)) {
            isValidMail = true;
            emailInput.style.border = 'none';
        } else {
            emailInput.style.borderColor = 'red';
        }
        if ((/^\w{5,15}$/gm).test(passwordInput.value)) {
            isValidPass = true;
            passwordInput.style.border = 'none';
        } else {
            passwordInput.style.borderColor = 'red';
        }
        if (isValidPass && passwordInput.value === confirmInput.value) {
            confirmInput.style.border = 'none';
        } else {
            isValidPass = false;
            passwordInput.style.borderColor = 'red';
            confirmInput.style.borderColor = 'red';
        }
        if(checkBox.checked){
            if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.border = 'none';
            } else {
                isValidNum = false;
                companyNumber.style.borderColor = 'red';
            }
        }
        if (isValidUser && isValidMail && isValidPass && isValidNum) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    });
}