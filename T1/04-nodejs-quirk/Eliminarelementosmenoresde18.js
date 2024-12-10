function filterAdults(array) {
    return array.filter(num => num >= 18);
}

console.log(filterAdults([12, 45, 7, 23, 18, 16]));