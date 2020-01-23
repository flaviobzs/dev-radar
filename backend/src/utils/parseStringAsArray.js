export default function parseStringAsArray(arrayAsArray) {
  return arrayAsArray.split(',').map(tech => tech.trim());
}
