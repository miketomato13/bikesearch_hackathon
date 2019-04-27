export const parseGeoJson = data => {
  if (!data.length) return;
  const parsedData = data.map(station => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [station.longitude, station.latitude]
    },
    properties: {
      id: station.id,
      name: station.name,
      address: `${station.address}`
    }
  }));
  return {
    type: "FeatureCollection",
    features: parsedData
  };
};

export const geolocationOptions = {
  enabledHighAccuracy: true,
  maximumAge: 15000,
  timeout: 10000
};

export const locationLayers = {
  id: "locations",
  type: "symbol",
  source: "locations",
  layout: { 'icon-image':'bicycle-15', 'icon-allow-overlap': true}
};

// icon_badge