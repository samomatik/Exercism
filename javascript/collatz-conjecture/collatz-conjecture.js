//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  } else if (n === 1) {
    return 0;
  } else {
    let counter = 0;
    while (n !== 1) {
      n % 2 == 0 ? n = n / 2 : n = (3 * n) + 1;
      counter = counter + 1;
    }
    return counter;
  }
};
