class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value){
        let patern = /\w \w/;
        if(patern.test(value)){
            let [firstName, lastName] = value.split(' ');

            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}