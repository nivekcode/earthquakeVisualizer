let mouseMoves$ = Rx.Observable.fromEvent(map, 'click')
  .map((mouseMove) => {
    return {
    lat: mouseMove.latlng.lat,
    lng: mouseMove.latlng.lng
    }
  })
  .flatMap((latlng) => {
    return quakes$.filter((quake) => {
      return quake.lat.toFixed(1) === latlng.lat.toFixed(1) && quake.lng.toFixed(1) === quake.lng.toFixed(1);
    })
  });

mouseMoves$.subscribe((event) => {
  let latlng = {
    lat: event.lat,
    lng: event.lng
  }

  L.popup()
    .setLatLng(latlng)
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);
});
