import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { API_KEY } from "./config";
import {
  parseGeoJson,
  geolocationOptions,
  locationLayers
} from "./MapUtilities";

class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = API_KEY;
    const mapOptions = {
      container: this.mapContainer,
      style: "mapbox://styles/jordanmarcr/cjuzpsa3w0pz41fs382nghi20",
      zoom: 11,
      center: [-80.1748, 25.7864],
    };
    this.createMap(mapOptions, geolocationOptions);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.currentLocation !== nextProps.currentLocation;
  }

  componentDidUpdate() {
    const { lng, lat } = this.props.currentLocation;
    this.props.currentLocation && this.flyTo({ lng, lat });
  }

  createMap = (mapOptions, geolocationOptions) => {
    this.map = new mapboxgl.Map(mapOptions);
    const map = this.map;
    let { locations } = this.props;
    locations = locations.filter( item => {
      return item.name !== "5 - Demo CycloShare  Lab";
    })
    const parsedLocations = parseGeoJson(locations);

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: geolocationOptions,
        trackUserLocation: true
      })
    );
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");
    map.on("load", _ => {
      map.addSource("locations", { type: "geojson", data: parsedLocations });
      map.addLayer(locationLayers);
      map.on("moveend", _ => this.fetchLocations());
      map.on("click", "locations", e => {
        const { properties, geometry } = e.features[0];
        const coordinates = geometry.coordinates.slice();
        const { name, free_bikes } = properties;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        map.flyTo({center: coordinates, speed: 0.3, zoom: 14});
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            `<div class="pop">
              <p>${name}</p>
              <p>Available: ${free_bikes}</p>
            </div>`
          )
          .addTo(map);
      });
    });
  };

  fetchLocations = async () => {
    const map = this.map;
    let { locations } = this.props;
    locations = locations.filter( item => {
      return item.name !== "5 - Demo CycloShare  Lab";
    })
    const parsedLocations = parseGeoJson(locations);
    map.getSource("locations").setData(parsedLocations);
  };

  flyTo = ({ lng, lat }) => {
    this.map.flyTo({
      center: [lng, lat],
      bearing: 0,
      zoom: 14,
      speed: 0.3,
      pitch: 20,
    });
  };

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div id="map" ref={el => (this.mapContainer = el)} />;
  }
}

export default Map;
