import React, { useEffect } from "react";
import styles from "@/components/slider/slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.container} ${styles.rounded}`}>
            <div className={styles.slider}>
              <div className={styles.logos}>
                <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="" />
              </div>
              <div className={styles.logos}>
                <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="" />
                <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




