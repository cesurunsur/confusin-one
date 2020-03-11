var myMap = L.map("map", {
  center: [39.381266, -97.922211],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var newtry = "/ski-team";


d3.json(newtry, function(response) {

  console.log(response);

  for (var i = 0; i < response.length; i++) {
   // var location = response[i].location;

    if (location) {
      L.marker([response[i][4], response[i][5]]).addTo(myMap);
    }
  }

});
