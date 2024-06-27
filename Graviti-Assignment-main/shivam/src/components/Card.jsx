import React from "react";
import GoogleMapReact from "google-map-react";
import SurfaceElevationRested from "./SurfaceElevationRested";
import DestinationIcon from "./DestinationIcon";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "", map }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <SurfaceElevationRested
        surfaceElevationRestedWidth="100%"
        surfaceElevationRestedBoxShadow="0px 16px 32px rgba(30, 42, 50, 0.08)"
        surfaceElevationRestedHeight="100%"
        surfaceElevationRestedPosition="absolute"
        surfaceElevationRestedTop="0%"
        surfaceElevationRestedRight="0%"
        surfaceElevationRestedBottom="0%"
        surfaceElevationRestedLeft="0%"
      />
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ maps }) => {
            if (map) {
              const directionsService = new maps.DirectionsService();
              const directionsRenderer = new maps.DirectionsRenderer();
              directionsRenderer.setMap(map);

              const request = {
                origin: { lat: 59.95, lng: 30.33 }, // Example coordinates
                destination: { lat: 59.95, lng: 30.34 }, // Example coordinates
                travelMode: maps.TravelMode.DRIVING,
              };

              directionsService.route(request, (result, status) => {
                if (status === "OK") {
                  directionsRenderer.setDirections(result);
                } else {
                  console.error("Error fetching directions:", status);
                }
              });
            }
          }}
        />
      </div>
      {/* <img className={styles.originIcon} alt="" src="/origin-icon.svg" /> */}
      <DestinationIcon
        room="/room1.svg"
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
      <img className={styles.stopIcon} alt="" src="/stop-icon.svg" />
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  map: PropTypes.object, // Ensure map prop is defined and an object
};

export default Card;
