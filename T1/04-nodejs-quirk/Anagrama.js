function isAnagram(word1, word2) {
    if (word1 === word2) return false;

    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(word1) === normalize(word2);
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("hello", "hello"));