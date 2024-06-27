import PropTypes from "prop-types";
import styles from "./MonthlyAmountInfo.module.css";

const MonthlyAmountInfo = ({ className = "" }) => {
  return (
    <div className={[styles.monthlyamountInfo, className].join(" ")}>
      <img className={styles.whiteBgIcon} alt="" src="/whitebg.svg" />
      <div className={styles.detail}>
        <img className={styles.grayBgIcon} alt="" src="/graybg.svg" />
        <div className={styles.breakdown}>
          <div className={styles.typographyCaptionHighemphContainer}>
            <span>{`The distance between `}</span>
            <b>Mumbai</b>
            <span>{` and `}</span>
            <b>{`Delhi `}</b>
            <span>{`via the seleted route is `}</span>
            <b>1,427 kms</b>
            <span>.</span>
          </div>
        </div>
      </div>
      <div className={styles.monthlyAmount}>
        <div className={styles.amount}>
          <b className={styles.typographyHeadingmediumLg}>1,427 kms</b>
        </div>
        <div className={styles.monthlyAmount1}>
          <b className={styles.typographyCaptionHighemphContainer}>Distance</b>
        </div>
      </div>
    </div>
  );
};

MonthlyAmountInfo.propTypes = {
  className: PropTypes.string,
};

export default MonthlyAmountInfo;
