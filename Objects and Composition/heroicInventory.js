function heroicInventory(input){
    let result = [];

    for (let line of input) {
        let [name, level, items] = line.split(" / ");
        items = items ? items.split(", ") : [];
        let hero = {
            name: name,
            level: Number(level),
            items: items,
        }
        result.push(hero);
    }
    console.log(JSON.stringify(result));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);