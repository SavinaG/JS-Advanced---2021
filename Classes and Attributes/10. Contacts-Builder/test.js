class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this._element = this.createElement();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this.update();
    }

    update() {
        if (this.online) {
            this._element.querySelector('.title').classList.add('online');
        } else {
            this._element.querySelector('.title').classList.remove('online');
        }
    }

    render(id) {
        let container = document.querySelector(`#${id}`);
        container.append(this.element);
    }

    createElement() {
        let contact = document.querySelector("article");
        let divTitle = document.querySelector('.title');

        let titleDiv = document.createElement('div');
        titleDiv.setAttribute('class', 'title');
        titleDiv.appendChild(document.createTextNode(`${this.firstName} ${this.lastName}`));
        divTitle.append(titleDiv);

        let info = document.querySelector('.info');
        let title = document.querySelector('.title').firstChild;
        //info.style.display = 'none';
        let onlineBtn = document.getElementsByTagName('button');
        //title.textContent = `${this.firstName} ${this.lastName}`;
        //info.children[0].textContent = `☎ ${this.phone}`;
        //info.children[1].textContent = `✉ ${this.email}`

        if(this.online){
            onlineBtn.addEventListener('click', () => {
                info.style.display = 'block';
            })
        }

        return contact;
    }

    
}
let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
  