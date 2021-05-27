import React, { useState }  from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map (){
    const [viewport, setViewport] = useState({
      latitude: 45.4211,
      longitude: -75.6903,
      zoom: 10,
      width:"100vw",
      height:"100vh",
      });

      let token = "pk.eyJ1IjoiYXNobGV5aGF5amluIiwiYSI6ImNrcDR4ZTRhMzA1Y3gydm53NHd6azlmNHQifQ.I6InX4UK_K8vaydLp7x_2A";

      return (
        <div>
        <ReactMapGL
          mapboxApiAccessToken={token}
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={newViewport => {
            setViewport(newViewport)
          }}
        />
        </div>
      );
}
    
