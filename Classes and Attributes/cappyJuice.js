function cappyJuice(input){
    let obj = {};
    let juises = [];

    input.forEach(el => {
        let [juice, quantity] = el.split(" => ");
        obj[juice] ? obj[juice].quantity += Number(quantity) : obj[juice] = {
            quantity: Number(quantity)
        };
        if(obj[juice].quantity >= 1000){
            if(!juises.includes(juice)){
                juises.push(juice);
            }
        }
    });

    for(let key of juises){
        console.log(`${key} => ${parseInt(obj[key].quantity / 1000)}`);
    }

}
cappyJuice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);