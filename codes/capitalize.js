export default function capitalize(input) {
  let lowerCase = input.toLowerCase()
  lowerCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  return lowerCase
}