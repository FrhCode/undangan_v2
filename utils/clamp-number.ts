export default function clampNumber(
  number: number,
  min: number,
  max: number
): number {
  if (number < min) {
    return min;
  } else if (number > max) {
    return max;
  } else {
    return number;
  }
}
