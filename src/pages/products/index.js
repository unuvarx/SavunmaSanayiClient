import Layout from "@/lib/layout";
import React from "react";
import styles from "@/pages/products/products.module.scss";
import ProductCard from "@/components/productCard";

export default function Products() {
  return (
    <Layout>
        <div className={styles.title}>ÜRÜNLER</div>
      <div className={styles.productsContainer}>
        <ProductCard
          imageUrl={`/ak47.jpg`}
          title={`Avtomat Kalaşnikova-47`}
          description={`
            Soğuk Savaş yıllarından günümüze Çin ve Varşova Paktı'na bağ ülkelerce de lisans 
            altında üretilen tüfeğin modifiye edilmiş birçok modeli de çeşitli
             ülkelerce imal edilmiştir.
          `}
          imageIsRight={false}
        />{" "}
        <ProductCard
          imageUrl={`/aug.jpg`}
          title={`Steyr Aug`}
          description={`
          Bullpup tasarımı sayesinde namlusu daha geriye verilmiş, 
          böylece silahın boyunu uzatmadan namlunun boyu uzatılabilmiştir. Standart olarak
           dürbün ile gelir.
           Yapımında genelde alüminyum madde kullanılır, şarjörleri ise plastiktir.
          `}
          imageIsRight={true}
        />{" "}
        <ProductCard
          imageUrl={`/awp.jpg`}
          title={`Accuracy International Arctic Warfare`}
          description={`
            L96A1'in basit "gelişmiş" versiyonudur. İsmini ileri derece soğuk havalarda 
            kullanılabilme kalibiliyetinden almıştır. Tüm alt türlerinde
            
            7.62x51mm NATO mermileri ile 10 adet kapasiteli şarjör ile kullanılır.
          `}
          imageIsRight={false}
        />{" "}
        <ProductCard
          imageUrl={`/deagle.jpg`}
          title={`IMI Desert Eagle`}
          description={`
          Kullandığı mermilerden dolayı çok güçlü bir tabancadır
           ancak 50 AE kullanan versiyonun geri tepmesinin yüksek olması, 
           silahın oldukça ağır ve büyük olması nedeniyle kullanışlı değildir. Bu silahın çeşitli ağırlıkları vardır.
           1–2 kg arasındaki çeşitleri silahın gerçekten kuvvetli olduğunu gösteriyor.
          `}
          imageIsRight={true}
        />
        <ProductCard
          imageUrl={`/kanas.jpg`}
          title={`Dragunov`}
          description={`
          Yakın ve orta mesafeli savaş için tasarlanmış olan hafif makineli
           silah ve piyade tüfeklerinin kullanımı askeri birliklerin uzun menzilli
            gereksinimlerini karşılamadığı için Yevgeniy Fedoroviç Dragunov
             tarafından 1958-1963 yılları arasında Sovyetler Birliği'nde tasarlanmıştır. 
             Zorlu doğa ve çevre koşullarında test edilerek yapılan yarışma sonucunda Sergey 
             Simonov ve Aleksandr Konstantinov'un tasarımlarını alt ederek 1963 yılında seri 
             üretime geçilmiştir. 
          AK sınıfı silahlar gibi zorlu doğa koşullarında sorunsuz bir şekilde çalışır.
          `}
          imageIsRight={false}
        />
        <ProductCard
          imageUrl={`/pompali.jpg`}
          title={`Pompalı Silah`}
          description={`
          Pompalı silah, ateşlenmiş bir
           mühimmat kovanını çıkarmak ve yeni bir mühimmatı 
           hizaya getirmek için bir ileri ve geri hareket ettirilebilen mekanizme 
           ile çalışan silahtır. Yeniden yükleme sırasında tetiğin elden çıkmasını 
          gerektirmediğinden kurmalı ve manivelalı silahlardan daha hızlıdır.
          `}
          imageIsRight={true}
        />
      </div>{" "}
    </Layout>
  );
}
