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
import { gsap } from "gsap";
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
      duration: 0.6,
      opacity: 1,
    });
  };
  const handleCloseNavbar = () => {
    const navbar = navbarRef.current;
    setNavbarControl(!navbarControl);

    gsap.to(navbar, {
      x: -500,
      duration: 0.8,
      opacity: 1,
    });
  };
  const OpenAndClose = () => {
    if (windowWidth <= 918) {
      if (navbarControl) {
        return <AiOutlineMenu onClick={handleOpenNavbar} />;
      } else {
        return <AiOutlineClose onClick={handleCloseNavbar} />;
      }
    } else {
      const navbar = navbarRef.current;
      gsap.to(navbar, {
        x: 0,
        duration: 0.8,
        opacity: 1,
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
        duration: 0.8,
        opacity: 1,
      });
    }
  }, [windowWidth]);
  const calculateImageHeight = () => {
    if (windowWidth <= 1500) {
      // Eğer pencere genişliği 918 pikselden küçükse, height'i 25rem olarak ayarla.
      return "30rem";
    } else {
      // Eğer pencere genişliği 918 pikselden büyükse, 1500'den fazlaysa her 200 pikselden bir 5 rem arttır.
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
            <div>
              <a href="/profile"> ddd </a> <AiOutlineUser />
            </div>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.navbar} ref={navbarRef}>
            <div className={styles.pagesContainer}>
              <div className={styles.img}>
                <img src="/images/logo.png" alt="" />
              </div>
              <div
                onClick={() => {
                  router.push("/sales");
                }}
                className={url === "/sales" ? styles.active : styles.deActive}
              >
                <span> ANASAYFA </span>
              </div>
              <div
                onClick={() => {
                  router.push("/sales-history");
                }}
                className={
                  url === "/sales-history" ? styles.active : styles.deActive
                }
              >
                <span> HAKKIMIZDA </span>
              </div>
              <div
                onClick={() => {
                  router.push("/products-list");
                }}
                className={
                  url === "/products-list" ? styles.active : styles.deActive
                }
              >
                <span>ÜRÜNLER</span>
              </div>
              <div
                onClick={() => {
                  router.push("/add-product");
                }}
                className={
                  url === "/add-product" ? styles.active : styles.deActive
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
