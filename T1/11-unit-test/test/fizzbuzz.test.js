import { fizzbuzz } from '../src/fizzbuzz.js';

const condition = {
    2: 'poo',
    3: 'fizz',
    5: 'buzz',
    15: 'foo'
};

test('should be 1 for num = 1', () => {
    const result = fizzbuzz(1);
    expect(result).toBe(1);
});

test('should be "fizz" for num = 3', () => {
    const result = fizzbuzz(3, condition);
    expect(result).toBe("fizz");
});

test('should be "buzz" for num = 5', () => {
    const result = fizzbuzz(5, condition);
    expect(result).toBe("buzz");
});

test('should be "fizz" for num = 6', () => {
    const result = fizzbuzz(6, condition);
    expect(result).toBe("poofizz");
});

test('should be "fizzbuzz" for num = 15', () => {
    const result = fizzbuzz(15, condition);
    expect(result).toBe("fizzbuzzfoo");
});
