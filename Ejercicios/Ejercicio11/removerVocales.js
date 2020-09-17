function removerVocales(string) {
  var ArrayCadenas = string.split("");
  for (let index = 0; index <= ArrayCadenas.length; index++) {
    if (ArrayCadenas[index] == "a" || ArrayCadenas[index] == "A") {
      var removed = ArrayCadenas.splice(index, 1);
    }
    if (ArrayCadenas[index] == "e" || ArrayCadenas[index] == "E") {
      var removed = ArrayCadenas.splice(index, 1);
    }
    if (ArrayCadenas[index] == "i" || ArrayCadenas[index] == "I") {
      var removed = ArrayCadenas.splice(index, 1);
    }
    if (ArrayCadenas[index] == "o" || ArrayCadenas[index] == "O") {
      var removed = ArrayCadenas.splice(index, 1);
    }
    if (ArrayCadenas[index] == "u" || ArrayCadenas[index] == "U") {
      var removed = ArrayCadenas.splice(index, 1);
    }
    var NewString = ArrayCadenas.join("");
  }
  console.log(NewString);
  return NewString;
}

removerVocales("artigas");
removerVocales("Hola");
removerVocales("Hola Mundo");
removerVocales("Hola URUGUAY");
