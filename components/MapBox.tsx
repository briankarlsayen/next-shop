import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';

function MapBox() {
  const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const markerLoc = {
    latitude: 14.594132106710395,
    longitude: 120.97038609141279,
    zoom: 14,
  };

  return (
    <div className='w-full h-full flex justify-center'>
      <ReactMapGl
        initialViewState={{ ...markerLoc }}
        style={{ width: '100%', height: 400 }}
        mapboxAccessToken={TOKEN}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      >
        <Marker {...markerLoc} />
      </ReactMapGl>
    </div>
  );
}

export default MapBox;
