function everyNEl(input){
    let step = Number(input.pop());
     
    input.forEach((el, index) => {
        if(index % step === 0){
            console.log(el);
        }
    });

}
everyNEl(['5', 
'20', 
'31', 
'4', 
'20', 
'2'])