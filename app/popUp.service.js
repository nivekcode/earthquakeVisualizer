let mouseMoves$ = Rx.Observable.fromEvent(map, 'click')
  .map((mouseMove) => {
    return {
    lat: mouseMove.latlng.lat,
    lng: mouseMove.latlng.lng
    }
  })
  .flatMap((latlng) => {
    return quakes$.filter((quake) => {
      return quake.lat.toFixed(1) === latlng.lat.toFixed(1) && quake.lng.toFixed(1) === latlng.lng.toFixed(1);
    })
  });

mouseMoves$.subscribe((event) => {
  console.log('ich logge', event);
  let latlng = {
    lat: event.lat,
    lng: event.lng
  }

  let date = new Date(1324339200000);
  let time = date.getHours() + ':' + date.getMinutes();

  L.popup()
    .setLatLng(latlng)
    .setContent('<p><h4>' + event.place + '</h4><ul><li>' + event.type + '</li><li>' + time + '</li></ul></p>')
    .openOn(map);
});
