function sameNumbers(n) {
    n = n.toString()
    let sum = n
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);

    n = Number(n);
    let first = n % 10;
    let isValid = true;
    while (n !== 0) {
        if (n % 10 !== first){
            isValid = false;
        }
        n = Math.floor(n / 10);
    }
    console.log(isValid);
    console.log(sum);
}
sameNumbers(1234);




