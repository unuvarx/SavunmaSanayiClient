import React, { useEffect, useRef } from "react";

import styles from "@/components/productCard/productCard.module.scss";

import { gsap, Power1 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductCard({
  imageUrl,
  imageIsRight,
  title,
  description,
}) {
  const productRef = useRef(null);

  useEffect(() => {
    let coordinate = 0;
    if (imageIsRight) {
      coordinate = 500;
    }
    else {
      coordinate = -500;
    }
    gsap.from(productRef.current, {
      x: coordinate,
      duration: 0.2,
      opacity: 0,
      ease: Power1.easeInOut,
      scrollTrigger: {
        trigger: productRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className={styles.productCard} ref={productRef}>
      <img
        src={`/images${imageUrl}`}
        alt=""
        style={imageIsRight ? { order: 2 } : { order: 1 }}
      />
      <div style={imageIsRight ? { order: 1 } : { order: 2 }}>
        <span className={styles.title}>{title}</span>
        <span className={styles.desc}>{description}</span>
        <button>Ürün Detay</button>
      </div>
    </div>
  );
}
