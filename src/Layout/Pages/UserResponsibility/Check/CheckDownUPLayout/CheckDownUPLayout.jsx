import React, { useState } from "react";
import ContactButtons from "../../../Buy/BuyDetail/ContactButtons/ContactButtons";
import "./CheckDownUPLayout.css";

const CheckDownUPLayout = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleToggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  console.log("BottomSheet: ", bottomSheetVisible);

  return (
    <div>
      <button onClick={handleToggleBottomSheet}>Toggle Bottom Sheet</button>

      <div className={`bottomSheet ${bottomSheetVisible ? "open" : ""}`}>
        <footer className="bottomSheetContent">
          <div className="relative">
            <button
              onClick={handleToggleBottomSheet}
              className="btn btn-circle absolute right-0 bg-red-500 border-0 text-white"
            >
              X
            </button>
          </div>
          <p className="text-white">ও আমার দেশের মাটি</p>
        </footer>
      </div>

      <h1
        onClick={handleToggleBottomSheet}
        className="bg-green-500 w-10/12 md:w-3/12 text-xl text-white font-bold text-center rounded-md p-2 mx-auto mt-20 md:mt-0 "
      >
        Button to Up Layout
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, minus
        aperiam incidunt maiores odit officia? Possimus, rem ipsa exercitationem
        deserunt voluptates harum hic veritatis magnam eaque et voluptatum
        explicabo distinctio laudantium delectus iusto omnis mollitia sint
        aperiam quis! Voluptatum rerum nemo autem, nulla itaque obcaecati
        veritatis quidem culpa, a distinctio odio inventore soluta, eum natus
        atque possimus similique aspernatur labore. Asperiores eligendi ut earum
        ratione corporis quod sint qui voluptatibus deleniti voluptatum aliquam,
        saepe quos iste quo a impedit omnis incidunt? Quo excepturi optio fuga
        accusantium omnis id odio, libero, eum assumenda consequatur incidunt
        blanditiis adipisci? Labore quis, voluptate quam facere blanditiis
        eaque, qui minima recusandae maxime voluptatem possimus. Voluptas quasi
        soluta quos nam rem tempore odit facilis, doloremque pariatur saepe ut,
        vitae quod assumenda culpa possimus magni sed porro. Delectus quisquam
        fugit aliquid modi, maxime aspernatur dolor similique qui expedita
        provident amet repellat quis quae illo saepe atque voluptatibus ducimus
        at ab. Dolore, neque corporis. Corrupti necessitatibus laboriosam
        repellat rem maiores aliquid accusamus sapiente temporibus ex quos odio
        deleniti consequuntur ea, praesentium doloribus, facere debitis et illum
        nam, quidem sit voluptates voluptas animi hic! Rem optio excepturi, ipsa
        ad nesciunt nisi repellendus quas distinctio explicabo, dolor nemo
        officiis repudiandae in, laborum quidem dolorum? Expedita esse dolorem
        voluptatibus assumenda perspiciatis voluptatem obcaecati soluta, et
        aliquid, a quis tempore facilis! Voluptate placeat fugiat officia ea
        aliquid necessitatibus sapiente error sint, fugit id consequuntur vitae
        ratione. Exercitationem doloremque, similique sapiente labore illum vero
        dolores odio in veritatis, nostrum delectus natus vel provident esse
        asperiores a hic quo deserunt doloribus sed fugiat! Nobis dolorem minus
        sint assumenda nulla, consequatur velit voluptas animi quibusdam,
        molestias maxime quisquam accusamus, provident quas minima culpa ad
        temporibus illo enim porro in. Ullam sint voluptates illum molestias
        rerum quia ab aut quam veritatis nihil commodi sapiente saepe aperiam,
        suscipit sunt ipsa reiciendis, labore dolores nemo. Doloremque illo
        rerum maiores, dicta nostrum dolorum voluptatum ullam a aliquid?
        Delectus, numquam. Adipisci accusantium earum, tempore voluptas vero
        fugiat, blanditiis odit similique harum aperiam, neque id esse sequi eum
        quae explicabo! Modi officia dolore dolorem suscipit aliquam. Obcaecati
        recusandae iste impedit voluptatibus iure facilis necessitatibus alias
        ipsum dignissimos nobis consequuntur sint aliquam quia, rem, commodi,
        dolorum odit illo excepturi dolor quos nesciunt provident omnis
        voluptates! Ratione ut dicta consequatur quas incidunt maxime laborum
        pariatur ducimus veniam, ea expedita dolore, soluta minima consequuntur
        iste sequi distinctio earum nobis maiores. Inventore eaque, minus
        reiciendis consequatur soluta id consectetur omnis ipsa in qui enim
        assumenda tempora et quisquam. Dolorum dolore saepe optio et dicta,
        aperiam ratione illo facilis vitae delectus nesciunt nostrum veniam
        aliquam ut labore omnis. Autem, nesciunt! Nisi earum maiores officia
        sapiente similique fuga, accusantium corporis voluptatum adipisci
        molestiae impedit consequuntur illum dolorem ab esse nemo pariatur
        dolorum quo. Unde recusandae adipisci libero, excepturi exercitationem
        eos similique atque illum nobis ducimus ipsam deserunt corporis
        voluptatem consectetur itaque perferendis asperiores. Cumque eum libero
        ullam laboriosam minus. In, fugit dolorum error nobis assumenda
        perspiciatis excepturi tempora? Minus placeat odio officiis id sequi
        alias dignissimos excepturi possimus harum eligendi odit animi, earum
        reiciendis. Soluta atque voluptate libero vero quia possimus velit
        maiores harum molestias id, aperiam omnis debitis? Aliquam, impedit
        obcaecati distinctio maxime officia libero expedita quas unde reiciendis
        autem, ipsam, odio laudantium nam esse repellendus quidem aspernatur?
        Labore doloribus qui vero asperiores eos possimus incidunt similique
        quas alias libero iste nobis doloremque commodi, sed consectetur culpa,
        saepe tenetur temporibus delectus fuga. Nulla, consectetur sunt. Porro
        voluptatum quae nisi cumque iste accusamus quas suscipit dolorum
        laboriosam rem vero itaque nulla nesciunt ex ratione officiis, fuga non
        consequuntur possimus mollitia facere dicta! Ducimus, esse dolores
        molestias saepe fuga totam earum voluptatum quis eos debitis incidunt
        nisi, velit voluptatibus pariatur ratione nostrum! Quia beatae
        repudiandae esse, minima pariatur dolores ducimus perspiciatis maiores
        praesentium nobis, ipsum impedit amet. Quisquam quam aspernatur dolorem
        praesentium facere velit deleniti sed obcaecati alias, voluptate
        reprehenderit modi, ipsa quis quia aut atque sunt? Quod ipsam molestias
        qui, sed tenetur cum minus architecto exercitationem ducimus, iste ipsa?
        Enim quisquam hic pariatur sequi non expedita doloremque laboriosam
        debitis assumenda laborum amet asperiores natus eum minima nulla saepe
        quo delectus, molestiae adipisci quia ducimus id qui doloribus
        distinctio! Vel obcaecati fuga veritatis nostrum fugit eius culpa
        repellendus impedit, veniam cupiditate incidunt harum necessitatibus
        doloribus sunt unde dolorem maxime sint qui dolore odit rerum,
        dignissimos vero optio. Ex repudiandae odio enim quidem dignissimos
        mollitia qui, optio molestias eaque numquam, dolorem dolor praesentium
        accusantium amet maiores impedit nam maxime ad. Vitae obcaecati harum
        dicta consequatur placeat incidunt cum soluta, provident, error minus ab
        ad quae! Accusantium fuga harum sit natus neque unde aliquam, vero odit
        voluptas totam sunt repellendus quod sint, nesciunt, repellat placeat
        cupiditate porro aliquid sapiente amet vel reprehenderit alias
        assumenda! Labore officia dicta architecto earum veniam minima, odit
        nulla dolorem impedit neque amet iusto iste, animi nam quo saepe
        recusandae. Quia a nihil explicabo accusamus necessitatibus quidem eaque
        illo, aperiam et doloribus incidunt rerum error adipisci eligendi
        obcaecati laboriosam ipsa minima similique in! Quo magni quam aspernatur
        deserunt, odio magnam molestias dolorem enim, quidem dolores doloremque
        ipsa maiores aliquid totam, accusamus voluptates quibusdam reiciendis!
        Laborum, a. Necessitatibus sunt fugit dolores eos, esse tempore
        cupiditate porro, laboriosam facilis ex debitis quia vitae nam ducimus
        autem magnam. Enim beatae natus, possimus autem molestias hic tempore
        mollitia explicabo dolor, impedit officiis vitae, facilis doloremque
        iusto veniam quasi sint eveniet sapiente distinctio a velit quaerat!
        Suscipit ab eaque fuga enim consectetur dolorem quos nisi, sunt facilis
        quod voluptas, similique nobis eius impedit odit? Tempore dolor delectus
        rem corrupti qui neque placeat molestiae! Odio veniam, distinctio
        tempore ipsam minus eaque! Numquam obcaecati minima non? Sed sapiente
        dolorem inventore fuga! Similique natus nulla a laborum, culpa, minus
        eligendi et illum quaerat impedit accusamus quidem voluptas. Nihil
        facilis ut aspernatur laborum praesentium? Vero non, maiores amet
        inventore doloribus laborum, voluptas pariatur suscipit facilis dolor
        molestiae expedita explicabo natus cum quibusdam nihil unde ut, modi
        aperiam distinctio ipsam sit corrupti praesentium? Quaerat autem
        expedita ex, est voluptates, cumque minus ratione accusantium debitis
        quo libero.
      </p>
    </div>
  );
};

export default CheckDownUPLayout;
