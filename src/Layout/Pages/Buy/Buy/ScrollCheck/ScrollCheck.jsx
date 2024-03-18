import React, { useEffect, useState } from "react";

const ScrollCheck = () => {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrolledPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // Increase page number when scrolled to 50% of the screen
      if (scrolledPercent >= 50) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-auto">
      <h1 className="w-6/12 text-center bg-green-400 mx-auto mt-40 fixed  ">
        Page Number: {pageNumber}
      </h1>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
          consequatur! Id saepe voluptatum modi dolorem ullam, neque debitis
          quia eum hic quos nobis voluptates totam ad rem corrupti atque?
          Reiciendis ullam repudiandae ad! Aut, deserunt dolores? Voluptatum
          perspiciatis dolores accusamus corporis. Quidem minus cum expedita
          sed, libero sit et ea quibusdam repudiandae officiis ex excepturi
          voluptates. Cumque veniam repudiandae porro maiores ea deleniti.
          Nostrum doloribus dolorem quia ipsum ut labore. Animi natus ex omnis
          suscipit rem temporibus laudantium labore deserunt eius quasi dolorem
          magnam repudiandae neque iste dolor, quibusdam similique esse, iusto
          perspiciatis quisquam. Debitis atque veniam dolor temporibus, eveniet,
          fugiat error, magni beatae ex blanditiis laborum eos voluptatum
          perspiciatis reprehenderit obcaecati vitae labore unde recusandae quam
          iure earum quisquam libero. Expedita illo dolor fugiat, non iusto ea
          odit explicabo ad animi. Illo tempora magnam fugiat ratione dolores
          sed ab natus dolorem rem aperiam voluptas quibusdam inventore esse
          dolor aliquam architecto quis corporis, autem corrupti odio quaerat
          debitis. Nostrum quidem a at porro, optio, unde nesciunt, eligendi quo
          ducimus sapiente veniam quisquam itaque. Sunt id necessitatibus
          molestias dicta laudantium dolore nisi quam, quaerat hic. Minus
          dolores odio, ad amet in quibusdam explicabo suscipit iste, recusandae
          eum facere ratione, doloribus eaque! Magnam aliquid similique facilis
          veritatis aliquam corporis tenetur iusto qui nobis dicta quibusdam,
          illum est a, porro maiores sunt, voluptates error delectus placeat
          saepe ex unde voluptas! Enim error voluptatem perspiciatis, voluptates
          voluptatum sapiente provident maiores asperiores aperiam quasi dolore
          fugiat delectus consequuntur, amet perferendis id architecto adipisci
          debitis, dignissimos at reprehenderit rem repellendus corrupti. Culpa
          in odio aliquid eum asperiores esse ex sint, illum architecto minima
          impedit consectetur reiciendis aut quaerat deserunt quo! Sed nobis a
          aut, ducimus debitis porro iure aperiam similique, enim autem impedit
          nihil alias nisi sapiente harum possimus, expedita commodi! Provident,
          itaque? Exercitationem quisquam deleniti, voluptatum deserunt
          excepturi ab repudiandae modi delectus, cum corrupti aliquid explicabo
          eaque, dolorem maxime officiis laborum. Culpa ipsam accusamus error
          neque. Excepturi tenetur magnam eligendi totam perspiciatis eum,
          aliquid doloribus debitis veritatis laborum, alias cupiditate cum
          corrupti recusandae praesentium incidunt modi quidem vero consectetur
          quae qui dolore unde quia. Repellat sint maxime laborum modi aperiam
          nemo consequuntur nihil molestias quam doloribus numquam aut minus
          inventore eligendi, architecto repellendus, excepturi hic veritatis
          quae ut natus soluta fugiat. Eius, quae maxime! Autem quis asperiores
          voluptatem aliquam fugit quaerat eligendi! Quia tempore cupiditate,
          inventore ex temporibus laudantium saepe mollitia expedita?
          Repudiandae sed dolore perspiciatis amet deserunt error ducimus illum
          possimus veniam suscipit reprehenderit, esse dicta deleniti
          praesentium laborum architecto ipsam itaque? Facilis fugit quos id
          exercitationem adipisci ducimus explicabo fuga veritatis blanditiis
          dolores, ab voluptate eligendi molestiae odit perferendis voluptas
          itaque saepe alias, voluptatem consequuntur eius cumque neque sint.
          Sequi libero, ducimus a quod neque aliquam, dolor iure corrupti illum
          sed soluta doloribus. Sint blanditiis tempore rerum exercitationem
          vitae laboriosam ipsa quia quisquam nemo illum rem quas reprehenderit
          earum voluptas eaque nobis, impedit quasi odit? Est, aut ipsa placeat
          repellendus repellat velit dolores voluptas iusto autem, magnam
          repudiandae expedita fugit itaque officiis nesciunt quos impedit.
          Praesentium accusamus recusandae atque, sequi necessitatibus
          voluptates ratione, aliquam aspernatur architecto repudiandae rem
          libero voluptas expedita porro nisi voluptate. Laudantium, rerum
          similique? Eligendi nobis, blanditiis impedit assumenda aut ut unde
          asperiores nihil quod iusto dignissimos rerum tenetur tempore
          doloribus laboriosam, fugiat, sint labore consectetur accusantium odit
          itaque! Facilis non provident suscipit nihil laboriosam doloribus
          facere exercitationem! Non, quos cum? Esse sint ratione itaque?
          Incidunt debitis eaque quae, accusantium delectus aliquam tenetur
          reiciendis earum eveniet voluptate. Ab, aliquam necessitatibus. Porro,
          reprehenderit quidem et sunt ad, autem perspiciatis vitae commodi ipsa
          esse eos ducimus ratione iusto quasi maxime cumque molestias
          voluptates assumenda hic. Exercitationem sequi laborum magni quo
          aspernatur! Autem aperiam optio harum, at quae voluptatem culpa earum
          aspernatur. Excepturi tempore quasi dolores a voluptas ratione
          expedita, repudiandae accusamus harum itaque inventore tenetur debitis
          aut praesentium quibusdam, eveniet recusandae, beatae asperiores! Quod
          nisi consequatur omnis soluta praesentium quo quibusdam id accusantium
          numquam doloribus optio ratione eaque dolore temporibus, minus
          architecto suscipit repudiandae reprehenderit laboriosam corrupti?
          Ducimus corporis libero iusto, quod iste similique, officia sit quas
          vitae laudantium commodi, nam mollitia consequatur? Ducimus a iure
          commodi autem. Facere inventore optio molestias commodi excepturi
          iusto tempore nam fugit, nostrum quaerat sunt laborum magnam pariatur
          voluptate ipsum, repellat quia id accusantium ad qui placeat modi
          quisquam! Fugit nemo recusandae voluptates dolores exercitationem
          expedita, ut perferendis ipsum, officia nam consequatur eum
          consectetur possimus fuga quaerat inventore distinctio quibusdam
          eligendi, veniam assumenda. Eum praesentium earum officia corrupti,
          id, porro deleniti tempore itaque nam a, quae nemo corporis minima
          rerum ea repellendus esse. Rem officiis libero minima suscipit ipsa
          maxime! Esse quas aut ratione porro ut voluptate voluptatem vel quos
          quod eum soluta veritatis labore, quia eligendi natus ex commodi
          veniam at accusantium consequuntur hic? Illum, aut consectetur
          obcaecati debitis praesentium esse molestiae dolores, odio non aliquam
          illo voluptates tempore quae, mollitia nam recusandae nisi
          consequuntur! Sequi quia eligendi sit ab, quo perspiciatis rerum iure
          voluptatum, dolorem ex suscipit ad, laudantium mollitia harum. Hic,
          explicabo molestias quibusdam unde dolore autem sint eum nesciunt
          magnam ea, fuga deserunt placeat libero ipsa. Vero architecto, neque
          eveniet omnis animi aut, atque nihil fuga cupiditate quisquam
          sapiente! Reprehenderit amet qui, fugiat pariatur perspiciatis aut
          blanditiis itaque laboriosam magni nam cupiditate alias repudiandae
          iste tenetur voluptas architecto tempore fugit eveniet velit aperiam
          dignissimos totam excepturi. Consequatur placeat possimus magni
          incidunt fugiat ipsa enim ratione dolorem molestias in maiores cum
          repellendus quas unde, nam voluptates ab a aperiam? Dolorem fugiat
          illum velit natus blanditiis est rerum aliquam soluta corrupti
          recusandae, quam veniam ipsa, aut saepe consequuntur excepturi illo
          animi adipisci, laborum deserunt. Impedit tempora ut at iusto deleniti
          ab, debitis veniam aperiam nemo repellat, voluptas, consectetur modi
          repudiandae eligendi facere! Iste eos corrupti soluta quo odit
          possimus et officia, magni commodi quibusdam cumque, cum repellat iure
          ex, porro id quidem rem. Voluptatem, doloremque nisi similique animi
          harum, quaerat error totam repudiandae, neque labore eius voluptates
          quasi praesentium. Ducimus nobis dolorem odit numquam, tenetur iusto
          quam delectus tempore ex ad cumque fuga exercitationem officia
          eligendi incidunt error, alias, vero velit amet perspiciatis nisi!
          Expedita, deserunt inventore? Labore rem eveniet dicta, optio quisquam
          culpa obcaecati earum placeat voluptate facere doloremque! Id cumque
          temporibus sapiente tempora odit ipsam at repellat incidunt expedita
          mollitia doloremque, veniam, ut alias dolorem similique, amet a. Ullam
          exercitationem consequatur minima beatae quaerat, cum provident sunt?
          Laboriosam porro maiores cupiditate rerum qui dignissimos? Expedita
          eligendi laudantium pariatur exercitationem sapiente minima, voluptas
          possimus libero, laborum voluptatem ratione totam rem magni magnam
          architecto nesciunt alias dolor enim qui est officia quaerat.
          Consequuntur quas voluptate veritatis temporibus? Repellendus
          asperiores amet hic quos quam et tempore velit, quae fugiat eius
          ducimus? Autem consequuntur possimus a ex recusandae dignissimos ipsam
          provident iure. Natus provident accusamus amet nihil animi eveniet
          quidem dolore. Nemo tenetur quo est eos? Maiores, fuga. Reiciendis
          laudantium possimus qui, fugiat officiis eaque. Nobis consequuntur
          voluptate soluta repellendus molestias vitae totam sequi odit earum,
          quasi recusandae dolore sapiente vel similique cumque repudiandae
          harum aliquid voluptates dolorem rem sit, hic minima ipsa. Fugiat, qui
          fuga eius velit voluptate possimus mollitia architecto molestiae
          accusamus officiis voluptatibus facilis impedit repellendus voluptatem
          consectetur eos blanditiis sint sed ab exercitationem? Error eos alias
          doloremque eligendi repellendus, quis veniam atque reiciendis cumque
          accusantium rem quia quas perspiciatis ut. Magni architecto delectus
          dolor perferendis? Hic labore mollitia provident molestias nesciunt,
          dolor laboriosam ratione est facere quaerat perferendis ullam corrupti
          incidunt magnam quis. Exercitationem expedita commodi accusamus facere
          accusantium? Rem sunt reprehenderit unde laboriosam deserunt enim quia
          tempore, voluptas sint dolor minus ipsum sit delectus! Maiores
          accusantium ea nihil quod rem. Odit, nobis cumque natus deserunt
          doloremque officia animi modi libero, dolorum dolore, consequuntur ab
          recusandae dolor qui facere quod sequi perspiciatis. Eaque similique
          exercitationem veniam adipisci doloremque animi perferendis magnam
          nulla ducimus minima! Praesentium, voluptatibus? Doloremque, dolor
          sapiente? Reprehenderit officia enim unde fuga sit ad deserunt, ab et
          mollitia asperiores qui. Debitis asperiores, eveniet quidem nostrum,
          perferendis, nemo reprehenderit repellendus libero consectetur tempore
          commodi adipisci sapiente. Recusandae, dolorem laborum! Labore
          temporibus, molestiae recusandae error porro totam inventore. Soluta
          possimus ut deserunt molestiae quibusdam in distinctio sint saepe vero
          ex facilis sapiente eveniet minus, tempora facere expedita quaerat
          autem reprehenderit! Ducimus, voluptatibus voluptas totam aliquid
          similique numquam adipisci nostrum, corporis quia at rem est magnam
          molestiae atque dignissimos laboriosam temporibus soluta possimus ex.
          Dignissimos voluptatibus dolores fugiat, quam molestias blanditiis,
          esse iure magni at similique error earum labore. Incidunt itaque velit
          voluptate, perferendis quaerat assumenda architecto nihil explicabo
          atque ut impedit molestiae, blanditiis quos, minima illum debitis est
          at dolorem! Perferendis placeat ipsam optio, tempore nihil voluptate
          iste! Ea quo obcaecati soluta ut ad quaerat aliquid quis ab neque eos
          maxime repudiandae, non, eligendi placeat quia a mollitia unde
          aspernatur! Cupiditate numquam dignissimos minus saepe, dolorum
          perspiciatis hic, necessitatibus ex consequatur, molestias cumque!
          Accusantium quasi facere dolore quis doloremque quas error, laboriosam
          voluptatem nostrum et consequatur praesentium vero voluptatibus
          quisquam sint rem assumenda eveniet? Ea, quas atque necessitatibus
          tempora itaque nesciunt natus sit harum perspiciatis, quaerat
          consectetur sunt molestiae corporis repellendus quasi amet impedit
          commodi, sequi aliquam. Culpa tempore sed in ab suscipit ipsam saepe
          atque. Libero assumenda, impedit sit ex sed vitae velit. Similique
          dolor totam aspernatur inventore nobis culpa eos illo expedita non
          dolore alias quaerat facere laboriosam odit repellat ab vel molestiae
          eligendi libero repudiandae, facilis impedit! Totam, autem et non
          fugit dicta aliquam quasi. Repellendus odit impedit dolorum possimus
          beatae quo laborum eum, itaque exercitationem neque quod accusamus
          animi fugit, eveniet, ratione ut libero corrupti pariatur ad non
          quisquam voluptatem. Cumque reiciendis libero debitis. Neque, ipsa?
          Rem libero explicabo nesciunt omnis repellendus sapiente, unde nemo.
          Culpa, minus ut exercitationem placeat numquam a debitis perferendis
          autem, mollitia blanditiis natus. Laudantium, velit. Praesentium
          neque, nam atque aperiam recusandae labore, voluptas fugit natus ipsa
          porro, accusantium ipsum. Dolores cumque aperiam fugiat at nemo
          architecto. Recusandae nobis autem magni, deleniti nisi eaque quas.
          Numquam libero necessitatibus cupiditate itaque odit est molestiae
          amet, iure alias. Dolor aperiam, unde, facilis amet possimus earum nam
          iste iure hic deserunt provident est, aliquid odio laborum sit rem!
          Officiis consectetur omnis doloribus, quae quisquam ullam officia ut
          quos in, hic sapiente explicabo. Dolores ut fugiat magni quas ipsa
          minima error repudiandae adipisci quod eius at commodi et, molestias
          reiciendis molestiae optio perferendis eaque amet cumque ea iusto!
          Cumque quam mollitia unde, dolorem modi quisquam similique atque.
          Alias, itaque laboriosam quas nam pariatur unde commodi blanditiis
          repellat! Unde tempore laborum vitae rerum necessitatibus at autem
          ullam in odio soluta voluptates, maxime laudantium! Ea, eligendi
          excepturi? Dignissimos ea in aperiam eaque voluptate non, suscipit
          culpa nostrum libero similique dicta eos ipsum reprehenderit tenetur
          unde quo fugit odit, nulla sed. Facilis illo nihil incidunt, corrupti
          odio nulla excepturi? Amet tempore possimus cumque nisi deserunt!
          Eveniet architecto eligendi nisi. Architecto, in sit quis rerum
          incidunt dolorum. Eius facere eligendi facilis consequatur deserunt
          in? Impedit eum labore ratione aliquid earum, ut laborum quaerat
          distinctio enim deserunt dolor. Inventore, iure molestias fugit
          dolores, accusamus exercitationem eligendi tempora eum incidunt ipsam
          laborum. Vitae, ratione. Odio, recusandae repudiandae? Dignissimos
          nemo natus eos eligendi unde rerum temporibus! Modi placeat est
          possimus! Quasi tempore autem itaque ipsum quibusdam delectus ea
          accusantium exercitationem incidunt eveniet recusandae consequatur id,
          rerum, dolore odit dolor. Iusto assumenda quidem aliquam optio culpa
          earum maiores, nemo suscipit obcaecati? Velit eius eveniet, quas
          explicabo nihil aut vero placeat quo fuga rerum modi asperiores
          dolorem odio obcaecati expedita sed excepturi atque? Harum, error
          porro possimus impedit fugit velit ullam nesciunt distinctio neque
          ipsa dolore iste voluptates, eligendi officia, itaque tenetur!
          Possimus, deleniti nesciunt. Expedita, recusandae placeat voluptate
          ducimus quisquam quam delectus explicabo perferendis ea temporibus.
          Deserunt maxime at commodi sapiente ratione reiciendis magnam vitae
          aliquid voluptas expedita, ullam sunt. Nulla, sed suscipit. Molestias
          voluptatibus, officiis, eos in eaque iusto expedita dignissimos autem
          error repellendus quis dolores. Culpa aliquid iste sint veniam omnis
          vel, odio quasi quos doloribus, impedit laborum aut ratione ullam
          vitae magni corrupti optio sit similique sed libero eos cupiditate
          officiis. Quibusdam sunt quo aliquid dolore, laboriosam praesentium ad
          fugit porro tenetur error architecto totam quas ab! Quas minus non
          obcaecati deserunt est, vitae officia? Quia repellendus possimus
          quidem, nulla nihil explicabo sunt et, obcaecati itaque ducimus in
          reprehenderit nemo ipsam praesentium atque. Tempora natus iusto
          commodi dolore doloremque, odio delectus, vel illo, facilis harum
          itaque! Repellat, quas? Unde facere soluta quam explicabo fugiat rem
          voluptatibus recusandae, commodi at sint, in, quia omnis asperiores!
          Similique fuga amet, accusamus laborum ullam veniam numquam reiciendis
          obcaecati? Voluptatem, tenetur dolore. Dolore et, aperiam nesciunt
          magni earum praesentium minima delectus omnis voluptatibus ut
          laboriosam, incidunt repudiandae sunt odit reiciendis voluptatum illum
          in. Accusantium magni perferendis atque magnam voluptate cum suscipit
          quod facere, architecto temporibus porro illum itaque numquam
          expedita! Reprehenderit quasi laudantium eveniet nostrum error labore
          id voluptas fugit saepe dolorem ipsam inventore suscipit magnam
          commodi illo temporibus doloremque et adipisci voluptate omnis atque,
          maxime consectetur. Dolore eveniet nostrum temporibus vero quidem
          similique, molestiae veritatis quam deleniti, nesciunt ex tempore.
          Amet molestiae animi repellendus ab esse totam commodi voluptatibus
          quibusdam illo aut non quis recusandae saepe perferendis cumque
          molestias, sed architecto labore voluptas quam accusamus laborum?
          Inventore hic enim distinctio, sapiente, eos sequi eligendi tempore
          laudantium natus, unde optio a ducimus rem facilis? Perferendis hic
          impedit repellendus saepe. Consequuntur distinctio ipsum ratione
          libero delectus corporis blanditiis asperiores, qui molestias et nam
          ipsa necessitatibus recusandae consequatur, sit magnam accusamus ex
          aut, molestiae veritatis repellat? Similique velit, repudiandae eius
          soluta quis rem odio culpa eos delectus vel facilis consectetur ab
          pariatur voluptates, eaque cupiditate autem saepe nihil quos minima
          dolorum voluptatem. Impedit quaerat ullam, ab laborum quae
          perspiciatis neque earum mollitia sequi velit, error delectus beatae.
          Commodi totam corporis tenetur dolorum est minima praesentium nesciunt
          vero, animi suscipit, natus perferendis, accusamus dolores. Eaque
          voluptate maxime non magnam ducimus distinctio voluptatem laboriosam.
          Sint accusamus numquam assumenda, voluptatum distinctio, itaque beatae
          voluptas ipsa molestiae enim quaerat, nihil commodi veniam autem
          dolore quas corporis quos saepe quam ad! Cum laboriosam, praesentium
          laborum atque illo optio nemo pariatur itaque rem, id consequuntur a
          libero veritatis explicabo quo. Nobis exercitationem, temporibus
          voluptatem tempora voluptatibus nulla quae minus adipisci doloremque
          autem possimus ex est deserunt labore dolor blanditiis consectetur
          unde impedit enim veniam quia at ipsum. Temporibus vero ratione quidem
          maxime velit optio itaque, sint eligendi expedita, ullam illo veniam
          molestiae blanditiis! Eaque perferendis, vitae cum quam corrupti
          temporibus explicabo, sit excepturi libero veritatis labore magni rem
          veniam sint nisi modi exercitationem, recusandae et! Dicta hic dolore
          unde explicabo quo. Placeat ratione deleniti iusto! Doloribus,
          temporibus laudantium. Iusto ducimus a tempore, quis laborum sit
          tenetur optio expedita nesciunt et quos fugit voluptatum eligendi
          voluptates iste nobis perspiciatis nam blanditiis. Saepe facilis in
          placeat iusto adipisci voluptate, blanditiis error aperiam, explicabo
          accusamus nam labore soluta sapiente. Ut atque molestiae ipsum beatae,
          aliquam quae rem mollitia labore impedit magnam quod, autem fugit
          tempora vero quia non eius quis nemo consequatur quibusdam, voluptatum
          necessitatibus incidunt. Quidem consequuntur repellendus dicta
          provident, tempore obcaecati. Incidunt reprehenderit recusandae omnis
          quo laboriosam autem neque voluptatem. Dolor, sequi, repellat aliquid
          vitae ut fuga magni ducimus, aut iste doloribus dolorem? Iste maxime
          temporibus aliquid vitae consectetur quibusdam doloribus! Unde atque
          vel deserunt, in velit aperiam dolor eius, sint voluptatem amet
          voluptatum ab quas alias laboriosam fuga, mollitia aspernatur quae
          corporis dicta voluptate facere illum possimus? Eaque nesciunt ullam,
          sed facere consequatur minus consectetur, nostrum mollitia totam ipsam
          numquam sint illum corrupti voluptatibus nemo quaerat at tempore.
          Doloribus facere architecto eligendi voluptatum deserunt quod est
          officiis, mollitia odit, labore unde ad veniam possimus? Magni, libero
          id culpa, officiis dolorem dolores, voluptatum voluptates laborum
          eligendi ipsam sapiente perferendis possimus reprehenderit eius
          adipisci laboriosam totam explicabo quidem reiciendis eos vitae
          facilis? Repellat nam soluta optio in minima inventore ad accusantium
          ipsa rem! Soluta explicabo quos dolores porro error. Debitis animi est
          laborum libero, quo sapiente voluptatibus recusandae aperiam quaerat
          quis cum provident rem vitae. Aut aliquid commodi cumque! Quo,
          sapiente. Sint praesentium tempore dolores explicabo alias est magni
          quasi at minus modi dolorum molestiae quas expedita nulla, deserunt
          architecto sequi iusto quo. Quae delectus dolorem iste rem?
          Exercitationem beatae rem impedit deserunt assumenda cum ipsam
          explicabo vero maiores placeat dolore sed ipsum omnis laboriosam quae,
          tenetur ad corporis, reiciendis eaque blanditiis odio error fuga amet?
          Ullam, itaque reiciendis esse, id ipsum aliquid quaerat molestiae
          perferendis qui quidem neque obcaecati quisquam temporibus iusto quam
          tenetur similique delectus possimus consectetur beatae? Deserunt
          perspiciatis voluptatibus labore obcaecati nemo doloribus iure maiores
          voluptatum minus. Architecto nihil asperiores similique earum quam
          quae minus ullam consequuntur saepe numquam tempore possimus cum
          pariatur necessitatibus autem, dignissimos fugit distinctio aliquid
          suscipit officia dolores amet eveniet tenetur? Nulla possimus quisquam
          esse voluptas alias, quod nobis numquam architecto nesciunt illo magni
          modi molestias delectus, repellendus commodi et, eum reprehenderit
          voluptates. Quaerat tempora minus qui veritatis possimus perferendis,
          rerum accusantium. Facilis tempore ad, provident mollitia laborum ab a
          natus aut vitae dolore nesciunt sit laboriosam tenetur sunt quos
          consectetur non reiciendis cumque amet velit officia modi. Reiciendis
          consequuntur placeat totam accusamus itaque deleniti asperiores
          ratione eveniet ex omnis beatae, optio dicta tempore molestias nam
          dolore sint earum, quod officia culpa inventore. Maiores eaque eum,
          repellendus id tempora labore molestias cum fugiat modi quos sint
          facilis quo ullam, alias, pariatur quae quasi iure ipsum. Voluptatem
          mollitia tempore ullam, rerum libero maxime delectus ex sed molestias
          dolores nisi ut laboriosam ea amet voluptas consequatur, et dolor enim
          atque doloremque soluta. Nam veritatis ipsum nulla aspernatur deserunt
          porro repellendus, provident illo dolorem in eligendi, suscipit odio
          nisi illum beatae dignissimos ipsam possimus nemo nesciunt, optio sunt
          molestias repellat explicabo quasi. Consectetur, ab aliquid itaque
          quisquam impedit doloremque delectus, libero fuga nisi labore
          provident. Quod aspernatur, eos aut fugiat ipsum quidem similique!
          Culpa ad non ratione aperiam. Aliquid reiciendis, eaque laborum ipsa
          soluta nam et doloremque sequi laudantium dicta similique ea doloribus
          molestias qui iste harum ex maiores omnis autem eos. Eum consequuntur
          voluptatum vel, adipisci temporibus beatae aperiam id, doloremque
          explicabo quam perferendis itaque earum enim. Laudantium, voluptatibus
          error? Distinctio repellat accusantium exercitationem sequi harum
          optio voluptate cupiditate accusamus, quisquam nemo sapiente, quam
          dolorum sint eius. Molestiae impedit velit error nam recusandae,
          officiis laborum nesciunt accusantium autem voluptate repellat maiores
          praesentium illum commodi eius itaque dolor! Laborum sit quod ab ex,
          dicta in magnam iste temporibus impedit iure corrupti architecto
          aliquam adipisci! Deleniti, corporis optio aut ad minus reprehenderit
          aliquam doloribus ipsam fugiat. Dignissimos natus aliquam, quos
          quaerat magni temporibus velit beatae pariatur aut reprehenderit animi
          in assumenda voluptas autem! Velit iste reprehenderit repellendus
          blanditiis laborum id sed ea magni aut fuga rem provident molestiae,
          laudantium dolore, magnam ut. Sed eum laboriosam earum quae
          cupiditate, expedita impedit est nisi ut eveniet. Officia ipsa laborum
          tempore. Fugit quos illum voluptates laborum. Minus nostrum, nobis
          laudantium ipsa praesentium dolorum fugiat sapiente veniam eius sed
          dignissimos odit necessitatibus! Voluptatibus delectus quisquam
          accusamus nesciunt tenetur pariatur, dolore natus, architecto beatae
          sed doloribus reiciendis dicta, cum provident itaque! Architecto
          assumenda cum in voluptate nulla ad nisi commodi nihil quibusdam quam
          odit iusto hic quasi enim perspiciatis excepturi aliquam corrupti
          accusantium, laudantium explicabo saepe tenetur doloribus recusandae.
          Iure eveniet alias nemo tempora! Qui numquam aliquam a laboriosam
          culpa veritatis debitis, dolore minus obcaecati velit incidunt quo
          praesentium fugit, consequuntur fugiat molestiae harum non optio
          repellendus ipsa minima distinctio! Ipsum distinctio earum aliquam
          aperiam at est quam labore tenetur harum, nobis nam, quos ex dolorum
          ipsam eum accusamus repellat deleniti laboriosam exercitationem nisi!
          Maxime dolor nisi quidem quasi tempore, perferendis alias minima
          libero ullam. Maiores, perferendis ullam temporibus quae numquam
          molestiae, ut quis consectetur sequi, a nemo! Facilis quisquam quam
          delectus quia harum corporis itaque sapiente deleniti libero
          accusantium modi at placeat vel repudiandae, molestias soluta ullam,
          rem quasi natus accusamus dignissimos est voluptatem sint? Rerum
          voluptates veritatis neque et incidunt. Officia ut assumenda id odio
          placeat reiciendis velit nisi deserunt repellendus, laborum beatae
          maiores dolorum, saepe aliquam labore aut. Adipisci tempore quod
          voluptate obcaecati quis. Pariatur quas omnis quia, aliquam possimus
          rerum eaque quasi est vero porro aliquid asperiores, incidunt iure
          veritatis, magni corporis fugiat tempore dolorem minima modi odit?
          Enim sunt veniam veritatis placeat eos quos dolore ea voluptatem,
          natus corrupti nostrum ad libero harum? Sed velit numquam assumenda
          officia magni sapiente corrupti dolorem! Modi qui possimus dicta
          commodi illo exercitationem voluptatum aliquam at quo architecto culpa
          tenetur vero, nostrum tempore. At ipsa beatae sapiente ex possimus
          nihil doloremque quasi, in eveniet, dolores voluptate maiores.
          Accusamus totam velit sapiente impedit inventore iure excepturi
          consectetur vel cum incidunt facere vero nam dolores maxime aspernatur
          odio, eum minus eligendi ad illum neque quaerat corrupti. Ex,
          suscipit. Molestiae saepe consequuntur illo earum blanditiis est
          explicabo impedit eos! Inventore hic totam perferendis a voluptates
          ratione? Debitis, libero. Blanditiis odio voluptatum illum? Voluptatum
          neque incidunt ullam odit velit commodi aut sequi, beatae facilis ut,
          ex sunt fugiat adipisci consectetur unde ipsum error. Deserunt fuga
          quo, porro repellendus facilis explicabo expedita commodi quam
          inventore accusantium delectus vero, voluptatibus enim at ab quaerat
          nostrum voluptatem ullam eius. Dolorem rem corrupti saepe tenetur
          voluptatum nesciunt. Omnis cupiditate quasi odit eveniet voluptatibus
          ipsum, molestiae, unde repudiandae suscipit tenetur neque voluptates
          sapiente mollitia sint, iure accusantium fugit. Officia praesentium
          laboriosam odit provident tempora officiis esse quidem sed
          repudiandae, id fuga. Harum ducimus, nam corporis sed esse quaerat
          sunt amet sequi veniam optio ab dolore nobis expedita necessitatibus
          nihil veritatis laboriosam officia reiciendis minima eos delectus sit.
          Corporis velit earum, voluptatem voluptas adipisci facere? Possimus
          voluptas voluptatum corrupti ullam quas consequuntur. Nesciunt
          veritatis corporis consequuntur corrupti omnis amet, nemo placeat
          nulla enim error, esse fuga quod natus architecto obcaecati temporibus
          cumque a saepe expedita vero nam. Dolor sunt quia vero id veritatis
          facilis beatae dicta, quae at atque nesciunt eligendi quam totam
          doloribus doloremque! Quia animi dolores assumenda voluptatum? Iste
          illo vero incidunt architecto quam ex tempora, dolore odio alias
          itaque! Distinctio, maiores perferendis aut vero dolorum deserunt
          laborum ad totam magni aliquam dolor quo laboriosam illum quidem autem
          laudantium deleniti, voluptas repudiandae cupiditate consectetur odio!
          Optio at illum deserunt dignissimos, fugiat, ducimus eos odio in ipsam
          et minus iure sapiente incidunt enim quos voluptatem nihil
          perspiciatis fugit libero autem voluptatum laborum modi aperiam.
          Nesciunt, aperiam. Exercitationem deserunt accusamus molestiae
          quibusdam modi, harum nam, doloremque voluptas eius ut commodi
          corporis sit obcaecati itaque? Aut magni debitis suscipit explicabo
          sunt eveniet tempora amet adipisci necessitatibus architecto aliquam
          eius, et, quam labore non accusantium tempore deleniti eligendi ex
          asperiores nulla autem, molestiae ad rem. Delectus laborum cumque
          facere maxime commodi eaque, perspiciatis, odit rerum incidunt nemo
          impedit. Saepe doloribus quos tenetur odit, laborum, omnis ratione ex
          iure quidem repellendus atque nulla. Vero eveniet omnis, doloribus
          voluptas blanditiis facilis! Unde ducimus inventore distinctio
          obcaecati dolorem placeat recusandae similique? Deleniti dolore
          tempore a eius consequatur odit necessitatibus rerum quia vero, autem
          quos, ab numquam eveniet aperiam recusandae suscipit maiores doloribus
          id voluptas assumenda fugit nemo dolorum modi alias. Mollitia
          exercitationem porro, beatae culpa magnam dolore veritatis itaque
          dolorum quae fugiat tempora ipsa impedit eligendi nulla laudantium
          quod, ipsum unde eum inventore architecto facere ab sed numquam
          labore! Nesciunt enim ipsa esse adipisci aliquid fuga. Aperiam
          voluptatem qui, unde quaerat perspiciatis dolore id molestiae. Esse
          iste vel quidem corrupti, laboriosam dolores voluptates aspernatur
          assumenda odio nisi, recusandae delectus repellat, deserunt quas totam
          temporibus. Reiciendis aperiam quos vero possimus perspiciatis, porro
          hic quisquam aspernatur soluta! Vero deserunt tenetur esse aperiam
          quis ratione doloribus porro, aspernatur odit a repellat atque maiores
          consequatur labore temporibus illum tempore nesciunt. Laborum atque
          nam debitis sed cupiditate placeat quis, laboriosam veritatis sapiente
          ipsam adipisci officiis dolorum, est necessitatibus commodi dolor vel
          provident officia odit! Voluptas harum tempora magnam corporis maxime,
          magni architecto reiciendis! Voluptatem quas magni deserunt? Ipsum
          reprehenderit inventore distinctio officia repellat quia corrupti
          dicta incidunt neque dignissimos molestias labore eveniet tempore,
          dolore consequuntur exercitationem sed voluptatum aliquid deleniti
          atque! Perspiciatis atque omnis maiores officiis nesciunt porro ut
          provident natus cumque, iure, placeat sapiente quasi nihil numquam
          magni corporis ipsum suscipit nostrum quaerat repellendus. Pariatur
          architecto dolor in autem repudiandae! Minus odit vitae voluptates
          tempora, qui sint aperiam molestias quidem inventore saepe dolores
          quisquam atque, voluptas deserunt. Distinctio earum numquam,
          repellendus quo beatae illo inventore dicta ullam quia suscipit,
          facilis fugiat excepturi soluta. Quisquam labore unde a sed ad autem
          sunt quasi laudantium quo magnam magni, saepe distinctio maxime
          inventore minima odit? Ratione dolorum in, quod id iste similique
          nobis nam expedita tempora enim officiis beatae accusantium minus amet
          suscipit tenetur! Quod fuga vel dolores architecto expedita excepturi.
          Perspiciatis animi magnam nihil earum architecto eveniet assumenda
          ullam minima vero laborum error cum illo unde sapiente dolores,
          molestiae nam. Deserunt, deleniti sint eligendi esse facere, modi
          provident commodi voluptate, non eius id quam a accusamus recusandae
          debitis omnis cum impedit itaque? Ducimus velit tempore aliquid
          molestias fugit eos pariatur architecto voluptatibus quod id neque,
          dolore nam natus explicabo atque est laborum cupiditate! Numquam
          molestias aspernatur repudiandae debitis nesciunt est cum optio
          laudantium eos, obcaecati deleniti? Nulla mollitia, saepe repellendus
          reprehenderit nesciunt labore cum recusandae, laudantium cumque
          consequuntur, illo nihil praesentium hic? Deleniti sequi, eius facere
          recusandae dolores debitis molestiae quis ratione! Rem et expedita
          ipsa consequuntur minus quae commodi atque cupiditate culpa adipisci
          explicabo dolorem corrupti ad molestiae voluptates temporibus debitis,
          possimus libero reprehenderit recusandae illum tenetur qui impedit?
          Quaerat quia, ad quidem quas aperiam repudiandae at eveniet
          accusantium architecto, dolores, possimus aliquam? Doloremque maiores
          hic doloribus repellendus ducimus eveniet facere dicta voluptates at
          placeat aspernatur delectus voluptatum quia mollitia pariatur
          recusandae aliquam corrupti earum corporis assumenda perferendis,
          laborum aut ut. Nulla aperiam animi ipsa doloremque nihil. Rerum quis
          modi vitae animi. Sapiente consequuntur nemo exercitationem quaerat,
          alias explicabo, quod, quam dolorem porro eum a dolor ratione ad
          aliquid cumque. Corrupti quis asperiores est cupiditate accusantium
          unde nam assumenda placeat suscipit, numquam culpa, consequatur iure
          nesciunt provident? Placeat praesentium repellat hic quis nesciunt
          atque quia necessitatibus? Sunt assumenda dolor labore, ab alias
          voluptatem repellat molestiae modi, at maiores obcaecati officia ullam
          laudantium necessitatibus facere excepturi aliquid explicabo, omnis
          iusto rem magni ut dignissimos tenetur. Nam modi aliquid esse quia
          tempore voluptas reprehenderit! Cumque inventore molestiae dicta
          molestias quia quam suscipit, nesciunt quaerat quas, fugit dolorem.
          Ab, magni? Cupiditate explicabo quam facilis deleniti minus
          repudiandae quo incidunt! Atque accusamus quaerat consectetur ut nihil
          odio delectus esse dicta minus adipisci aliquid nam eaque harum
          nesciunt quia numquam perferendis provident commodi minima distinctio,
          est vel. Id repellendus, est culpa neque optio commodi consequuntur
          minima earum quas non perferendis, maiores libero quidem doloribus.
          Totam nemo, doloremque rerum rem illo odit minima laboriosam, incidunt
          ipsum soluta placeat voluptate quaerat aspernatur dolores. Excepturi
          quam cumque animi consequatur, magni quidem ipsam est neque, modi
          soluta illum dignissimos sapiente eos similique repudiandae tempore
          nam possimus! Et pariatur cum magni laboriosam repudiandae! Corporis
          maxime adipisci asperiores commodi reiciendis deleniti? Sequi
          voluptatum voluptas blanditiis voluptatibus repudiandae provident
          ipsam, quos possimus nulla error, neque unde velit molestias debitis
          eveniet delectus impedit ex explicabo libero. Laboriosam
          necessitatibus, temporibus ipsum et modi amet corrupti voluptate eos
          quae, voluptates ullam nulla, voluptatibus quidem animi consequatur
          commodi aspernatur! Vel repudiandae nihil officia veniam magnam earum
          illum ex, quae delectus, quaerat autem quo necessitatibus, dolores rem
          consequuntur! Doloribus sunt dignissimos laborum enim? Autem illum
          sunt recusandae expedita laboriosam, totam quis saepe numquam, est
          sapiente perspiciatis quas neque minima a libero ipsam aliquid dolorem
          facilis temporibus id. Quisquam perferendis saepe vero est
          exercitationem, cumque dicta magni rerum optio iste, tempore id ab
          nihil sunt consequuntur neque ipsa odit necessitatibus soluta sed
          ullam explicabo fuga voluptatibus sint. Enim ipsa tempore mollitia
          suscipit magni facere, maxime assumenda non corrupti quaerat quisquam
          itaque nulla exercitationem nemo in distinctio a architecto. Quis,
          enim dignissimos neque illo fugiat nulla eveniet officia nesciunt
          officiis aperiam ipsum molestias odio ducimus, quidem accusamus
          veritatis tenetur, aut inventore numquam. Laborum, libero tempora
          impedit fugiat magni officia doloremque? Aliquid voluptate nulla vel.
          Maxime porro cumque eaque itaque mollitia. Nostrum totam excepturi
          vel, ducimus laboriosam aut aspernatur eaque vitae dolorum nemo
          dolores amet doloribus cupiditate ea eveniet fugit unde cum sint
          explicabo accusamus omnis eum odio? Obcaecati delectus a quibusdam qui
          consectetur optio veritatis impedit ut dolorum! Nisi perspiciatis quo
          quae optio laborum tenetur nam. Animi placeat, perferendis neque
          repellendus autem sapiente. Ullam eum, aliquid et optio mollitia
          doloremque excepturi reprehenderit aut nobis unde, eligendi quae
          dolorum sint architecto molestiae molestias iste. Pariatur explicabo
          unde, a id laborum quidem ab quod dicta suscipit molestiae perferendis
          quasi recusandae maxime veniam enim quibusdam, quos beatae
          dignissimos. Ratione ipsa, alias rem illo ducimus deleniti soluta,
          fuga corrupti, eligendi nesciunt sed debitis expedita quis ut? A sequi
          similique quisquam atque explicabo laudantium. Voluptatem nobis,
          voluptatibus tenetur, nesciunt atque provident consequuntur expedita
          autem iusto, eligendi placeat temporibus suscipit necessitatibus
          recusandae deleniti maxime optio natus libero laboriosam vel pariatur?
          Incidunt dignissimos laborum quisquam optio, quia enim suscipit rerum
          numquam totam iure nesciunt sapiente id laboriosam sunt delectus quae
          recusandae exercitationem. Eius ratione placeat, voluptatum, vel vitae
          impedit, sequi aliquid iste nihil ducimus earum sit ipsam deserunt
          dolorem minus nesciunt quasi modi? At ex ad veniam eos laudantium
          provident ab velit? Officia exercitationem facere dolor illo
          voluptate, molestiae fuga eveniet veniam libero. Impedit laudantium
          maiores eaque culpa! Earum fugiat itaque nulla atque dolore excepturi
          quo optio facere inventore odio quasi impedit eligendi voluptate modi
          tempore, corrupti commodi nesciunt velit magni numquam! Laboriosam
          placeat illum accusantium rerum quaerat laborum qui quisquam magnam
          debitis neque pariatur eligendi modi illo cupiditate iste distinctio,
          tempora dolor aperiam minima blanditiis tempore corrupti sit?
          Voluptatum non eos ratione eius quae dolores, cumque recusandae
          deserunt, magni dicta alias illum aspernatur repudiandae facilis ab
          velit modi consequatur nulla earum aut veniam obcaecati ex id maiores!
          Consectetur natus fugiat atque illum. Debitis nemo suscipit, inventore
          adipisci quisquam illo dolorum voluptate nisi ipsa, saepe excepturi
          quas consectetur, molestias quasi distinctio! Quisquam aliquam
          eligendi hic distinctio architecto incidunt facere maxime, nesciunt
          dolorum eos et earum mollitia recusandae nemo quis saepe delectus
          possimus voluptatibus nihil sunt? Accusantium, expedita nobis?
          Similique ex blanditiis voluptate sit minima molestias deleniti earum
          ipsa ducimus vitae cumque assumenda architecto, ratione, nesciunt
          eius? Atque cupiditate pariatur nulla similique eius iusto neque
          nostrum officiis! Consequatur molestiae culpa eum. Non accusamus
          corporis incidunt!
        </p>
      </div>
    </div>
  );
};

export default ScrollCheck;
