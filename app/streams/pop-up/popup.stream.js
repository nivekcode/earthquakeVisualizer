let popup$ = mouseMoves$.flatMap((latlng) => {
    return quakes$.filter((quake) => {
      return quake.lat.toFixed(1) === latlng.lat.toFixed(1) && quake.lng.toFixed(1) === latlng.lng.toFixed(1);
    })
});
