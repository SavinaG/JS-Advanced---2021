function validate() {
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', e => {
        let currentValue = e.currentTarget.value;

        let pattern = /[a-z]+@[a-z]+.[a-z]+/;

        if(pattern.test(currentValue)){
            e.currentTarget.classList.remove('error');
        }else {
            e.currentTarget.classList.add('error');
        }
    })
}
/*function validate() {
    var reg = /^[a-z]+@[a-z]+\.[a-z]+$/;;
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', function() {
        if (reg.test(inputField.value)) {
            inputField.classList.remove('error');
        } else {
            inputField.classList.add('error');
        }
    });
}*/