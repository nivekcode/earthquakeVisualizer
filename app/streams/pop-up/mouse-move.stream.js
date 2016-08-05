let mouseMoves$ = Rx.Observable.fromEvent(map, 'click')
  .map((mouseMove) => {
    return {
    lat: mouseMove.latlng.lat,
    lng: mouseMove.latlng.lng
    }
  });
