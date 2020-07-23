const palindrome = str => {
  const strLen = str.length;
  if (strLen < 2) return true;

  if (str[0] === str[strLen - 1]) {
      return palindrome( str.slice(1, strLen - 1) );
  }

  return false;
};

console.log(palindrome("ibu ratna antar ubi"));
console.log(palindrome("kasur ini rusak"));
console.log(palindrome("A nut for a jar of tuna"));
console.log(palindrome("Was it a car or a cat I saw?"));
console.log(palindrome("Yo, banana boy!"));
console.log(palindrome("UFO tofu?"));