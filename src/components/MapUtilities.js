export const parseGeoJson = data => {
  if (!data.length) return;
  const parsedData = data.map(location => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [location.longitude, location.latitude]
    },
    properties: {
      id: location.id,
      name: location.name,
      free_bikes: `${location.free_bikes}`
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