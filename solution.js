function descendingOrder(n) {
  let order = "";
  var digit = ("" + n).split("").map(Number).sort((a, b) => b - a).map(num => order += num);
  return order * 1;
}