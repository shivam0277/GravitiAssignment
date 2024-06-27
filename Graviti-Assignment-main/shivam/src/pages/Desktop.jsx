import React, { useState, useEffect } from 'react';
import DestinationIcon from '../components/DestinationIcon';
import MonthlyAmountInfo from '../components/MonthlyAmountInfo';
import Card from '../components/Card';
import styles from './Desktop.module.css';

const Desktop = () => {
  const [origin, setOrigin] = useState('');
  const [stop, setStop] = useState('');
  const [destination, setDestination] = useState('');
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    googleMapsScript.onload = () => {
      const mapInstance = new window.google.maps.Map(document.createElement('div'), {
        center: { lat: 20.5937, lng: 78.9629 }, // Centering India
        zoom: 5,
      });
      setMap(mapInstance);
    };
    document.body.appendChild(googleMapsScript);

    return () => {
      document.body.removeChild(googleMapsScript);
    };
  }, []);

  const handleCalculate = () => {
    const cities = [origin, stop, destination];
    if (cities.some(city => city === '')) {
      alert('Please enter all locations.');
      return;
    }

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: cities.slice(1),
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === 'OK') {
          // Plotting route on the map
          const directionsService = new window.google.maps.DirectionsService();
          const directionsRenderer = new window.google.maps.DirectionsRenderer();
          directionsRenderer.setMap(map);

          const request = {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          };

          directionsService.route(request, (result, status) => {
            if (status === 'OK') {
              directionsRenderer.setDirections(result);
            } else {
              console.error('Error fetching directions:', status);
            }
          });
        } else {
          console.error('Error calculating distance:', status);
        }
      }
    );
  };

  return (
    <div className={styles.desktop1}>
      <img className={styles.gravitiLogo1} alt="" src="/graviti-logo-1@2x.png" />
      <div className={styles.title}>
        <div className={styles.typographySubtitleLgSemiContainer}>
          <span>Let's calculate from Google maps</span>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.origin}>Origin</div>
        <input
          className={styles.locationInput}
          value={origin}
          onChange={e => setOrigin(e.target.value)}
        />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.groupChild} />
          <div className={styles.origin}>Stop</div>
          <input
            className={styles.locationInput}
            value={stop}
            onChange={e => setStop(e.target.value)}
          />
        </div>
        <div className={styles.ellipseDiv} />
        <div className={styles.addAnotherStopParent}>
          <div className={styles.addAnotherStop}>Add another stop</div>
          <img className={styles.addAltIcon} alt="" src="/addalt.svg" />
        </div>
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.groupContainer}>
          <div className={styles.groupChild} />
          <div className={styles.origin}>Destination</div>
          <input
            className={styles.locationInput}
            value={destination}
            onChange={e => setDestination(e.target.value)}
          />
        </div>
        <DestinationIcon
          room="/room.svg"
          destinationIconWidth="3.93%"
          destinationIconHeight="5.68%"
          destinationIconPosition="absolute"
          destinationIconTop="2.15%"
          destinationIconLeft="48.75%"
          destinationIconRight="47.32%"
          destinationIconBottom="92.17%"
          roomIconHeight="99.66%"
          roomIconTop="0.34%"
          dTop="10.34%"
          dFontSize="13px"
        />
      </div>
      <MonthlyAmountInfo />
      <div className={styles.cta}>
        <div className={styles.buttonLgNeutralWhite} onClick={handleCalculate}>
          Calculate
        </div>
      </div>
      <Card className={styles.card} map={map} />
    </div>
  );
};

export default Desktop;

