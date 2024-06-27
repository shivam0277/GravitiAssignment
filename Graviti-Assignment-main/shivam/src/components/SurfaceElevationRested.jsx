import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SurfaceElevationRested.module.css";

const SurfaceElevationRested = ({
  className = "",
  surfaceElevationRestedWidth,
  surfaceElevationRestedBoxShadow,
  surfaceElevationRestedHeight,
  surfaceElevationRestedPosition,
  surfaceElevationRestedTop,
  surfaceElevationRestedRight,
  surfaceElevationRestedBottom,
  surfaceElevationRestedLeft,
}) => {
  const surfaceElevationRestedStyle = useMemo(() => {
    return {
      width: surfaceElevationRestedWidth,
      boxShadow: surfaceElevationRestedBoxShadow,
      height: surfaceElevationRestedHeight,
      position: surfaceElevationRestedPosition,
      top: surfaceElevationRestedTop,
      right: surfaceElevationRestedRight,
      bottom: surfaceElevationRestedBottom,
      left: surfaceElevationRestedLeft,
    };
  }, [
    surfaceElevationRestedWidth,
    surfaceElevationRestedBoxShadow,
    surfaceElevationRestedHeight,
    surfaceElevationRestedPosition,
    surfaceElevationRestedTop,
    surfaceElevationRestedRight,
    surfaceElevationRestedBottom,
    surfaceElevationRestedLeft,
  ]);

  return (
    <div
      className={[styles.surfaceElevationRested, className].join(" ")}
      style={surfaceElevationRestedStyle}
    />
  );
};

SurfaceElevationRested.propTypes = {
  className: PropTypes.string,

  /** Style props */
  surfaceElevationRestedWidth: PropTypes.any,
  surfaceElevationRestedBoxShadow: PropTypes.any,
  surfaceElevationRestedHeight: PropTypes.any,
  surfaceElevationRestedPosition: PropTypes.any,
  surfaceElevationRestedTop: PropTypes.any,
  surfaceElevationRestedRight: PropTypes.any,
  surfaceElevationRestedBottom: PropTypes.any,
  surfaceElevationRestedLeft: PropTypes.any,
};

export default SurfaceElevationRested;
