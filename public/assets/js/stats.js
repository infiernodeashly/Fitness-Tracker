// get all workout data from back-end
//added 2 new functions to: 1. prevent exercises in same workout from being applied to different days. 
//2. keep pie chart legend display and toggle functionality for all exercises completed.

fetch("/api/workouts/range")
  .then(response => {
    return response.json();
  })
  .then(data => {
    populateChart(data);
  });


API.getWorkoutsInRange()

function generatePalette() {
  const arr = [
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600",
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600"
  ]

  return arr;
}
function populateChart(data) {
  //pulls total exercise duration for the day to display on line chart.
  let durations = duration(data);
  //pulls individual exercise durations to display in the pie chart legend
  let durationPiece = durationP(data);
  //pulls total exercise weight lifted for the day to display on bar chart.
  let pounds = calculateTotalWeight(data);
  //pulls individual exercise weight lifted to display in the pie2 chart legend
  let poundsPiece = poundsP(data);
  let workouts = workoutNames(data);
  const colors = generatePalette();

  let line = document.querySelector("#canvas").getContext("2d");
  let bar = document.querySelector("#canvas2").getContext("2d");
  let pie = document.querySelector("#canvas3").getContext("2d");
  let pie2 = document.querySelector("#canvas4").getContext("2d");

  let lineChart = new Chart(line, {
    type: "line",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      datasets: [
        {
          label: "Workout Duration In Minutes",
          backgroundColor: "red",
          borderColor: "red",
          //data = total workout duration for the day for line chart
          data: durations,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    }
  });

  let barChart = new Chart(bar, {
    type: "bar",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      datasets: [
        {
          label: "Pounds",
          data: pounds,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Pounds Lifted"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  let pieChart = new Chart(pie, {
    type: "pie",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Excercises Performed",
          backgroundColor: colors,
          //data = individual workout duration for pie chart legend
          data: durationPiece,
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Excercises Performed"
      }
    }
  });

  let donutChart = new Chart(pie2, {
    type: "doughnut",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Excercises Performed",
          backgroundColor: colors,
          //data = individual workout weight lifted for pie2 chart legend
          data: poundsPiece
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Excercises Performed"
      }
    }
  });
}
// total exercise duration for the day for line chart
function duration(data) {
  let durations = [];

  data.forEach(workout => {
    let sumDuration = 0;
    workout.exercises.forEach(exercise => {
      sumDuration += exercise.duration;
    });
    workout.totalDuration = sumDuration;
    durations.push(sumDuration);
  });
  return durations;
}

// individual exercise duration for the day for pie chart legend
function durationP(data) {
  let durationPiece = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      durationPiece.push(exercise.duration);
    });
  });

  return durationPiece;
}

// total exercise weight lifted for the day for line chart
function calculateTotalWeight(data) {
  let total = [];

  data.forEach(workout => {
    let sumPounds = 0;
    workout.exercises.forEach(exercise => {
      sumPounds += exercise.weight;
    });
    workout.totalWeight = sumPounds;
    total.push(sumPounds);
  });
  return total;
}

// individual exercise weight lifted for the day for pie2 chart legend
function poundsP(data) {
  let poundsPiece = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      poundsPiece.push(exercise.weight);
    });
  });

  return poundsPiece;
}


function workoutNames(data) {
  let workouts = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      workouts.push(exercise.name);
    });
  });

  return workouts;
}