import Layout from "@/lib/layout";
import React, { useState, useEffect } from "react";
import styles from "@/pages/anasayfa/anasayfa.module.scss";
import Spinner from "@/components/spinner";
import Carousel from "@/components/carousel";

export default function Anasayfa() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş asenkron yükleme işlemi
    const fakeAsyncRequest = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fakeAsyncRequest();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Layout>
          <div className={styles.homeContainer}>
            <div className={styles.ataturk}>
              <div className={styles.container}>
                <img
                  className={styles.ataturkImg}
                  src="/images/ataturk.jpg"
                  alt=""
                />
                <div>
                  <span>
                    ''...measures that have been taken to further develop and
                    expand our war industry must continue and special
                    consideration needs to be given to military needs in our
                    industrialization efforts...''
                  </span>
                  <img src="/images/ataturkimza.png" alt="" />
                </div>
              </div>
            </div>

            <div className={styles.about}>
              <img className={styles.soldier} src="/images/about1.jpg" alt="" />
              <div>
                <span className={styles.title}>Hakkımızda</span>
                <label htmlFor="">
                  <img src="/images/bullet.png" alt="" />
                  <span>Amet consectetur adipisicing elit. Cum, at.</span>
                </label>
                <label htmlFor="">
                  <img src="/images/bullet.png" alt="" />
                  <span>Lorem ipsum dolor elit. Cum, at.</span>
                </label>
                <label htmlFor="">
                  <img src="/images/bullet.png" alt="" />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </label>
                <label htmlFor="">
                  <img src="/images/bullet.png" alt="" />
                  <span>Lorem ipsum dolor sit adipisicing elit.</span>
                </label>
                <label htmlFor="">
                  <img src="/images/bullet.png" alt="" />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </label>
                <label htmlFor="">
                  <img src="/images/bullet.png" alt="" />
                  <span>Ipsum dolor sit adipisicing elit. Cum, at.</span>
                </label>
                <label htmlFor="">
                  <img src="/images/bullet.png" alt="" />
                  <span>Consectetur adipisicing elit. Cum, at.</span>
                </label>
                <button>Daha Fazla</button>
              </div>
            </div>
            <div className={styles.carouselCont}>
              <div className={styles.title}>
                Ürünlerimiz
              </div>
              <div className={styles.carousel}>
                <Carousel />
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}
