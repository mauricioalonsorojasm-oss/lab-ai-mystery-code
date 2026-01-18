



//Case 1: The Infinite Loop

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++; // <==that was missing.
  }
  return false;
}


//Case 2: The Cryptic Function

function isPalindrome(str) {
  // reverse the string and compare with original
  return str.split('').reverse().join('') === str;
}



// Case 3: The Over-Engineered Mess

function simpleAdd(a, b) {
  return a + b; // does exactly what the original function did
}
