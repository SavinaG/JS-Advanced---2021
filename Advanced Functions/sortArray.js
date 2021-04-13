function sortArray(array, sort) {
    function sorting(a, b){
        if(sort == 'asc'){
            return a - b;
        }else {
            return b -a;
        }
    }

    return array.sort(sorting);
}
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
console.log(sortArray([14, 7, 17, 6, 8], 'asc')); 