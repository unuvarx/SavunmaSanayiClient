import React, { useState } from "react";
import styles from "@/components/carousel/carousel.module.scss";

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleRadioChange = (event) => {
    console.log();
    setActiveItem(Number(event.target.value));
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.container}>
        <input
          value={1}
          checked={activeItem === 1}
          onChange={handleRadioChange}
          type="radio"
          name="slider"
          id={styles.item1}
        />
        <input
          value={2}
          checked={activeItem === 2}
          onChange={handleRadioChange}
          type="radio"
          name="slider"
          id={styles.item2}
        />
        <input
          value={3}
          checked={activeItem === 3}
          onChange={handleRadioChange}
          type="radio"
          name="slider"
          id={styles.item3}
        />
        <div className={styles.cards}>
          <label
            className={styles.card}
            htmlFor={styles.item1}
            id={styles.song1}
          >
            <img src="/images/carousel1.png" alt="song" />
            <div className={styles.btn}>
              <span>500'ü aşkın otonom sürüşe sahip 100% çelik zırhlı tank.</span>
            </div>
          </label>
          <label
            className={styles.card}
            htmlFor={styles.item2}
            id={styles.song2}
            >
            <img src="/images/carousel2.png" alt="song" />
            <div className={styles.btn}>
              <span>250 Roketatar, 50 Uçaksavar, 41 Askeri donanıma sahip yolcu helikopteri.</span>
            </div>
          </label>
          <label
            className={styles.card}
            htmlFor={styles.item3}
            id={styles.song3}
            >
            <img src="/images/carousel3.png" alt="song" />
            <div className={styles.btn}>
              <span>Arazi farketmeksizin yol katedebilen paletli ve tekerlekli kamyonetler.</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
