import React from "react";
import styles from "./styles.module.scss";

function Index() {
  return (
    <div className={styles.lines__wrapper}>
      <svg
       version="1.1"
       id="home-anim"
       xmlns="http://www.w3.org/2000/svg"
       xmlnsXlink="http://www.w3.org/1999/xlink"
       x="0px"
       y="0px"
       viewBox="0 0 1820 1080"
       className={styles.svgElement} // Use className instead of inline styles
       xmlSpace="preserve"
      >
        <g className={styles.home}>
          <defs>
            <rect id="masque" y="0.4" width="1820" height="1080" />
          </defs>
          <clipPath id="cache">
            <use xlinkHref="#masque" style={{ overflow: "visible" }} />
          </clipPath>
          <g className={styles.light_blue}>
            <line x1="630.8" y1="894.3" x2="476.3" y2="1048.8" />
            <line x1="858.2" y1="823.9" x2="1012.7" y2="669.4" />
            <line x1="1066.9" y1="458.2" x2="912.4" y2="612.7" />
            <line x1="1294.3" y1="387.8" x2="1448.8" y2="233.3" />
            <line x1="1503" y1="22.1" x2="1348.5" y2="176.6" />
            <line x1="895.6" y1="1166.6" x2="1050.1" y2="1012.1" />
            <line x1="1104.3" y1="800.9" x2="949.8" y2="955.4" />
            <line x1="1331.7" y1="730.5" x2="1486.2" y2="576" />
            <line x1="1540.4" y1="364.8" x2="1385.9" y2="519.3" />
            <line x1="1767.8" y1="294.4" x2="1922.3" y2="139.9" />
            <line x1="1976.5" y1="-71.3" x2="1822" y2="83.2" />
            <line x1="1369.1" y1="1073.2" x2="1523.6" y2="918.7" />
            <line x1="1577.8" y1="707.5" x2="1423.3" y2="862" />
            <line x1="1805.2" y1="637.1" x2="1959.7" y2="482.6" />
            <line x1="1624" y1="1041.4" x2="1469.4" y2="1195.9" />
            <line x1="-134.7" y1="674.9" x2="19.8" y2="520.4" />
            <line x1="74" y1="309.2" x2="-80.5" y2="463.7" />
            <line x1="301.4" y1="238.8" x2="455.9" y2="84.3" />
            <line x1="510.1" y1="-126.9" x2="355.6" y2="27.6" />
            <line x1="-88.6" y1="1008.9" x2="65.9" y2="854.4" />
            <line x1="120.1" y1="643.1" x2="-34.4" y2="797.7" />
            <line x1="347.5" y1="572.8" x2="502" y2="418.3" />
            <line x1="556.2" y1="207.1" x2="401.7" y2="361.6" />
            <line x1="783.6" y1="136.7" x2="938.1" y2="-17.8" />
            <line x1="157.6" y1="985.8" x2="3" y2="1140.3" />
            <line x1="384.9" y1="915.5" x2="539.4" y2="760.9" />
            <line x1="593.6" y1="549.7" x2="439.1" y2="704.3" />
            <line x1="821" y1="479.4" x2="975.5" y2="324.9" />
            <line x1="1029.7" y1="113.6" x2="875.2" y2="268.2" />
            <line x1="1257.1" y1="43.3" x2="1411.6" y2="-111.2" />
          </g>
          <g className={styles.red}>{/* Other lines */}</g>
          <g className={styles.blue}>{/* Other lines */}</g>
        </g>
      </svg>
    </div>
  );
}

export default Index;
