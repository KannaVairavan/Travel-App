import React, {useState} from "react";
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import "./style.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function MapGl(props) {

   const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    latitude: 38.00,
    longitude: -97.00,
    zoom: 3
  });

  const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
  return (
    <div className="centerPhoto">
    <ReactMapGL
      mapboxApiAccessToken="pk.eyJ1IjoiYXNobGV5aGF5amluIiwiYSI6ImNrcDR4ZTRhMzA1Y3gydm53NHd6azlmNHQifQ.I6InX4UK_K8vaydLp7x_2A"
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}>
      (
        {/* <Marker
        
        longitude={props.coords.lon}
        latitude={props.coords.lat}>
          <svg
        height={10}
        viewBox="0 0 24 24"
        // style={{
        //   ...pinStyle,
        //   transform: `translate(${-size / 2}px,${-size}px)`
        // }}
        >
        <path d={ICON} />
      </svg>
        </Marker> */}
      
      
      {/* )} */}
    </ReactMapGL>

    </div>
  );

}

export default MapGl;