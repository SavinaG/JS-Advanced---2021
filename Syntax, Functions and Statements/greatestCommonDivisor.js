function greatestCommonDivisor(a, b){

    if (a == 0)
    console.log(b);

while (b != 0) {
    if (a > b)
        a = a - b;
    else
        b = b - a;
}
    console.log(a);

}
greatestCommonDivisor(2154, 458);