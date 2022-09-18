import React, {useMemo} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
declare var process : {
  env: {
    NEXT_PUBLIC_GMAP_API_KEY: string
  }
}

const center = {
  lat: 14.239884,
  lng: 121.0595182
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GMap onLoad={onLoad} onUnmount={onUnmount} />
  ) : <></>
}

const GMap = ({onLoad, onUnmount}:any) => {
  return(
    <GoogleMap
        mapContainerClassName='w-full h-[45vh]'
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
  )
}

export default Map