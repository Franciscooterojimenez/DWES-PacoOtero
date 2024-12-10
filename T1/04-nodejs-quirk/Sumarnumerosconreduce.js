function sumArray(array) {
    return array.reduce((total, num) => total + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));