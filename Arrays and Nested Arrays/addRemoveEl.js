function addRemoveEl(input){
    let output = [];
    let count = 1;
    
    input.forEach(command => {
        command == "add" ? output.push(count) : output.pop(count);
        count ++;
    });
    output.length == 0 ? console.log('Empty') : console.log(output.join('\n'));
}
addRemoveEl(['add', 
'add', 
'add', 
'add']
);