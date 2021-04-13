function givenDelimeter(input){
    let delimeter = input.pop();

    console.log(input.join(delimeter));

}
givenDelimeter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-'])