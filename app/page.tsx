"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import CardProject from "@/components/card";
import { SkillsMarquee } from "@/components/demo";
import Footer from "@/components/footer";
import Description from "@/components/desc";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Banner
        imgSrc={
          "https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
        }
        heading={
          <>
            ENERGI MASA <br /> DEPAN INDONESIA.
          </>
        }
      />
      <div className="container mx-auto my-auto px-4 max-w-7xl mt-10">
        <h1 className="text-4xl font-bold text-blue-800">Daftar Mitra</h1>
        <Description
          description={
            <>
              <p className="text-lg text-gray-500">
                SMK TI Bazma adalah wujud cita-cita bersama dalam rangka
                memberikan ruang bagi peserta didik untuk dapat berkarya dan
                menjadi generasi produktif. Dengan bekal kecerdasan kognitif,
                emosional, dan spiritual yang baik, siswa-siswa ini diharapkan
                dapat menjadi generasi unggul dan berdaya saing global.
              </p>

              <p className="text-lg text-gray-500">
                Oleh karena itu, SMK TI Bazma menjalin kerja sama dengan
                berbagai mitra Dunia Usaha dan Dunia Industri (DU/DI) sebagai
                upaya menyelaraskan kebutuhan industri dengan persiapan SDM yang
                kompeten. Bentuk kerja sama tersebut, antara lain:
              </p>

              <ol className="list-decimal ml-6 text-lg text-gray-500">
                <li>
                  Memberikan kesempatan kepada siswa untuk melakukan Praktek
                  Kerja Industri (Prakerin) sebagai bekal persiapan menghadapi
                  dunia kerja.
                </li>
                <li>
                  Membantu dalam menyusun kurikulum yang selaras dengan sektor
                  industri masa kini untuk meningkatkan kemampuan SDM agar dapat
                  bersaing di dunia industri.
                </li>
              </ol>
            </>
          }
        />
      </div>
      <div className="container mx-auto my-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-blue-800">Proyek Siswa</h1>
        <CardProject />
      </div>
      <div className="container mx-auto my-auto px-4 max-w-7xl">
        <SkillsMarquee />
      </div>
      <Footer />
      {/* <div className="inline-block max-w-xl text-center justify-center">
        <BlurFade delay={0.25} inView>
          <h1 className={title()}>Hi, I&apos;m&nbsp;</h1>
          <h1 className={title({ color: "green" })}>Fadhil&nbsp;</h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <h2 className={subtitle({ class: "mt-4" })}>
            As an enthusiastic web developer, I always like to explore new knowledge. Don&apos;t be shy - lets talk.
          </h2>
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 3} inView>
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Linkedin
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </BlurFade> */}
    </section>
  );
}
