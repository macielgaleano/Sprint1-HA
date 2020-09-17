function encontrarImpar(arrayNumeros) {
  var cantidadImpares = [];
  var imparItem = {
    numero: 0,
    veces: 0,
  };
  cantidadImpares.push(imparItem);
  for (let index = 0; index < arrayNumeros.length; index++) {
    for (let indexImp = 0; indexImp < cantidadImpares.length; indexImp++) {
      if (cantidadImpares[indexImp].numero == arrayNumeros[index]) {
        cantidadImpares[indexImp].veces = cantidadImpares[indexImp].veces + 1;
      } else if (indexImp_value + 1 >= cantidadImpares.length) {
        var newItem = {
          numero: arrayNumeros[index],
          veces: 0,
        };
        cantidadImpares.push(newItem);
        console.log(cantidadImpares);
      }
      var indexImp_value = indexImp;
    }
  }

  for (let index = 0; index < cantidadImpares.length; index++) {
    if (cantidadImpares[index].veces % 2 == 1) {
      return cantidadImpares[index].numero;
    }
  }
}

console.log(encontrarImpar([0, 0, 0, 0, 0, 0, 9]));
