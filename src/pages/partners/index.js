import Layout from "@/lib/layout";
import React from "react";
import styles from "@/pages/partners/partners.module.scss"

export default function Partners() {
  return (
    <Layout>
      <div className={styles.partnersContainer}>
        <div className={styles.title}>Partnerler</div>
      </div>
    </Layout>
  );
}
