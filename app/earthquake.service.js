let quakes = Rx.Observable.create((observer) => {
  //USGS decides that we must use this callback name
  window.eqfeed_callback = (response) => {
    observer.onNext(response);
    observer.onComplete();
  }
  loadJSONP(QUAKE_URL);
})
.flatMap((dataset) => {
  return Rx.Observable.from(dataset.features);
});

quakes.subscribe((quake) => {
  console.log(quake);
  let coords = quake.geometry.coordinates;
  let size = quake.properties.mag * 1000;

  L.circle([coords[1], coords[0]], size).addTo(map);
})
