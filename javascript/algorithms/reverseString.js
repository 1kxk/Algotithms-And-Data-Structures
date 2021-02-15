function reverseString(str) {
  const reversedString = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString.push(str[i]);
  }

  return reversedString.join("");
}

// Inplace
function reverseString2(str) {
  return str.split("").reverse().join("");
}

// Recursion
function reverseString3(str) {
  if (str === "") return "";
  else return reverseString3(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("Kades"));
console.log(reverseString2("Kades"));
console.log(reverseString3("Kades"));
