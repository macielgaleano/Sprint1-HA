function sumarMultiplos(max) {
  var numeros = [3, 5];
  var aux = [];

  for (var i = 1; i < max; i++) {
    var contador = 0;

    for (var j = 0; j < numeros.length; j++) {
      if (i % numeros[j] == 0 && contador == 0) {
        aux.push(i);

        console.log(i + ",");
        contador++;
      }
    }
  }
  var suma = aux.reduce(function (a, b) {
    return a + b;
  });

  console.log("La suma es: " + suma);

  if (suma == " ") {
    console.log("La suma es: " + 0);
  }
}
sumarMultiplos(2);
