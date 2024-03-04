import Layout from "@/lib/layout";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/pages/homepage/homepage.module.scss";
import Spinner from "@/components/spinner";
import Carousel from "@/components/carousel";
import { gsap, Power1 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import DescriptionCarousel from "@/components/descriptionCarousel";
import Slider from "@/components/slider";

gsap.registerPlugin(ScrollTrigger);

export default function Anasayfa() {
  const ataturkRef = useRef(null);
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const navbarRef = useRef(null);
  const wrapperRef = useRef(null);


  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: 50,
      duration: 0.5,
      opacity: 0,
      ease: Power1.easeout,
      scrollTrigger: {
        trigger: ataturkRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 2,
      },
    });

    gsap.from(aboutLeftRef.current, {
      x: -500,
      duration: 0.5,
      opacity: 0,
      ease: Power1.easeInOut,
      scrollTrigger: {
        trigger: aboutLeftRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 2,
      },
    });

    gsap.from(aboutRightRef.current, {
      x: 500,
      duration: 0.5,
      opacity: 0,
      ease: Power1.easeInOut,
      scrollTrigger: {
        trigger: aboutRightRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 2,
      },
    });
    gsap.from(wrapperRef.current, {
      y: 250,
      duration: 0.5,
      opacity: 0,
      ease: Power1.easeInOut,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 2,
      },
    });
  }, []);

  return (
    <Layout>
      <div className={styles.homeContainer} ref={navbarRef}>
        <div className={styles.ataturk} ref={ataturkRef}>
          <div className={styles.container}>
            <img
              className={styles.ataturkImg}
              src="/images/ataturk.jpg"
              alt=""
            />
            <div>
              <span>
                ''...measures that have been taken to further develop and expand
                our war industry must continue and special consideration needs
                to be given to military needs in our industrialization
                efforts...''
              </span>
              <img src="/images/ataturkimza.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.descCarousel}>
          <div className={styles.title}>
            Öne Çıkan Ürünler
          </div>
          <DescriptionCarousel />
        </div>
        
        <div className={styles.about}>
          <img
            ref={aboutLeftRef}
            className={styles.soldier}
            src="/images/about1.jpg"
            alt=""
          />
          <div ref={aboutRightRef}>
            <span className={styles.title}> Hakkımızda </span>
            <label htmlFor="">
              <img src="/images/bullet.png" alt="" />
              <span> Amet consectetur adipisicing elit.Cum, at. </span>
            </label>
            <label htmlFor="">
              <img src="/images/bullet.png" alt="" />
              <span> Lorem ipsum dolor elit.Cum, at. </span>
            </label>
            <label htmlFor="">
              <img src="/images/bullet.png" alt="" />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </label>
            <label htmlFor="">
              <img src="/images/bullet.png" alt="" />
              <span> Lorem ipsum dolor sit adipisicing elit. </span>
            </label>
            <label htmlFor="">
              <img src="/images/bullet.png" alt="" />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </label>
            <label htmlFor="">
              <img src="/images/bullet.png" alt="" />
              <span> Ipsum dolor sit adipisicing elit.Cum, at. </span>
            </label>
            <label htmlFor="">
              <img src="/images/bullet.png" alt="" />
              <span> Consectetur adipisicing elit.Cum, at. </span>
            </label>
            <button> Daha Fazla </button>
          </div>
        </div>
        <div className={styles.carouselCont}>
          <div className={styles.title}> Basında Biz </div>
          <div className={styles.carousel}>
            <Carousel />
          </div>
        </div>
        <div className={styles.wrapper} ref={wrapperRef}>
          <div>
            <img src="/images/musteri-memnuniyeti.png" alt="" />
            <span>GÜVENİLİRLİK</span>
            <label htmlFor="">İnsanlara güven aşılıyoruz.</label>
          </div>
          <div>
            <img src="/images/tecrube.png" alt="" />
            <span>TECRÜBE</span>
            <label htmlFor="">50 yıllık tecrübemizle bu işin en iyisiyiz.</label>
          </div>
          <div>
            <img src="/images/checked.png" alt="" />
            <span>TEST</span>
            <label htmlFor="">Geliştirilen ürünlerimiz birçok test aşamasından geçmektedir.</label>
          </div>
          <div>
            <img src="/images/mutlu-musteriler.png" alt="" />
            <span>MEMNUNİYET</span>
            <label htmlFor="">Bize gelenlerde 100% memnuniyet garantisi veriyoruz.</label>
          </div>
        </div>
        <div className={styles.partners}>
          <div className={styles.title}>Partnerler</div>
          <Slider />
        </div>
        <div className={styles.connect}>
           <img src="/images/connect.jpg" alt="" />
           <div className={styles.context}>
            <span>Bu formu doldurun ve 24 saat içinde sizinle iletişim kuralım!</span>
              <div>
                <input type="text" placeholder="Ad" />
                <input type="text" placeholder="Soyad" />
                <input type="text" placeholder="Tel" />
                <input type="text" placeholder="E-Posta" />
                <input type="text" placeholder="Ülke" />
                <input type="text" placeholder="Şehir" />
                <textarea placeholder="Mesajınız" id="" ></textarea>
              </div>
              <button>Gönder</button>
              
           </div>
        </div>
      </div>
    </Layout>
  );
}
