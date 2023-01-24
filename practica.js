const list = [1, 2, 3, 1, 10, 2, 3, 4, 5, 6, "victor", "junior", "victor"];

function removeDuplicates(arr) {
  return arr.filter((element, index) => arr.indexOf(element) === index);
}
console.log(removeDuplicates(list));

// function removeDuplicates(arr) {
//   const newArr = [...new Set(arr)];
//   return newArr;
// }
// console.log(removeDuplicates(list));

// // Is Palindorme...
// function isPalindrome(s) {
//   const newS = s.toLowerCase().replace(/[\W_]/gi, "");
//   const reversed = newS.split("").reverse().join("");

//   return newS === reversed ? true : false;
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
