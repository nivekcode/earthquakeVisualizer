let quakes$ = features$
  .distinct((quake) => quake.properties.code)
  .map((quake) => ({
    lat: quake.geometry.coordinates[1],
    lng: quake.geometry.coordinates[0],
    size: quake.properties.mag * 10000,
    place: quake.properties.place,
    type: quake.properties.type,
    time: quake.properties.time
  })
);
