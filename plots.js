// // LINE GRAPH
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// // BAR CHART
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
// var data = [trace];
// var layout = {
//     title: "'Bar' Chart",
//     xaxis: { title: "Drinks"},
//     yaxis: { title: "% of Drinks Ordered"}
//    };
// Plotly.newPlot("plotArea", data, layout);

// // PIE CHART
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);

// // SCATTER PLOT
// var trace1 = {
//     x: [1, 2, 3, 4, 5],
//     y: [1, 6, 3, 6, 1],
//     mode: 'markers',
//     type: 'scatter',
//     name: 'Team A',
//     text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
//     marker: { size: 12 }
//   };
  
//   var trace2 = {
//     x: [1.5, 2.5, 3.5, 4.5, 5.5],
//     y: [4, 1, 7, 1, 4],
//     mode: 'markers',
//     type: 'scatter',
//     name: 'Team B',
//     text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
//     marker: { size: 12 }
//   };
  
//   var data = [ trace1, trace2 ];
  
//   var layout = {
//     xaxis: {
//       range: [ 0.75, 5.25 ]
//     },
//     yaxis: {
//       range: [0, 8]
//     },
//     title:'Data Labels Hover'
//   };
  
//   Plotly.newPlot('plotArea', data, layout);

// //   MAP FUNCTION
// var numbers = [0,2,4,6,8];
// var doubled = numbers.map(function(num){
//     return num + 5;
// });
// console.log(doubled);

// // EXTRACT DATA USING THE MAP FUNCTION
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var population = cities.map(function(population){
//     return population.population;
// });
// console.log(population);

// // USING THE FILTER() METHOD
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// var esWords = words.filter(function(bloop){
//     return bloop.startsWith("s");
// });

// console.log(esWords);

// // ARROW FUNCTIONS AND SORT METHOD
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
// anotherElement);

// // THE SLICE() METHOD
// // First 3 Words
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var slice1 = words.slice(0,3);

// console.log(slice1);

// // Last 3 words
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var slice2 = words.slice(3, );

// console.log(slice2);

// // TOP 5 CITIES

// var sortedCities = cityGrowths.sort(funtion (a,b) {return a-b}); 

// var topFiveCities = sortedCities.slice(0,5);

// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);

// // MODULE GRAPH
// function init() {
//   data = [{
//     x: [1, 2, 3, 4, 5],
//     y: [1, 2, 4, 8, 16] }];
//   Plotly.newPlot("plot", data);
// };

// d3.selectAll("#dropdownMenu").on("change", updatePlotly);
// function updatePlotly() {
//   var dropdownMenu = d3.select("#dropdownMenu");
//   var dataset = dropdownMenu.property("value");

//   var xData = [1, 2, 3, 4, 5];
//   var yData = [];

//   if (dataset === 'dataset1') {
//     yData = [1, 2, 4, 8, 16];
//   };

//   if (dataset === 'dataset2') {
//     yData = [1, 10, 100, 1000, 10000];
//   };

//   var trace = {
//     x: [xData],
//     y: [yData],
//   };
//   Plotly.restyle("plot", trace);
// };

// init();

// GENERATING A DROP DOWN MENU
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.all);
  });
}