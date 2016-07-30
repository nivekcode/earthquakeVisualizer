let QUAKE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp';

let earthQuakeData$ = Rx.DOM.jsonpRequest({
  url: QUAKE_URL,
  jsonpCallback: 'eqfeed_callback'
})

let quakes$ = Rx.Observable.from([1])
  //.interval(5000)
  .flatMap(() => earthQuakeData$)
  .retry(3)
  .flatMap((dataset) => {
    return Rx.Observable.from(dataset.response.features);
  })
  .distinct((quake) => quake.properties.code)
  .map((quake) => ({
    lat: quake.geometry.coordinates[1],
    lng: quake.geometry.coordinates[0],
    size: quake.properties.mag * 10000
  })
);

quakes$.subscribe((quake) => {
  L.circle([quake.lat, quake.lng], quake.size).addTo(map);
})
