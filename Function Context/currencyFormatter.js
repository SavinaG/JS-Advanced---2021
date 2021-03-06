function dollarFormatterBuilder(currencyFormatter){
    let separator = ',';
    let symbol = '$';
    let symbolFirst = true;

    let dollarFormatter = currencyFormatter.bind(null, separator, symbol, symbolFirst);

    return dollarFormatter;

}
let dollarFormatter = dollarFormatterBuilder(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71


function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}