import React, { useState, useEffect } from "react";
import styles from "@/components/descriptionCarousel/descriptionCarousel.module.scss";

export default function DescriptionCarousel() {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleThumbnailClick = (event, index) => {
    event.preventDefault();
    setSelectedSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Otomatik geçiş
      setSelectedSlide((prevSlide) => (prevSlide + 1) % 6);
    }, 5000);

    return () => clearInterval(intervalId); // Komponent temizlendiğinde interval'i temizle
  }, []); // Boş dependency array, komponentin ilk renderında bir kez çalışması için

  return (
    <div className={styles.descriptionCarousel}>
      <section>
        <div className={styles.container}>
          <div className={styles.carousel}>
            <input
              type="radio"
              name="slides"
              checked={selectedSlide === 1}
              onChange={() => setSelectedSlide(1)}
              id={`slide1`}
            />

            <input
              type="radio"
              name="slides"
              checked={selectedSlide === 2}
              onChange={() => setSelectedSlide(2)}
              id={`slide1`}
            />
            <input
              type="radio"
              name="slides"
              checked={selectedSlide === 3}
              onChange={() => setSelectedSlide(3)}
              id={`slide1`}
            />
            <ul className={styles.carouselSlides}>
              <li
                className={`${styles.carouselSlide} ${
                  selectedSlide === 1 ? styles.scrollable : ""
                }`}
              >
                <figure>
                  <div>
                    <img
                      src={`https://picsum.photos/id/1041/800/450?index=1`}
                      alt=""
                    />
                  </div>
                  <figcaption>
                   ccccccccccccc
                    <span className={styles.credit}> Photo: Tim Marshall </span>{" "}
                  </figcaption>
                </figure>
              </li>
              <li
                className={`${styles.carouselSlide} ${
                  selectedSlide === 2 ? styles.scrollable : ""
                }`}
              >
                <figure>
                  <div>
                    <img
                      src={`https://picsum.photos/id/1041/800/450?index=1`}
                      alt=""
                    />
                  </div>
                  <figcaption>
                    aaa
                    <span className={styles.credit}>
                      {" "}
                      Photo: Tim Marshall{" "}
                    </span>{" "}
                  </figcaption>
                </figure>
              </li>
              <li
                className={`${styles.carouselSlide} ${
                  selectedSlide === 3 ? styles.scrollable : ""
                }`}
              >
                <figure>
                  <div>
                    <img
                      src={`https://picsum.photos/id/1041/800/450?index=2`}
                      alt=""
                    />
                  </div>
                  <figcaption>
                    nbbbbbbb
                    <span className={styles.credit}>
                      {" "}
                      Photo: Tim Marshall{" "}
                    </span>{" "}
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul className={styles.carouselThumbnails}>
              <li>
                <label
                  htmlFor={`slide1`}
                  onClick={(event) => handleThumbnailClick(event, 1)}
                >
                  <img
                    src={`https://picsum.photos/id/1041/150/150?index=1`}
                    alt=""
                  />
                </label>
              </li>
              <li>
                <label
                  htmlFor={`slide2`}
                  onClick={(event) => handleThumbnailClick(event, 2)}
                >
                  <img
                    src={`https://picsum.photos/id/1041/150/150?index=2`}
                    alt=""
                  />
                </label>
              </li>
              <li>
                <label
                  htmlFor={`slide3`}
                  onClick={(event) => handleThumbnailClick(event, 3)}
                >
                  <img
                    src={`https://picsum.photos/id/1041/150/150?index=3`}
                    alt=""
                  />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
