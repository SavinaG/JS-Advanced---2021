function sortingNumbers(input){
    let result = [];
    input.sort((a, b) => {
        return a - b;
    });
    let length = Math.abs(input.length / 2);
    for(let i = 0; i < length; i++){
        let first = input.shift();
        let last = input.pop();
        result.push(first);
        result.push(last);
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); 