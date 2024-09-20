'use client';

import React, { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Skeleton } from "@nextui-org/react";
import BlurFade from "./magicui/blur-fade";

const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

export default function CardProject() {
    const list = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portofolio-database-fadhil.appspot.com/o/SISMAKO-DATABASE.png?alt=media&token=617aa869-7987-48b2-8677-3815d4128c14',
            title: "Big Data Sismako - Database",
            desc: "is a web platform designed to manage, analyze, and visualize large-scale data for school applications.",
            view: "https://sismako.smktibazma.sch.id/"
        },
        {
            img: "https://nextui.org/images/hero-card-complete.jpeg",
            title: "Big Data Sismako - Keasramaan",
            desc: "A platform designed for school teams to collaborate on various academic and administrative tasks.",
            view: "https://sismako.team.sch.id/"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/portofolio-database-fadhil.appspot.com/o/BLOG.png?alt=media&token=d8b1cf90-c9e3-4659-aead-10d2c358c676',
            title: "Blog Website",
            desc: "A blog platform designed to provide engaging and informative content. It features a user-friendly interface for readers to explore various posts and articles, with the ability to manage content efficiently.",
            view: "https://techby-fadhilio.vercel.app/"
        },
        {
            img: "https://firebasestorage.googleapis.com/v0/b/portofolio-database-fadhil.appspot.com/o/SISMAKO-KEASRAMAAN.png?alt=media&token=edd77a91-5f6d-4bb8-a906-41a42166b2ed",
            title: "Big Data Sismako - Keasramaan",
            desc: "A platform designed for school teams to collaborate on various academic and administrative tasks.",
            view: "https://sismako.team.sch.id/"
        }
    ];

    return (
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-8 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((item, index) => (
                <BlurFade delay={0.25 * 4} inView key={index}>
                    <Card className="p-2">
                        <CardHeader className="py-2 overflow-hidden">
                            <ImageWithSkeleton src={item.img} alt={item.title} />
                        </CardHeader>
                        <CardBody className="max-w-[290px]">
                            <div className="space-y-1">
                                <h4 className="text-medium font-medium">{item.title}</h4>
                                <p className="text-small text-default-400">{truncateText(item.desc, 85)}</p>
                            </div>
                            <Divider className="my-4" />
                            <div className="flex h-5 items-center space-x-4 text-small">
                                <Link isBlock showAnchorIcon className="text-small" href={item.view} target="_blank">View</Link>
                                <Divider orientation="vertical" />
                                <div>Docs</div>
                                <Divider orientation="vertical" />
                                <div>Source</div>
                            </div>
                        </CardBody>
                    </Card>
                </BlurFade>
            ))}
        </div>
    );
}

function ImageWithSkeleton({ src, alt }: { src: string, alt: string }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Skeleton className="w-[270px] h-[170px] rounded-lg" />}
            <Image
                src={src}
                alt={alt}
                className={`object-cover rounded-xl ${isLoading ? 'hidden' : 'block'}`}
                width={270}
                height={160}
                onLoad={() => setIsLoading(false)}
            />
        </>
    );
}
