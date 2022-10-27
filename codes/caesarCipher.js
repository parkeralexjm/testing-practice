function cipher(input) {
  const codebook = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let caesar = '';
  for (let i = 0; i < input.length; i += 1) {
    const letter = input.charAt(i);
    const position = codebook.indexOf(letter)
    // If the character is not in the codebook (punctuation) then add it to the string
    if (codebook.includes(letter) === false) {
      caesar += letter
    // If the character is z replace with a
    } else if (position === 25) {
      caesar += codebook[0];
    // If the character is Z replace with A
    } else if (position === 51) {
      caesar += codebook[26];
    } else {
      caesar += codebook[position + 1]
    }
  }
  return caesar
}

module.exports = cipher;