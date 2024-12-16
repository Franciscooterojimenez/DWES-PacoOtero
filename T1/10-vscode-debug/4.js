function divideNumbers(a, b) {
    if (b === 0) {
      console.log("Cannot divide by zero!");
      return null;
    }
    return a / b;
  }
  
  let quotient = divideNumbers(10, 2);
  console.log("Quotient:", quotient);