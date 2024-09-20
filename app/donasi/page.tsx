import CardBlog from "@/components/card-blog";
import CardProject from "@/components/card-project";
import { title } from "@/components/primitives";

import Banner from "@/components/banner";
import Description from "@/components/desc";
import Footer from "@/components/footer";
import Marquee from "@/components/magicui/marquee";


export default function Donasi() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <Banner
        imgSrc={
          "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
        }
        heading={<>Donasi</>}
      />
      <div className="container mx-auto my-auto px-4 max-w-7xl mt-10">
        <Description
          description={
            <div className="text-lg">
              <p >
                Yayasan Baituzzakah Pertamina (Bazma) adalah Lembaga Nirlaba
                yang berkhidmat mengangkat harkat sosial kemanusiaan dengan
                mendayagunakan dana zakat, infak/sedekah dan wakaf (Ziswaf) yang
                bersumber dari masyarakat. Dana yang terhimpun disalurkan dalam
                beragam bentuk program sosial, pendidikan, kesehatan, pelayanan
                dhuafa, penanganan bencana dan pemberdayaan ekonomi masyarakat
                di seluruh Indonesia.
              </p>
                <br />
              <p >
                Salah satu program yang sedang digulirkan adalah wakaf
                Pembangunan SMK TI Bazma, sebuah model pengelolaan pendidikan
                yang diharapkan bisa mencetak kader-kader berkarakter unggul dan
                berdaya saing bersaing di era global.
              </p>
              <br />
              <p >
                Salurkan Wakaf terbaik anda melalui Bank Syariah Indonesia
                (BSI) :
                <br />
              </p>
            </div>
          }
        />
      </div>
      <Footer />
    </section>
  );
}
