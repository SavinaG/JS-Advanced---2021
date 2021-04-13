function argumentInfo(){
    let result = [];
    let count = {};

    [...arguments].forEach(arg => {
        let type = typeof arg;
        result.push({type, value: arg});

        if(!count[type]){
            count[type] = 0;
        }
        count[type]++;
    });
    result.forEach(el => console.log(`${el.type}: ${el.value}`));

    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);

    sorted.forEach(el => console.log(`${el[0]} = ${el[1]}`));

}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })