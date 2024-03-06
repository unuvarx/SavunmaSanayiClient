import Layout from "@/lib/layout";
import React from "react";
import styles from "@/pages/connect/connect.module.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { IoMail } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import MapWrapper from "@/components/map/dynamicMap";

export default function Connect() {
  const location = {
    lat: 37.04602836518141,
    lng: 35.391660471140504,
    title: "ATÜ",
    title2: "Gültepe, 01250 Sarıçam/Adana"
  };

  return (
    <Layout>
      <div className={styles.connectContainer}>
        <div className={styles.adressesContainer}>
          <span className={styles.title}>İletişim Bilgileri</span>
          <div className={styles.adresses}>
            <div>
              <label htmlFor="">
                <FaMapMarkerAlt />
              </label>
              <span>
                Macun Mahallesi, Erciyes İşyerleri Sitesi 200. Cadde No: 26–
                06105 Yenimahalle / Ankara
              </span>
            </div>
            <div>
              <label htmlFor="">
                <FaPhoneAlt />
              </label>
              <span> 05365813398 </span>
            </div>
            <div>
              <label htmlFor="">
                <IoMail />
              </label>
              <span> sefaunuvar2002 @gmail.com </span>
            </div>
            <div>
              <label htmlFor="">
                <IoIosTime />
              </label>
              <span> Pzt - Cum: 08: 30– 18: 30 Cmt: 08: 30– 15: 30 </span>
            </div>
          </div>
        </div>
        <div className={styles.inputsContainer}>
          <span className={styles.title}>Sizinle İletişime Geçelim</span>
          <div className={styles.inputs}>
            <div>
              <label htmlFor="">
                Ad Soyad <span> * </span>
              </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">
                Telefon <span> * </span>
              </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">
                E-Mail <span> * </span>
              </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor=""> Konu </label> <input type="text" />
            </div>
            <div className={styles.textarea}>
              <label htmlFor=""> Mesaj </label> <textarea id=""> </textarea>
            </div>
          </div>
          <button>Gönder</button>
        </div>
      </div>
      <div>
        <MapWrapper location={location} />
      </div>
    </Layout>
  );
}
