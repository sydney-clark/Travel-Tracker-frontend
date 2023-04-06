import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'


const options = {
  zoomControlOptions: {
    position: google.maps.ControlPosition.RIGHT_CENTER // 'right-center' ,
    // ...otherOptions
  }
}

function Map ()  {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCdthSzlNXqn4a3hkKUi3d6JOvS_Wblfrk' // ,
    // ...otherOptions
  })

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    const onLoad = React.useCallback(
      function onLoad (mapInstance) {
        // do something with map Instance
      }
    )
    return <GoogleMap
      options={options}
      onLoad={onLoad}
    >
      {
        // ...Your map components
      }
    </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <Spinner />
}


export default Map
// GOOGLE MAP BOX
// <Box position="absolute" left={0} top={0} h="100%" w="100%">
//   <GoogleMap
//     center={center}
//     zoom={15}
//     mapContainerStyle={{ width: "100%", height: "100%" }}
//   >
//     {/* display pin drops */}
//   </GoogleMap>
// </Box>