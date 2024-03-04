import React from "react";
import styles from "@/pages/media/media.module.scss";
import Layout from "@/lib/layout";
import New from "@/components/new";

export default function Media() {
  return (
    <Layout>
    <div className={styles.title}>Basında Biz</div>
      <div className={styles.mediaContainer}>
        <New
          imageUrl={`/new1.jpg`}
          month={`20 Aralık`}
          year={`2022`}
          url={`/#`}
          title={`Labore natus, molestias amet`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quas
          ipsam eaque id perferendis atque nisi nostrum quaerat nam?
          Exercitationem nesciunt excepturi expedita, veniam, sit quod magni minus
          labore nostrum totam fugiat hic illo et corrupti quis nam obcaecati
          soluta non doloremque sed. Perferendis saepe voluptate quia obcaecati!
          Esse, fugit. Labore natus, molestias amet, assumenda nostrum nesciunt
          placeat voluptas omnis atque suscipit eligendi laudantium, repudiandae
          consectetur quo est harum id accusamus perferendis fuga? Distinctio
          asperiores ex voluptatibus. Tempora voluptas enim aliquid maiores at eos
          rerum nisi laboriosam accusantium dolore ullam exercitationem
          doloremque, perspiciatis odit pariatur facere rem numquam tempore
          ratione dolorum corporis animi maxime. Assumenda, nulla veritatis
          reprehenderit beatae, officiis numquam consequatur atque dolore minus
          placeat saepe. Quia distinctio impedit labore temporibus, possimus
          molestias ipsum iste repellendus aut, voluptatem dolorem aliquam dolore
          mollitia. Dolores nostrum mollitia minus, tempora temporibus rem
          excepturi ipsam esse nisi autem magnam sit quos, ab, eveniet
          perferendis. Voluptas error eaque, nobis, distinctio animi assumenda
          nostrum accusantium mollitia nulla ratione ducimus. Corrupti, corporis
          quibusdam itaque voluptates placeat ipsa magnam. Eius, doloremque? Velit
          consequuntur officiis, possimus odio rerum, eveniet dolore amet beatae
          quidem repellendus sint. Repudiandae, aspernatur molestiae, tempora
          nulla distinctio a blanditiis maxime animi libero alias placeat dolor
          ducimus dicta. Necessitatibus, ad! Molestiae eligendi accusamus porro
          officiis tempora incidunt illum corrupti nostrum asperiores deserunt.
          Officiis recusandae dicta suscipit aliquid nihil id fugiat quia autem
          accusamus? Vel, eum provident in officia quia error placeat iusto ullam
          molestiae facere aut, impedit minus ratione. A illum voluptatibus ea
          totam asperiores?`}
        />

        <New
          imageUrl={`/new2.jpg`}
          month={`21 Şubat`}
          year={`2021`}
          url={`/#`}
          title={`Rerum deleniti, odio
          possimus`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure
          distinctio totam ratione perspiciatis ipsum reprehenderit sunt soluta
          consequatur nisi corrupti, ea inventore. Ipsam ducimus vitae voluptatum
          velit quidem nisi. Tempore, dolor quod qui perspiciatis officiis iste
          odio saepe atque dolore, fugiat porro eum incidunt quam. Necessitatibus,
          iste magni, quam aliquam tempora consequuntur, unde iure impedit earum
          doloribus doloremque nisi quos perferendis. Rerum deleniti, odio
          possimus, et veniam quibusdam eveniet in dicta dolorum magnam, sunt
          accusantium porro labore quisquam id reprehenderit. Facere nam
          doloremque dolore, ducimus quia aperiam, eveniet at perspiciatis veniam
          necessitatibus hic amet reiciendis fuga, pariatur consequuntur rerum!`}
        />
        <New
          imageUrl={`/new3.jpg`}
          month={`1 Mart`}
          year={`2024`}
          url={`/#`}
          title={`Velit quidem nisi`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure
          distinctio totam ratione perspiciatis ipsum reprehenderit sunt soluta
          consequatur.`}
        />
        <New
          imageUrl={`/new4.jpg`}
          month={`12 Kasım`}
          year={`2023`}
          url={`/#`}
          title={`Velit quidem nisi`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure
          distinctio totam ratione perspiciatis ipsum reprehenderit sunt soluta
          consequatur nisi corrupti, ea inventore. Ipsam ducimus vitae voluptatum
          velit quidem nisi. Tempore, dolor quod qui perspiciatis officiis iste
          odio saepe atque dolore, fugiat porro eum incidunt quam.`}
        />
        <New
          imageUrl={`/new5.jpg`}
          month={`26 Temmuz`}
          year={`2022`}
          url={`/#`}
          title={`Fugiat porro eum incidunt quam`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure
          distinctio totam ratione perspiciatis ipsum reprehenderit sunt soluta
          consequatur nisi corrupti, ea inventore. Ipsam ducimus vitae voluptatum
          velit quidem nisi. Tempore, dolor quod qui perspiciatis officiis iste
          odio saepe atque dolore, fugiat porro eum incidunt quam.`}
        />
      </div>
    </Layout>
  );
}
