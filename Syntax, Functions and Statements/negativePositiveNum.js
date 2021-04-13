function negativePositiveNum(input){
    let fixed = [];

    for (const nums of input) {
        if(nums < 0){
            fixed.unshift(nums);
        }else{
            fixed.push(nums)
        }
    }
    console.log(fixed.join("\n"));
}
negativePositiveNum([3, -2, 0, -1]);