let mouseMoves$ = Rx.Observable.fromEvent(map, 'mousemove')
  .map((mouseMove) => {
    return {
    lat: mouseMove.latlng.lat,
    lng: mouseMove.latlng.lng
    }
  });
