function jugar(option) {
  var optionsGame = ["Tijera", "Papel", "Piedra"];
  var optionSelectedByMachine =
    optionsGame[Math.floor(Math.random() * (3 - 1 + 1) + 1)];
  console.log(optionSelectedByMachine);
  if (
    option === optionSelectedByMachine ||
    option === optionSelectedByMachine ||
    option === optionSelectedByMachine
  ) {
    console.log("Han empatado, la maquina eligio " + optionSelectedByMachine);
  } else if (
    option == optionsGame[0] &&
    optionSelectedByMachine == optionsGame[1]
  ) {
    console.log("Has ganado, la maquina eligio " + optionSelectedByMachine);
  } else if (
    option == optionsGame[0] &&
    optionSelectedByMachine == optionsGame[2]
  ) {
    console.log("Han perdido, la maquina eligio " + optionSelectedByMachine);
  } else if (
    option == optionsGame[1] &&
    optionSelectedByMachine == optionsGame[2]
  ) {
    console.log("Has ganado, la maquina eligio " + optionSelectedByMachine);
  } else if (
    option == optionsGame[1] &&
    optionSelectedByMachine == optionsGame[0]
  ) {
    console.log("Han perdido, la maquina eligio " + optionSelectedByMachine);
  } else if (
    option == optionsGame[2] &&
    optionSelectedByMachine == optionsGame[1]
  ) {
    console.log("Has ganado, la maquina eligio " + optionSelectedByMachine);
  } else if (
    option == optionsGame[2] &&
    optionSelectedByMachine == optionsGame[0]
  ) {
    console.log("Han perdido, la maquina eligio " + optionSelectedByMachine);
  }
}

jugar("Papel");
