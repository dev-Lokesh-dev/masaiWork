function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result); 
