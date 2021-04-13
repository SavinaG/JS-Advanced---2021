function validate() {
    let input = document.getElementById('email');
    let patern = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
    input.addEventListener('change', () => {
        if(!patern.test(input.value)){
            input.classList.add('error');
        }else {
            input.classList.remove('error');
        }
    });
}