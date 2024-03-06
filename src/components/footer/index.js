import React from "react";
import styles from "./footer.module.scss";
import { useRouter } from "next/router";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { IoMail } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.title}> tdsengineering.com </span>
      <div className={styles.footerPages}>
        <a href="/homepage"> Anasayfa </a>
        <a
          href="/about
    "
        >
          Hakkımızda
        </a>
        <a href="/products"> Ürünler </a>
        <a
          href="/partners
    "
        >
          Partnerlerimiz
        </a>
        <a href="/media"> Basında Biz </a>
        <a
          href="/certificates
    "
        >
          Sertifikalarımız
        </a>
        <a href="/connect"> Bize Ulaşın </a>
      </div>
      <div className={styles.icons}>
        <div>
          <label> BASINDA BİZ </label>
          <span className={styles.div}>
            <span> 01 / 02 / 2024 </span>
            <a href="/#">IDEF’ 23 16’ ncı Uluslararası Savunma Sanayii Fuarı</a>
          </span>
          <span className={styles.div}>
            <span> 01 / 02 / 2024 </span>
            <a href="/#">IDEF’ 23 16’ ncı Uluslararası Savunma Sanayii Fuarı</a>
          </span>
        </div>
        <div>
          <label> BİZE ULAŞIN </label>
          <span className={`${styles.div} ${styles.div2}`}>
            <label htmlFor="">
              <FaMapMarkerAlt size={15} />
            </label>
            <span>
              Macun Mahallesi, Erciyes İşyerleri Sitesi 200. Cadde No: 26
              Yenimahalle / Ankara
            </span>
          </span>
          <span className={`${styles.div} ${styles.div2}`}>
            <label htmlFor="">
              <FaPhoneAlt size={15} />
            </label>
            <span>+90 05365813398 </span>
          </span>
          <span className={`${styles.div} ${styles.div2}`}>
            <label htmlFor="">
              <IoMail size={15} />
            </label>
            <span>sefaunuvar2002 @gmail.com </span>
          </span>
          <span className={`${styles.div} ${styles.div2}`}>
            <label htmlFor="">
              <IoIosTime size={15} />
            </label>
            <span> Pzt - Cum: 08: 30– 18: 30 Cmt: 08: 30– 15: 30 </span>
          </span>
        </div>
        <div>
          <label> MEDYA </label>
          <span className={`${styles.div} ${styles.media}`}>
            <a href="" id={styles.wp}>
              <FaWhatsapp size={25} />
            </a>
            <a href="" id={styles.ig}>
              <FaInstagram size={25} />
            </a>
            <a href="" id={styles.x}>
              <LuTwitter size={25} />
            </a>
          </span>
        </div>
      </div>
      <div className={styles.hr}> </div>
      <div className={styles.foot}>
        <span>
          Copyright© <label htmlFor=""> tdsengineering.com </label> 2023 tüm
          hakları saklıdır.
        </span>
      </div>
    </div>
  );
}
