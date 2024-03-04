import React, { useEffect, useState, useRef } from "react";
import styles from "./navbar.module.scss";
import { MdOutlineSell, MdAutorenew } from "react-icons/md";

import {
  AiOutlineHistory,
  AiOutlineUnorderedList,
  AiOutlineInsertRowAbove,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Power1, gsap } from "gsap";
import { useRouter } from "next/router";

export default function Navbar() {
  const [url, setUrl] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  const [navbarControl, setNavbarControl] = useState(false);
  const navbarRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const currentUrl = router.asPath;
    setUrl(currentUrl);
  }, [router]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenNavbar = () => {
    setNavbarControl(!navbarControl);
    const navbar = navbarRef.current;
    gsap.to(navbar, {
      x: 0,
      duration: 0.3,
      opacity: 1,
      ease: Power1.easeInOut,
    });
  };
  const handleCloseNavbar = () => {
    const navbar = navbarRef.current;
    setNavbarControl(!navbarControl);

    gsap.to(navbar, {
      x: -500,
      duration: 0.3,
      opacity: 0,
      ease: Power1.easeInOut,
    });
  };
  const OpenAndClose = () => {
    if (windowWidth <= 1100) {
      if (navbarControl) {
        return <AiOutlineMenu onClick={handleOpenNavbar} size={30} />;
      } else {
        return <AiOutlineClose onClick={handleCloseNavbar} size={30} />;
      }
    } else {
      const navbar = navbarRef.current;
      gsap.to(navbar, {
        x: 0,
        duration: 0.3,
        opacity: 1,
        ease: Power1.easeInOut,
      });

      return <> </>;
    }
  };
  useEffect(() => {
    if (windowWidth <= 918) {
      setNavbarControl(false);
      const navbar = navbarRef.current;
      gsap.to(navbar, {
        x: 0,
        duration: 0.3,
        opacity: 1,
        ease: Power1.easeInOut,
      });
    }
  }, [windowWidth]);
  const calculateImageHeight = () => {
    if (windowWidth <= 1500) {
      if (windowWidth <= 1100) {
        return "15rem";
      } else {
        return "35rem";
      }
    } else {
      const additionalHeight = Math.floor((windowWidth - 1500) / 200) * 5;
      return `calc(25rem + ${additionalHeight}rem)`;
    }
  };
  return (
    <div className={styles.navbarContainer}>
      <img
        className={styles.f16Img}
        src="/images/f16.jpg"
        alt=""
        style={{ height: calculateImageHeight() }}
      />
      <div className={styles.navbarBg}>
        <div className={styles.navbarContext}>
          <div className={styles.profile}>
            <OpenAndClose />
            {windowWidth <= 1100 ? (
              <div className={styles.container}>
                <div>
                  <img src="/images/turkey.jpg" alt="" />
                </div>
                |
                <div>
                  <img src="/images/england.jpg" alt="" />
                </div>
              </div>
            ) : (
              <div className={styles.container}>
                <div>
                  <a href="">tdsengineering.com</a>
                </div>
                |
                <div>
                  <span>+90 322 397 91 11</span>
                </div>
                |
                <div>
                  <span>Adana/Türkiye</span>
                </div>
                |
                <div>
                  <img src="/images/turkey.jpg" alt="" />
                </div>
                |
                <div>
                  <img src="/images/england.jpg" alt="" />
                </div>
              </div>
            )}
          </div>
          <div className={styles.hr}></div>
          <div className={styles.navbar} ref={navbarRef}>
            <div className={styles.pagesContainer}>
              <div className={styles.img}>
                <img src="/images/logo.png" alt="" />
              </div>
              <div
                onClick={() => {
                  router.push("/homepage");
                }}
                className={url === "/" || url === "/homepage" ? styles.active : styles.deActive}
              >
                <span> ANASAYFA </span>
              </div>
              <div
                onClick={() => {
                  router.push("/about");
                }}
                className={
                  url === "/about" ? styles.active : styles.deActive
                }
              >
                <span> HAKKIMIZDA </span>
              </div>
              <div
                onClick={() => {
                  router.push("/products");
                }}
                className={
                  url === "/products" ? styles.active : styles.deActive
                }
              >
                <span>ÜRÜNLER</span>
              </div>
              <div
                onClick={() => {
                  router.push("/partners");
                }}
                className={
                  url === "/partners" ? styles.active : styles.deActive
                }
              >
                <span> PARTNERLERİMİZ </span>
              </div>
              <div
                onClick={() => {
                  router.push("/sales-history");
                }}
                className={
                  url === "/sales-history" ? styles.active : styles.deActive
                }
              >
                <span> BASINDA BİZ </span>
              </div>
              <div
                onClick={() => {
                  router.push("/sales-history");
                }}
                className={
                  url === "/sales-history" ? styles.active : styles.deActive
                }
              >
                <span> SERTİFİKALARIMIZ </span>
              </div>
              <div
                onClick={() => {
                  router.push("/sales-history");
                }}
                className={
                  url === "/sales-history" ? styles.active : styles.deActive
                }
              >
                <span> BİZE ULAŞIN </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
