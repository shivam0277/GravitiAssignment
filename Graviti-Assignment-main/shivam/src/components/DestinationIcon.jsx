import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./DestinationIcon.module.css";

const DestinationIcon = ({
  className = "",
  room,
  destinationIconWidth,
  destinationIconHeight,
  destinationIconPosition,
  destinationIconTop,
  destinationIconLeft,
  destinationIconRight,
  destinationIconBottom,
  roomIconHeight,
  roomIconTop,
  dTop,
  dFontSize,
}) => {
  const destinationIconStyle = useMemo(() => {
    return {
      width: destinationIconWidth,
      height: destinationIconHeight,
      position: destinationIconPosition,
      top: destinationIconTop,
      left: destinationIconLeft,
      right: destinationIconRight,
      bottom: destinationIconBottom,
    };
  }, [
    destinationIconWidth,
    destinationIconHeight,
    destinationIconPosition,
    destinationIconTop,
    destinationIconLeft,
    destinationIconRight,
    destinationIconBottom,
  ]);

  const roomIconStyle = useMemo(() => {
    return {
      height: roomIconHeight,
      top: roomIconTop,
    };
  }, [roomIconHeight, roomIconTop]);

  const dStyle = useMemo(() => {
    return {
      top: dTop,
      fontSize: dFontSize,
    };
  }, [dTop, dFontSize]);

  return (
    <div
      className={[styles.destinationIcon, className].join(" ")}
      style={destinationIconStyle}
    >
      <img
        className={styles.roomIcon}
        alt=""
        src={room}
        style={roomIconStyle}
      />
      <b className={styles.d} style={dStyle}>
        D
      </b>
    </div>
  );
};

DestinationIcon.propTypes = {
  className: PropTypes.string,
  room: PropTypes.string,

  /** Style props */
  destinationIconWidth: PropTypes.any,
  destinationIconHeight: PropTypes.any,
  destinationIconPosition: PropTypes.any,
  destinationIconTop: PropTypes.any,
  destinationIconLeft: PropTypes.any,
  destinationIconRight: PropTypes.any,
  destinationIconBottom: PropTypes.any,
  roomIconHeight: PropTypes.any,
  roomIconTop: PropTypes.any,
  dTop: PropTypes.any,
  dFontSize: PropTypes.any,
};

export default DestinationIcon;
