function listOfNames(input){

    input.sort(sort);
    for (let i = 0; i < input.length; i++) {
        console.log(`${i + 1}.${input[i]}`);
    }
    function sort(a, b){
        return a.localeCompare(b);
    }
}
listOfNames([ 'John', 'Bob', 'Christina', 'Ema']); 