function populationInTown(input){
    let result = {};

    for (let line of input) {
        let info = line.split(" <-> ");
        
        if(!result[info[0]]){
            
            result[info[0]] = 0;
        }
        result[info[0]] += Number(info[1]);
    }

    Object.entries(result).forEach(el => {
        console.log(el.join(" : "));
    });

}
populationInTown(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);