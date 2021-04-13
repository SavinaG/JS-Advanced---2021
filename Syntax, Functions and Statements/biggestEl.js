function biggestEl(input){
    let result = input.map(a => Math.max(...a))

    console.log(Math.max(...result));

}
biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);