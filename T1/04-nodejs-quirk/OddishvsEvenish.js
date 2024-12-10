function oddishOrEvenish(number) {
    const sum = number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(50));