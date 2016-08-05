quakes$.subscribe((quake) => {
  L.circle([quake.lat, quake.lng], quake.size).addTo(map);
})
