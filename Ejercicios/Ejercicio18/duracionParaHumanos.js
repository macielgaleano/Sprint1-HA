function duracionParaHumanos(segundos) {
  var years_c = Math.trunc(segundos / 60 / 60 / 24 / 365);
  var months_c = Math.trunc(
    segundos / 60 / 60 / 24 / 30 -
      Math.trunc(segundos / 60 / 60 / 24 / 365) * 365
  );
  var days_c = Math.trunc(
    segundos / 60 / 60 / 24 - Math.trunc(segundos / 60 / 60 / 24 / 30) * 30
  );
  var hours_c = Math.trunc(
    segundos / 60 / 60 - Math.trunc(segundos / 60 / 60 / 24) * 24
  );
  var minutes_c = Math.trunc(
    segundos / 60 - Math.trunc(segundos / 60 / 60) * 60
  );
  var seconds = Math.trunc((segundos / 60 - Math.trunc(segundos / 60)) * 60);

  var time = [years_c, months_c, days_c, hours_c, minutes_c, seconds];

  times_plural = [
    " years, ",
    " months, ",
    " days, ",
    " hours, ",
    " minutes, ",
    " seconds ",
  ];
  times_singular = [
    " year, ",
    " month, ",
    " day, ",
    " hour, ",
    " minute, ",
    " second ",
  ];
  var return_chain = "";
  console.log(time);
  if (seconds == 0) {
    console.log("Ahora");
  } else {
    for (let i = 0; i < time.length; i++) {
      if (time[i] === 1) {
        return_chain += return_chain + time[i] + times_singular[i];
      } else if (time[i] > 0) {
        return_chain += time[i] + times_plural[i];
      }
    }
    console.log(return_chain);
  }
}

duracionParaHumanos(10000000);
