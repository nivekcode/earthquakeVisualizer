let QUAKE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp';

let earthQuakeData$ = Rx.DOM.jsonpRequest({
  url: QUAKE_URL,
  jsonpCallback: 'eqfeed_callback'
})
