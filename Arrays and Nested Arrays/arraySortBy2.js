function arraySort(input){

    input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    }).forEach(el => {
        console.log(el);
    });

}
arraySort(['test', 
'Deny', 
'omen', 
'Default']
);