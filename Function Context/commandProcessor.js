function commandProcessor(){
    let text = "";

    return {
        append: x => text += x,
        removeStart: x => text = text.substr(x),
        removeEnd: x => text = text.substr(0, text.length - x),
        print: () => console.log(text),
    };

}
let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
