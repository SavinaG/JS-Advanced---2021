function lastKEl(n, k){
    let result = [1];

    for (let i = 1; i < n; i++) {
        let lastK = result.slice(-k);
        let sum = lastK.reduce((a, x) => a + x, 0);

        result.push(sum);
    }
    console.log(result.join(' '));
}
lastKEl(6, 3);

