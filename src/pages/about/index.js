import Layout from "@/lib/layout";
import React, { useEffect, useRef } from "react";
import styles from "@/pages/about/about.module.scss";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {gsap, Power1} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
        y: 100,
        duration: 0.5,
        opacity: 0,
        ease: Power1.easeout,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top center",
          end: "top center",
          scrub: 2,
        },
      });
  }, [])

  return (
    <Layout>
      <div className={styles.aboutUsContainer} ref={aboutRef}>
        <span className={styles.title}> HAKKIMIZDA </span>
        <div className={styles.img}>
          <img src="/images/aboutus.jpg" alt="" />
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.At minima nam
          necessitatibus temporibus repellendus expedita labore iusto delectus
          autem dolorem, doloremque esse architecto, quae similique nostrum
          ipsum praesentium fugit saepe.Ratione at molestias dignissimos vel rem
          accusantium quod.A nesciunt minus in , voluptate deserunt,
          reprehenderit, atque corporis eos labore vitae repudiandae fuga beatae
          nihil consectetur nobis corrupti alias delectus quas ? Rem qui
          similique eum amet omnis alias voluptatum.Enim, consectetur! Possimus
          qui asperiores ab facilis repellat eum maiores commodi, mollitia iure
          eaque reprehenderit maxime sed velit hic quod optio natus!Praesentium
          officia eligendi velit repellat voluptas voluptatum magnam, deleniti
          explicabo voluptates libero exercitationem aspernatur tempore ea
          adipisci facere molestiae quis ex ad dolor assumenda fugit et.Illum
          voluptatibus ducimus debitis odit numquam quaerat consequatur fugiat
          repellendus harum dolores exercitationem libero quo voluptatem omnis
          et, earum ipsam dignissimos assumenda quasi.In eveniet totam
          recusandae molestiae aliquid sapiente omnis enim praesentium commodi ?
        </div>
        <div className={styles.steps}>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              incidunt nobis rerum! Neque, odio, adipisci repellendus dolor rem
              voluptates eos tempora ipsum voluptatibus architecto amet
              provident similique. Quos facilis harum, ipsam voluptates soluta
              itaque.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Neque, odio, adipisci repellendus dolor rem voluptates eos tempora
              ipsum voluptatibus architecto amet provident similique. Quos
              facilis harum, ipsam voluptates soluta itaque.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              incidunt nobis rerum! Narchitecto amet provident similique. Quos
              facilis harum, ipsam voluptates soluta itaque.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              incidunt nobis rerum! Neque, odio, adipisci repellendus voluptates
              eos tempora ipsum voluptatibus architecto amet provident
              similique. Quos facilis harum, ipsam voluptates soluta itaque.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Consectetur adipisicing elit. Ex quo incidunt nobis rerum! Neque,
              odio, adipisci repellendus dolor rem voluptates eos.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>Quos facilis harum, ipsam voluptates soluta itaque.</span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              incidunt nobis rerum! Neque, odio, adipisci repellendus dolor rem
              voluptates eos tempora ipsum voluptatibus architecto amet
              provident similique. Quos facilis harum, ipsam voluptates soluta
              itaque.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Neque, odio, adipisci repellendus dolor rem voluptates eos tempora
              ipsum voluptatibus architecto amet provident similique. Quos
              facilis harum, ipsam voluptates soluta itaque.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              incidunt nobis rerum! Narchitecto amet provident similique. Quos
              facilis harum, ipsam voluptates soluta itaque.
            </span>
          </div>
          <div>
            <label htmlFor="">
              <IoMdInformationCircleOutline />
            </label>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
              incidunt nobis rerum! Neque, odio, adipisci repellendus voluptates
              eos tempora ipsum voluptatibus architecto amet provident
              similique. Quos facilis harum, ipsam voluptates soluta itaque.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
