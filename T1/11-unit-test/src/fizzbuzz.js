export function fizzbuzz(num, conditions = {}) {
    let text = "";

    for (const divisor of Object.keys(conditions)) {
        if (num % divisor === 0) {
            text += conditions[divisor];
        }
    }

    return text || num;
}
