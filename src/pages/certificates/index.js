import React from "react";
import Layout from "@/lib/layout";
import styles from "@/pages/certificates/certificates.module.scss";
export default function Certificates() {
  return (
    <Layout>
      <div className={styles.partnersContainer}>
        <div className={styles.title}>Sertifikalarımız</div>
        <div className={styles.partners}>
          <div>
            <span>Güven Sertifikası</span>
            <img src="/images/certificate1.png" alt="" />
          </div>
          <div>
            <span>Hizmet Yeterlilik Belgesi</span>
            <img src="/images/certificate2.png" alt="" />
          </div>
          <div>
            <span>Tesis Güvenlik Belgeleri</span>
            <img src="/images/certificate3.png" alt="" />
          </div>
          <div>
            <span>Türk Arkreditasyon Kurumu</span>
            <img src="/images/certificate4.png" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
