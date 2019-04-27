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
      style: "mapbox://styles/mapbox/streets-v9",
      zoom: 10,
      center: [-80.2043, 25.803],
    };
    this.createMap(mapOptions, geolocationOptions);
    console.log(this.props)
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
    const { stations } = this.props;
    const parsedLocations = parseGeoJson(stations);
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
        const { name, address } = properties;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            `<div>
            <p>${name}</p>
            <p>Available:</p>
          </div>`
          )
          .addTo(map);
      });
    });
  };
  fetchLocations = async () => {
    const map = this.map;
    const { stations } = this.props;
    const parsedLocations = parseGeoJson(stations);
    map.getSource("locations").setData(parsedLocations);
  };
  flyTo = ({ lng, lat }) => {
    this.map.flyTo({
      center: [lng, lat],
      bearing: 0,
      zoom: 15,
      pitch: 20,
    });
  };
  componentWillUnmount() {
    this.map.remove();
  }
  render() {
    console.log(this.props.stations);
    return <div id="map" ref={el => (this.mapContainer = el)} />;
  }
}

export default Map;
