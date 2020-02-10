import React from 'react';
import Map from 'pigeon-maps';
import PropTypes from 'prop-types';

const MyMap = ({ centerLatitude, centerLongitude }) => (
  <Map
    center={[centerLatitude, centerLongitude]}
    defaultWidth={700}
    height={450}
    minZoom={1}
    maxZoom={8}
    zoom={1}
  />
);

MyMap.propTypes = {
  centerLatitude: PropTypes.number,
  centerLongitude: PropTypes.number,
};

MyMap.defaultProps = {
  centerLatitude: 0,
  centerLongitude: 0,
};

export default MyMap;
