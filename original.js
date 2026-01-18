


//Case 1: The Infinite Loop

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

//Case 2: The Cryptic Function

function q(q){return q.split('').reverse().join('')==q}


// Case 3: The Over-Engineered Mess

function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}