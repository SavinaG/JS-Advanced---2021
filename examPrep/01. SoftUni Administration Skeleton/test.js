function solve() {
    const lectureInput = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]');
    const dateInput = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(2) > input[type=datetime-local]');
    const moduleInput = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(3) > select');
    const addButton = document.querySelector('.form-control button');
    const modulesContainer = document.querySelector('div.modules');
 
    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        // get input values
        let lecture = lectureInput.value;
        let date = dateInput.value;
        let module = moduleInput.value;
        // validate input values
        if (module === 'Select module' || !date || !lecture) {
            return;
        }
        // format values
        module = module.toUpperCase();
        date = date.replace(/-/g, '/').replace('T', ' - ');
        // prepare li to insert
        const li = document.createElement('li');
        li.className = 'flex';
        const h4 = document.createElement('h4');
        h4.textContent = `${lecture} - ${date}`;
        li.appendChild(h4);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Del';
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            let ul =  e.target.parentNode.parentNode;
            li.remove();
            if (ul.children.length === 0) {
                ul.parentNode.remove();
            }
        });
        li.appendChild(deleteButton);
        // search for module to insert in
        let modules = document.querySelectorAll('div.module');
        let moduleContainer = Array.from(modules).find(m => m.querySelector('h3').textContent === `${module}-MODULE`);
        if (!moduleContainer) {
            // if not found - create module
            moduleContainer = document.createElement('div');
            moduleContainer.className = 'module';
            const h3 = document.createElement('h3');
            h3.textContent = `${module}-MODULE`;
            moduleContainer.appendChild(h3);
            const ul = document.createElement('ul');
            moduleContainer.appendChild(ul);
            modulesContainer.appendChild(moduleContainer);
        }
        // append li to module's ul
        moduleContainer.querySelector('ul').appendChild(li);
        // sort li-s in module
        Array.from(moduleContainer.querySelectorAll('li'))
            .sort((a, b) => getDate(a).localeCompare(getDate(b)))
            .forEach(liEl => moduleContainer.querySelector('ul').appendChild(liEl));
    });
 
    function getDate(liElement) {
        return liElement.querySelector('h4').textContent.replace(/^.+? - /, '');
    }
}