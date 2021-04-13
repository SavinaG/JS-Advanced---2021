function evenPositionEl(input){
    let evenEl = [];

    for (const key in input) {
        if(key % 2 === 0){
            evenEl.push(input[key]);
        }
    }
    console.log(evenEl.join(" "));
    if(evenEl.some(el => el === "20")){
        console.log("yes");
    }
}
evenPositionEl(['20', '30', '40']);