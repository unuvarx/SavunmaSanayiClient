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
import { CiMail } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.title}> dilarasenel.com </span>
      <div className={styles.footerPages}>
        <a href="/#"> Anasayfa </a> <a href="/#"> Hakkımızda </a>
        <a href="/#"> Ürünler </a> <a href="/#"> Partnerlerimiz </a>
        <a href="/#"> Basında Biz </a> <a href="/#"> Sertifikalarımız </a>
        <a href="/#"> Bize Ulaşın </a>
      </div>
      <div className={styles.icons}>
        <div>
          <label> BASINDA BİZ </label>
          <span className={styles.div}>
            <span> as </span>
            <a href="/#">IDEF’ 23 16’ ncı Uluslararası Savunma Sanayii Fuarı</a>
          </span>
          <span className={styles.div}>
            <span> as </span>
            <a href="/#">IDEF’ 23 16’ ncı Uluslararası Savunma Sanayii Fuarı</a>
          </span>
        </div>
        <div>
          <label> BİZE ULAŞIN </label>
          <span className={`${styles.div} ${styles.div2}`}>
            <FaMapMarkerAlt size={20} />
            <span>
              Macun Mahallesi, Erciyes İşyerleri Sitesi 200. Cadde No:26
              Yenimahalle / Ankara
            </span>
          </span>
          <span className={`${styles.div} ${styles.div2}`}>
            <FaPhoneAlt size={15} /> <span>+90 05365813398 </span>
          </span>
          <span className={`${styles.div} ${styles.div2}`}>
            <IoMail size={17} /> <span>sefaunuvar2002 @gmail.com </span>
          </span>
          <span className={`${styles.div} ${styles.div2}`}>
            <IoIosTime size={20} />
            <span>Pzt-Cum: 08:30–18:30 Cmt: 08:30–15:30</span>
          </span>
        </div>
      </div>
      <div className={styles.hr}> </div>
      <div className={styles.foot}>
        <span>
          Copyright© <label htmlFor=""> Savunma Sanayi </label> 2023 tüm hakları
          saklıdır.
        </span>
      </div>
    </div>
  );
}
