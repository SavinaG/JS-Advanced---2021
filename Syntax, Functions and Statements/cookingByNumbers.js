function cookingByNumbers(...args){
    let input = Array.from(args)
    let n = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        switch(input[i]){
            case "chop": n /= 2; break;
            case "dice": n = Math.sqrt(n); break;
            case "spice": n++; break;
            case "bake": n *= 3; break;
            case "fillet": n *= 0.80; break;
        }
        console.log(n);
    }

}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')