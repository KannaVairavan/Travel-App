import React, { useState }  from 'react';
import ReactMapGL from 'react-map-gl';

function Map (){
    const [viewport, setViewport] = useState({
      latitude: -1.9444,
      longitude: 30.0616,
      zoom: 7.8,
      bearing: 0,
      pitch: 0,
      });
      let token = "pk.eyJ1IjoiYXNobGV5aGF5amluIiwiYSI6ImNrcDR4ZTRhMzA1Y3gydm53NHd6azlmNHQifQ.I6InX4UK_K8vaydLp7x_2A";


      return (
        <ReactMapGL
          {...viewport}
          width="1000px"
          height="1500px"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={nextViewport => setViewport(nextViewport)}
          mapboxApiAccessToken={token}
          
        />
      );
}
    

export default Map;