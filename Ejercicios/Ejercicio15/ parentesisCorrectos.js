function parentesisCorrectos(arr) {
  if (arr.length % 2 === 1) return false;
  if (arr[0] !== "(") return false;
  if (arr[arr.length - 1] !== ")") return false;

  var flagChange = "(";

  while (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== []) {
        if (arr[i] === flagChange) {
          console.log(arr);
          if (flagChange === ")") {
            flagChange = "(";
          } else if (flagChange === "(") {
            flagChange = ")";
          }
          arr.splice(i, 1);
        } else if (arr[i] !== flagChange && i != arr.length) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(parentesisCorrectos(["(", "(", "(", ")", ")", ")"]));
