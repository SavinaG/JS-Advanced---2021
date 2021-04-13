function solve() {
    let inputs = document.getElementById('container');
    let moviesSec = document.querySelector('#movies > ul');
    let archiveSec = document.querySelector('#archive > ul');

    let [name, hall, tPrice, onScreenBtn] = Array.from(inputs.children);

    onScreenBtn.addEventListener('click', onScreen);

    function onScreen(e) {
        e.preventDefault();

        if (!(name.value && hall.value && Number(tPrice.value))) {
            return;
        };

        let liElement = document.createElement('li');

        let spanElement = document.createElement('span');
        spanElement.textContent = name.value;

        let strongHallEl = document.createElement('strong');
        strongHallEl.textContent = `Hall: ${hall.value}`;

        let divElement = document.createElement('div');

        let strongPriceEl = document.createElement('strong');
        strongPriceEl.textContent = tPrice.value;

        let inputEl = document.createElement('input');
        inputEl.setAttribute('placeholder', 'Tickets Sold');

        let archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';

        liElement.appendChild(spanElement);
        liElement.appendChild(strongHallEl);

        divElement.appendChild(strongPriceEl);
        divElement.appendChild(inputEl);
        divElement.appendChild(archiveBtn);

        liElement.appendChild(divElement);

        moviesSec.appendChild(liElement);

        archiveBtn.addEventListener('click', archive);

        name.value = '';
        hall.value = '';
        tPrice.value = '';

        function archive(e) {
            e.preventDefault();
            if (!Number(inputEl.value)) {
                return;
            }
            divElement.remove();
            strongHallEl.textContent = `Total amount: ${(Number(inputEl.value) * strongPriceEl.textContent).toFixed(2)}`;
            archiveBtn.textContent = 'Delete';
            liElement.appendChild(archiveBtn)
            archiveSec.appendChild(liElement);

            let clearBtn = document.querySelector('#archive > button');
            clearBtn.addEventListener('click', () => {
               archiveSec.innerHTML = "";
            });

            if (e.target.textContent === 'Delete') {
                archiveBtn.addEventListener('click', () => {
                    e.target.parentElement.remove();
                });
            }
        }
    }
}