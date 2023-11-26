import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import style from './Map.module.css';

const Map = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyDBz5bp3kALxN3ImD6iktXjZFR89oexaB4', 
      version: 'weekly',
    });

    loader.load().then(() => {
      const mapDiv = document.getElementById('map');
      const map = new window.google.maps.Map(mapDiv, {
        center: { lat: -31.4155148, lng: -64.1821355 },
        zoom: 18,
      });
    });
  }, []);

  return (
    <div id="map" className={style.MapContainer} />
  ) 
  
};

export default Map;