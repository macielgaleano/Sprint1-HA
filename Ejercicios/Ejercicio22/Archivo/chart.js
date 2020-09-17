var values = [];
var data = [];
var lablesYears = [];

$(document).ready(function () {
  fetch(
    "https://gist.githubusercontent.com/SuecoMarcus/23bcf8a786725f1b8335ec2dc2d90779/raw/f33d1058b878a7fc95ef202763d0067e8b436e54/uruguay_gdp.json"
  )
    .then((data) => data.json())
    .then((value) => {
      values = value;
      console.log(values);
      for (let i = 0; i < values.length; i++) {
        lablesYears.push(values[i].date);
        data.push(values[i].value);
      }
      console.log(lablesYears, data);
    });
});

var speedCanvas = document.getElementById("speedChart");

var lineChart = new Chart(speedCanvas, {
  type: "line",
  data: speedData,
  options: chartOptions,
});

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: lablesYears,
  datasets: [
    {
      label: "PBI Uruguay U$D",
      data: data,
    },
  ],
};

var chartOptions = {
  legend: {
    display: true,
    position: "top",
    labels: {
      boxWidth: 80,
      fontColor: "black",
    },
  },
};
