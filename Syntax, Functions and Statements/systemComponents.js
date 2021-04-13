function systemComponents(input){
    let catalog = {};

    for(let line of input){
        let [system, component, subCom] = line.split(" | ");
        if(!catalog.hasOwnProperty(system)){
            catalog[system] = {};
        }
        if(!catalog[system].hasOwnProperty(component)){
            catalog[system][component] = [];
        }
        catalog[system][component].push(subCom);
    }
    Object.entries(catalog).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system, component]) => {
        console.log(system);
        Object.entries(component).sort((a, b) => b[1].length - a[1].length)
        .forEach(([names, subCom]) => {
            console.log("|||" + names);
            subCom.forEach(el => {
                console.log("||||||" + el);
            })
        })
    })

}
systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);