function countVowelsAndConsonants(str) {
  const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
  let vowels = 0, consonants = 0;

  for (let char of str.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      if (vowelsSet.has(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}

const result = countVowelsAndConsonants("Hello World!");
console.log(result); 
