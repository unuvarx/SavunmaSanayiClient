import Layout from "@/lib/layout";
import React from "react";
import styles from "@/pages/partners/partners.module.scss";

export default function Partners() {
  return (
    <Layout>
      <div className={styles.partnersContainer}>
        <div className={styles.title}>Partnerler</div>
        <div className={styles.partners}>
          <div>
            <img
              src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
