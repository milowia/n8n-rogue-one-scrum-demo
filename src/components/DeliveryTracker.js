import React, { useEffect, useState } from 'react';
import { Map, Marker } from 'react-map-gl';
import { updateCourierLocation, notifyMerchant } from '../services/api';

const DeliveryTracker = ({ courierId }) => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const handleLocationUpdate = (newLocation) => {
      setLocation(newLocation);
      updateCourierLocation(courierId, newLocation);
    };

    navigator.geolocation.watchPosition((position) => {
      const newLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      handleLocationUpdate(newLocation);
    });
  }, [courierId]);

  return (
    <Map initialViewState={{ latitude: location.latitude, longitude: location.longitude, zoom: 14 }}>
      <Marker latitude={location.latitude} longitude={location.longitude} />
    </Map>
  );
};

export default DeliveryTracker;
