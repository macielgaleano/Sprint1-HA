function encriptar13(texto) {
  var min = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var may = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var newTxt = texto.split("");
  var Encrypt = [];

  for (let i = 0; i < 24; i++) {
    for (let a = 0; a < min.length; a++) {
      if (newTxt[i] == min[a]) {
        console.log(min[a]);
        Encrypt.push(min[a + 13]);
      }
    }
    for (let aM = 0; aM < 24; aM++) {
      if (newTxt[i] == may[aM]) {
        console.log(may[aM]);
        Encrypt.push(may[aM + 13]);
      }
    }
  }
  console.log(Encrypt);
  return Encrypt;
}

encriptar13("CHAU");
