<!DOCTYPE html>
<html>
<script src=></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<body>

    <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between;">
        <div style="flex-basis: 48%;">
          <canvas id="myChart-1" style="width:100%;max-width:600px"></canvas>
        </div>
        <div style="flex-basis: 48%;">
          <canvas id="myChart-11" style="width:100%;max-width:600px"></canvas>
        </div>
        <hr style="width: 100%">
        <div style="flex-basis: 100%;">
          <canvas id="myChart-2" style="width:100%;max-width:1000px"></canvas>
        </div>
      </div>
      

<script>
  var rel1 = "<?relevance (name of it, number of relevant fixlets of it) of bes computers ?>";
  console.log(rel1);

  // Step 1: Split into lines
  var lines = rel1.split('<br />');
  console.log(lines)

  // Step 2: Split each line into name and value
  var dataArray = lines.map(function(line) {
    var parts = line.split(', ');
    return [parts[0], parseInt(parts[1])];
  });

  // Step 3: Sort based on numeric values
  dataArray.sort(function(a, b) {
    return b[1] - a[1];
  });

  // Step 4: Print the 2D array
  console.log(dataArray);

  const xValues = [];
  const yValues = [];

  dataArray.forEach(function(entry) {
    xValues.push(entry[0]);
    yValues.push(entry[1]);
  });

  const barColors = ["red", "green","blue","orange","brown", "pink", "gray"];

  new Chart("myChart-1", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Vulnerable Computers"
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Computer Names"
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Number of relevant fixlets"
          }
        }]
      }
    }
  });
  // SubChart for chart 1 
  var rel11 = "<?relevance (name of it, number of relevant fixlets of it) of members of bes computer groups whose (name of it = "Mod 1 Group") ?>";
  console.log(rel11);

  // Step 1: Split into lines
  var lines11 = rel11.split('<br />');
  console.log(lines11)

  // Step 2: Split each line into name and value
  var dataArray11 = lines11.map(function(line) {
    var parts = line.split(', ');
    return [parts[0], parseInt(parts[1])];
  });

  // Step 3: Sort based on numeric values
  dataArray11.sort(function(a, b) {
    return b[1] - a[1];
  });

  // Step 4: Print the 2D array
  console.log(dataArray11);

  const xValues11 = [];
  const yValues11 = [];

  dataArray11.forEach(function(entry) {
    xValues11.push(entry[0]);
    yValues11.push(entry[1]);
  });

  const barColors11 = ["red", "green","blue","orange","brown", "pink", "gray"];

  new Chart("myChart-11", {
    type: "bar",
    data: {
      labels: xValues11,
      datasets: [{
        backgroundColor: barColors11,
        data: yValues11
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Vulnerable Computers of Group"
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Computer Names of Group"
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Number of relevant fixlets"
          }
        }]
      }
    }
  });

  // Second Chart 
  var rel2 = "<?relevance (id of item 0 of it,  name of item 0 of it, "NumberOfFixlet:" & item 1 of it as string)  of (( it,  number of computers of results whose(relevant flags of it) of it) of unique values of bes fixlets ) whose ( item 1 of it > 0) ?>";
  console.log(rel2);

  // Step 1: Split into lines
  var lines2 = rel2.split('<br />');
  console.log(lines2)

  // Step 2: Split each line into name and value
  var dataArray2 = lines2.map(function(line) {
    var parts = line.split(', NumberOfFixlet:');
    var parts2 =  parts[0].split(', ');
    return [ parseInt(parts2[0]),  parts[0], parseInt(parts[1])];
  });

  // Step 3: Sort based on numeric values
  dataArray2.sort(function(a, b) {
    return b[2] - a[2];
  });
  dataArray2 = dataArray2.slice(0, 10);

  // Step 4: Print the 2D array
  console.log(dataArray2);

  const xValues2 = [];
  const yValues2 = [];

  dataArray2.forEach(function(entry) {
    xValues2.push(entry[1]);
    yValues2.push(entry[2]);
  });

  const barColors2 = ["red", "green","blue","orange","brown", "pink", "lime", "purple", "teal", "gray"];
const barColors3 = [  "pink", "lime", "purple", "teal", "gray", "red", "green","blue","orange","brown"];
const newValuesData = [];
const newValues = [5, 4, 3, 2, 1];
for (let i = 0; i < newValues.length; i++) {
  newValuesData.push({
    y: newValues[i],
    label: 'Label ' + (i + 1)
  });
}

  const existingData = [];
  for (let i = 0; i < yValues2.length; i++) {
    existingData.push({
      y: yValues2[i],
      label: 'Label ' + (i + 1)
    });
  }

  const ctx = document.getElementById("myChart-2").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: xValues2,
      datasets: [{
         label: 'Overall',
        backgroundColor: barColors2,
        data: existingData,
         stack: 'Stack 1'
      }, {
        label: 'New Values',
        data: newValuesData,
        backgroundColor: barColors3,
        stack: 'Stack 1' // This ensures that the new values are stacked on top of the original values
      }]
    },
    options: {
      legend: {display: true},
      title: {
        display: true,
        text: "Vulnerable Fixlets"
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Fixlets Names"
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Number of relevant Computers"
          }
        }]
      },
     tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function(tooltipItem, data) {
          const datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
          const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].y;
          const label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].label;
          return datasetLabel + ': ' + value + ' (' + label + ')';
        }
      }
    }
    }
  });
</script>

</body>
</html>
