"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Image,
  Skeleton,
} from "@nextui-org/react";
import BlurFade from "./magicui/blur-fade";

const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export default function CardProject() {
  const list = [
    {
      img: "./proyek.png",
      title: "Big Data Sismako - Database",
      desc:
        "A web platform designed to manage, analyze, and visualize large-scale data for school applications.",
      view: "https://sismako.smktibazma.sch.id/",
    },
    {
      img: "./proyek.png",
      title: "Big Data Sismako - Keasramaan",
      desc:
        "A platform designed for school teams to collaborate on various academic and administrative tasks.",
      view: "https://sismako.team.sch.id/",
    },
    {
      img: "./proyek.png",
      title: "Blog Website",
      desc:
        "A blog platform designed to provide engaging and informative content.",
      view: "https://techby-fadhilio.vercel.app/",
    },
    {
      img: "./proyek.png",
      title: "Big Data Sismako - Keasramaan",
      desc:
        "A platform designed for school teams to collaborate on various academic and administrative tasks.",
      view: "https://sismako.team.sch.id/",
    },
  ];

  return (
    <div className="text-3xl font-bold">
      <h1>Proyek Siswa</h1>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 pt-10 sm:mt-2 sm:pt-8 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((item, index) => (
          <BlurFade delay={0.25 * 4} inView key={index}>
            <Card className="bg-transparent p-0">
              <CardHeader className="relative overflow-hidden p-0">
                <ImageWithSkeleton src={item.img} alt={item.title} />
                
                {/* Gradient overlay */}
                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-t from-blue-800 to-transparent z-10"></div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 z-20 p-4 text-white">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-sm">{truncateText(item.desc, 60)}</p>
                </div>
              </CardHeader>
            </Card>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

function ImageWithSkeleton({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Skeleton className="w-[270px] h-[170px] rounded-lg" />}
      <Image
        src={src}
        alt={alt}
        className={`object-cover rounded-xl ${isLoading ? "hidden" : "block"}`}
        width={280}
        height={340}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
