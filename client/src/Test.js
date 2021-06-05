import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Test() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
    mapboxApiAccessToken="pk.eyJ1IjoiY3J5cHRvZ3V5MjAiLCJhIjoiY2twaWl1aGtuMDEzdTJvb3VvMnoybTBscSJ9.29l8nnju0u6REmZWFF-prA"
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Test;