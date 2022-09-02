// import { useMemo } from 'react'
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

// const contact = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyDpXrziVeh8EvJY7NyjVVRK3AYpvDthVb",
//   })
//   if(isLoaded) return <div>Loading...</div>
//   return <Map />
// }

// const Map = () => {
//   const center = useMemo(() => ({ lat: 44, lng: -80}), [])
//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName='w-full h-screen'>
//       <Marker position={center} />
//     </GoogleMap>
//   )
// }

// export default contact

import React, {useMemo} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Map from '../components/Map'



function contact() {
  // const center = {
  //   lat: 14.355867,
  //   lng: 120.980956
  // };
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "AIzaSyDrWTz7OGHRKCrBycwEHVB77LzgMX08jDA"
  // })

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  // const anotherFunction = () => {
  //   return isLoaded ? (
  //     <Map onLoad={onLoad} onUnmount={onUnmount} />
  //   ) : <></>
  // }

  return <>
    <p>Home / Contact Us</p>
    <h2 className='title text-center'>Contact</h2>
    <Map />
  </>
  // return isLoaded ? (
  //     <Map onLoad={onLoad} onUnmount={onUnmount} />
  // ) : <></>
}

// const Map = ({onLoad, onUnmount}) => {
//   const center = {
//     lat: 14.355867,
//     lng: 120.980956
//   };
//   return(
//     <GoogleMap
//         mapContainerClassName='w-full h-screen'
//         center={center}
//         zoom={10}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//   )
// }

export default React.memo(contact)