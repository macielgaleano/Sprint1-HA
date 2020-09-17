"use strict";

let table = document.querySelector("#table");
let usuarios = [];

$(document).ready(function () {
  fetch(
    "https://gist.githubusercontent.com/SuecoMarcus/a77af69f0e84c3125a5c0cf43a3ac41b/raw/918cd058b7e2286a36e79643c63a5ebca097d7c8/users.json"
  )
    .then((data) => data.json())
    .then((users) => {
      usuarios = users;
      console.log(usuarios);

      setTimeout(() => {
        document.querySelector("#loading").style.display = "none";

        function writed() {
          var txtInput = $("#texto");
          var lastValue = txtInput.data("lastValue");
          var currentValue = txtInput.val();
          if (lastValue != currentValue) {
            txtInput.data("lastValue", currentValue);
          }
          return lastValue;
        }
        for (let i = 0; i < users.length; i++) {
          var flagItems = true;
          var lastWrited = "";
          var flag_lastWrited = "";

          setInterval(function () {
            if (lastWrited !== flag_lastWrited) {
              console.log(lastWrited);
              flag_lastWrited = lastWrited;
              $("tr td").remove();
              for (let i = 0; i < users.length; i++) {
                var regex = ".*" + lastWrited + ".*";
                console.log(regex);
                var regex = new RegExp(regex);
                var matches = regex.test(usuarios[i].firstname);
                console.log(matches, usuarios[i].firstname);
                if (matches) {
                  console.log(1);
                  let tr = document.createElement("tr");
                  let thId = document.createElement("td");
                  let thnombre = document.createElement("td");
                  let thapellido = document.createElement("td");
                  let thedad = document.createElement("td");
                  thId.innerText = usuarios[i].id;
                  thnombre.innerText = usuarios[i].firstname;
                  thapellido.innerText = usuarios[i].lastname;
                  thedad.innerText = usuarios[i].age;
                  tr.appendChild(thId);
                  tr.appendChild(thnombre);
                  tr.appendChild(thapellido);
                  tr.appendChild(thedad);
                  table.appendChild(tr);
                }
              }
            }

            if (flagItems == true) {
              console.log(i);
              let tr = document.createElement("tr");
              let thId = document.createElement("td");
              let thnombre = document.createElement("td");
              let thapellido = document.createElement("td");
              let thedad = document.createElement("td");
              thId.innerText = usuarios[i].id;
              thnombre.innerText = usuarios[i].firstname;
              thapellido.innerText = usuarios[i].lastname;
              thedad.innerText = usuarios[i].age;
              tr.appendChild(thId);
              tr.appendChild(thnombre);
              tr.appendChild(thapellido);
              tr.appendChild(thedad);
              table.appendChild(tr);
              if (i == users.length - 1) {
                flagItems = false;
              }
            }
            lastWrited = writed();
          }, 100);
        }
      }, 2000);
    });
});
