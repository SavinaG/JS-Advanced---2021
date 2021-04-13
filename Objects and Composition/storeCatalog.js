function storeCatalog(input){
    let catalog = {};

    for (let line of input) {
        let [product, price] = line.split(" : ");
        price = Number(price);
        let letter = product[0];
        if(catalog.hasOwnProperty(letter) === false){
            catalog[letter] = {};
        }
        catalog[letter][product] = price;
    }
    let sorted = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (let key of sorted) {
        console.log(key);
        let sortedProducts = Object.keys(catalog[key]).sort((a, b) => a.localeCompare(b));
        for(let product of sortedProducts){
            console.log(`  ${product}: ${catalog[key][product]}`);
        }
    }
}
storeCatalog(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);