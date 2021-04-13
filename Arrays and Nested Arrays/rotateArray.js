function rotateArray(input, rotation){

    for (let i = 0; i < rotation; i++) {
        let lastEl = input.pop();
        input.unshift(lastEl);
    }
    console.log(input.join(' '));
}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);