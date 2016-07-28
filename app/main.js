var QUAKE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp';

loadJSONP = (url) => {
  let script = documenct.createElement('script');
  script.src = url;

  let head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
}

let map = L.map('map').setView([33.858631, -118.279602], 7);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
