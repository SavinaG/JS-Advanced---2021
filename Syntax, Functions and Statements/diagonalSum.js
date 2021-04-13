function diagonalSum(input){
    let firstSum = 0;
    let secondSum = 0;
    let elIndex = 0;

    input.forEach(el => {
       firstSum += el[elIndex];
       secondSum += el[el.length - 1 - elIndex];
       elIndex++; 
    });
    console.log(`${firstSum} ${secondSum}`);
}
diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )

