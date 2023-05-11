// GeoJson html with earthquake data: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson

//Create tile layer that will be the background or the map
let earthmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

//Create a map with layers
let map = L.map("map", {
    center: [47.1, -101.3],
    zoom:2
});

// Add tilelayer to the map 
earthmap.addTo(map);

//Get data
 //Pull the data using d3 to then plot the data points
 d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson').then(function(data) {
    console.log(data);

    let geoJSON;

    //function that defines style of circle
    function styleSize(feature) {
        return {
            color: 'black',
            fillColor: changeColor(feature.geometry.coordinates[2]),
            fillOpacity: 0.5,
            radius: changeSize(feature.properties.mag)
        }
    }
    //must include color (depth)
    function changeColor(depth) {
        switch (true) {
            case depth > 100: 
                return "#db463d";
            case depth > 50:
                return "#d8e963";
            case depth > 10:
                return "#23a42d";
            default:
                return "#223fa5";
        }
    }
    //must include radius (magnitude)
    function changeSize(magnitude) {
        return magnitude * 2.5;
    }

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        style:styleSize,
        onEachFeature: function(feature, layer) {
            layer.bindPopup(
                "<h3>magnitude: " + feature.properties.mag +
                "<h3>lat: " + feature.geometry.coordinates[0] +
                "<h3>long: " + feature.geometry.coordinates[1] +
                "<h3>depth: " +feature.geometry.coordinates[2]
            );
        }
    }).addTo(map);

      // Set up the legend.
  let legend = L.control({position: "bottomleft"});
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let grades = [-10,10,50,100];
    let colors = [
        "#223fa5",
        "#23a42d",
        "#d8e963",
        "#db463d"
    ];

    // Loop through int. & gen label w/ colored sq. for e. int.
    for (let i = 0; i < grades.length; i++) {
        div.innerHTML += '<i style= "background: '
          + colors[i]
          + '";></i> '
          + grades[i]
          + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
      }
      return div;
  };

  // Adding the legend to the map
  legend.addTo(map);
 });

