import React, {useState} from "react";
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import "./style.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function MapGl() {
  const [viewport, setViewport] = useState({
    width: 1500,
    height: 1000,
    latitude: 38.00,
    longitude: -97.00,
    zoom: 3
  });

  return (
    <div className="centerPhoto">
    <ReactMapGL
      mapboxApiAccessToken="pk.eyJ1IjoiYXNobGV5aGF5amluIiwiYSI6ImNrcDR4ZTRhMzA1Y3gydm53NHd6azlmNHQifQ.I6InX4UK_K8vaydLp7x_2A"
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
    </div>
  );
}

export default MapGl;