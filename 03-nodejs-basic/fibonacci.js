function fibonacci(limit) {
  let a = 0, b = 1;
  console.log(a);
  if (limit > 1) console.log(b);

  for (let i = 2; i < limit; i++) {
      const next = a + b;
      console.log(next);
      a = b;
      b = next;
  }
}

fibonacci(10)