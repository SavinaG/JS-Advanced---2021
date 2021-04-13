function lockedProfile() {
    Array.from(document.getElementsByClassName('profile')).forEach((parent) => {
        let btn = parent.querySelectorAll('button')[0];

        btn.addEventListener('click', () => {
            let unlock = parent.querySelectorAll('input')[1].checked;
            let hiddenDiv = parent.querySelectorAll('div')[0];
            if(unlock){
                if(btn.textContent == 'Show more'){
                    hiddenDiv.style.display = 'block';
                    btn.textContent = 'Hide it';
                }else {
                    hiddenDiv.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            }
        });
    });
}
/*function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', showHide));
 
    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
 
        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}*/