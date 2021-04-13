function extractIncreasing(input) {
    let max = Number.MIN_SAFE_INTEGER;

    input.forEach(num => {
        if (num >= max) {
            max = num;
            console.log(max);
        }
    });

}
extractIncreasing([20,
    3,
    2,
    15,
    6,
    1]
);