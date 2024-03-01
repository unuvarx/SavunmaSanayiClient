import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Layout from "@/lib/layout";
import React, { useState, useEffect } from "react";
import styles from "@/pages/anasayfa/anasayfa.module.scss";
import Spinner from "@/components/spinner";
export default function Anasayfa() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Layout>
          <div className={styles.homeContainer}>homeeeeeeee</div>
        </Layout>
      )}
    </>
  );
}
