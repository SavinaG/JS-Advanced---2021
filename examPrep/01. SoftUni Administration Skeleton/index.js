function solve() {
    let lectureInput = document.getElementsByTagName('input')[0];
    let dateInput = document.getElementsByTagName('input')[1];
    let moduleInput = document.getElementsByTagName('select')[0];
    let addBtn = document.getElementsByTagName('button')[0];
    let outputSection = document.getElementsByClassName('modules')[0];
    
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (moduleInput.value === 'Select module' || !dateInput.value || !lectureInput.value) {
            return;
        };

        let [date, time] = dateInput.value.split('T');
        date = date.split('-');
        let outputDiv = document.createElement('div');
        outputDiv.className = 'module';
        let h3Element = document.createElement('h3');
        h3Element.textContent = `${(moduleInput.value).toUpperCase()}-MODULE`;
        let ulElement = document.createElement('ul');
        let liElement = document.createElement('li');
        liElement.className = 'flex';
        let h4Element = document.createElement('h4');
        h4Element.textContent = `${lectureInput.value} - ${date[0]}/${date[1]}/${date[2]} - ${time}`;
        let delBtn = document.createElement('button');
        delBtn.className = 'red';
        delBtn.textContent = 'Del';

        let moduleContainer = Array.from(document.querySelectorAll('.module'))
        .find(m => m.querySelector('h3').textContent === h3Element.textContent);

        if(moduleContainer){
            
        }

        liElement.appendChild(h4Element);
        liElement.appendChild(delBtn);
        ulElement.appendChild(liElement);

        outputDiv.appendChild(h3Element);
        outputDiv.appendChild(ulElement);
        outputSection.appendChild(outputDiv);

        delBtn.addEventListener('click', () => {

        });
    });
};