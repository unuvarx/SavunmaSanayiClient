import React from "react";
import styles from "@/components/new/new.module.scss";
export default function New({month, year, title, description, imageUrl, url}) {
    const maxDescriptionLength = 200; // Maksimum karakter uzunluğu

  // Eğer açıklama uzunluğu, maksimum uzunluğu aşıyorsa kırp ve "devamı..." ekleyerek yeni bir açıklama oluştur
  const shortDescription = description.length > maxDescriptionLength
    ? `${description.slice(0, maxDescriptionLength)}...`
    : description;

  return (
    <div className={styles.media}>
      <div className={styles.img}>
        <img src={`images${imageUrl}`} alt="" />
        <div className={styles.date}>
          <span>{month}</span>
          <span>{year}</span>
        </div>
      </div>
      <span className={styles.title}>
        {title}
      </span>
      <span className={styles.description}>
      {shortDescription}
      </span>
      <a href={url}>Daha Fazlası</a>
    </div>
  );
}
