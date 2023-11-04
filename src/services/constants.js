export function declinationsNumericalValues(value) {
  const text = ["услуга", "услуги", "услуг"];
  const v = Math.abs(value) % 100;
  const v1 = v % 10;
  if (v > 10 && v < 20) {
    return text[2];
  }
  if (v1 > 1 && v1 < 5) {
    return text[1];
  }
  if (v1 === 1) {
    return text[0];
  }
  return text[2];
}

export function cutText(text, limit) {
  if (text.length < limit) return text;
  return `${text.slice(0, limit)}...`;
}
