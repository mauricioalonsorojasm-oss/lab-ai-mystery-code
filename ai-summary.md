
Case 1: Infinite Loop

🧠 Prompt used: “Why is this loop never ending?”

🤖 AI suggested: Add i++ inside the while loop.

💡 My Insight: The code was checking if the number was even, but since i never increased, it kept checking the same element forever and never reached the end of the array.

✔️ Fix: Added i++ and explained loop logic with comments.

function mystery1(arr) {
  let i = 0;

  while (i < arr.length) {
    // check if current element is even
    if (arr[i] % 2 === 0) {
      return true;
    }

    i++; // move to the next element to avoid infinite loop
  }

  // if no even number was found
  return false;
}


Case 2: The Cryptic Function

🧠 Prompt used: “What does this mysterious function actually do?”

🤖 AI explained: It splits the string into characters, reverses them, joins them back, and checks if the reversed string equals the original one.

💡 My Insight: The function is testing whether a string is a palindrome (reads the same forwards and backwards), even though the code itself looks cryptic due to the reused parameter name q.

✔️ Fix / Clarified Version: Renamed variables for readability and added comments.

function isPalindrome(str) {
  // reverse the string and compare with original
  return str.split('').reverse().join('') === str;
}


Case 3: The Over-Engineered Mess

🧠 Prompt used: “What is this complicated function actually calculating?”

🤖 AI explained: It starts with x = a and then loops b times, each time doing x++ and y--. After the loop, it returns only x.
So effectively it computes a + b.

💡 My Insight: The variable y is useless, since it’s never returned, and the loop is doing extra work just to add two numbers.

✔️ Fix / Simplified Version: Replace the entire loop with a direct operation.

function simpleAdd(a, b) {
  return a + b; // does exactly what the original function did
}