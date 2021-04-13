function solve() {
    let inputs = document.getElementById('container');
    let petList = document.querySelector('#adoption > ul');
    let adoptedList = document.querySelector('#adopted > ul');

    let [name, age, kind, owner, addBtn] = Array.from(inputs.children);

    addBtn.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();

        if (!(name.value && Number(age.value) && kind.value && owner.value)) {
            return;
        };

        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;

        let sOwner = document.createElement('span');
        sOwner.textContent = `Owner: ${owner.value}`;

        let contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';

        li.appendChild(p);
        li.appendChild(sOwner);
        li.appendChild(contactBtn);
        petList.appendChild(li);

        contactBtn.addEventListener('click', makeContact);

        name.value = '';
        age.value = '';
        kind.value = '';
        owner.value = '';

        function makeContact(e) {
            let parent = e.target.parentElement; //liEl
            e.target.remove(); //button

            let takeBtn = document.createElement('button');
            takeBtn.textContent = 'Yes! I take it!';

            let div = document.createElement('div');
            let inputEl = document.createElement('input');
            inputEl.setAttribute('placeholder', 'Enter your names');

            div.appendChild(inputEl);
            div.appendChild(takeBtn);
            parent.appendChild(div);

            takeBtn.addEventListener('click', (e) => {
                if (!inputEl.value) {
                    return;
                }

                
                adoptedList.appendChild(e.target.parentElement.parentElement);//(e.target(takeBtn).parentElement(div).parentElement(li))

                let span = e.target.parentElement.parentElement.querySelector('span');
                span.textContent = `New Owner: ${inputEl.value}`;

                let checkBtn = document.createElement('button');
                checkBtn.textContent = 'Checked';

                e.target.parentElement.parentElement.appendChild(checkBtn);
                e.target.parentElement.remove();

                checkBtn.addEventListener('click', (ev) => {
                    ev.target.parentElement.remove();
                });
            });
        }
    }
}

