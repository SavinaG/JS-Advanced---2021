class List{
    constructor(){
        this.list = [];
        this.size = 0;
    }
    add(element){
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size ++;
    }
    remove(index){
        this.validate(index);
        this.list.splice(index, 1);
        this.size --;
    }
    get(index){
        this.validate(index);
        return this.list[index];
    }
    validate(index){
        if(index < 0 || index >= this.list.length){
            throw new Error('Index is out of bounds')
        }
    }
}