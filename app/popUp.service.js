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
  let latlng = {
    lat: event.lat,
    lng: event.lng
  }

  let date = new Date(1324339200000);
  let time = convertToTimeString(date);

  L.popup()
    .setLatLng(latlng)
    .setContent('<p><h4>' + event.place + '</h4><ul><li>' + event.type + '</li><li>' + time + '</li></ul></p>')
    .openOn(map);
});

convertToTimeString = (date) => {
  let hoursString = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours();
  let minutesString = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();
  return hoursString + ':' + minutesString;
}
