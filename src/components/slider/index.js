import React from "react";
import styles from "@/components/slider/slider.module.scss";

export default function Slider() {
    
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          <div className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
