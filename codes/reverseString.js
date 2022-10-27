export default function reverseString(input) {
  const arrayStr = input.split('')
  const revStr = arrayStr.reverse()
  const str = revStr.join('')
  return str;
}