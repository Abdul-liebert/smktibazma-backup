'use client'
import React from "react";
import { Tabs, Tab, Avatar } from "@nextui-org/react";
import dataBlog from "@/data/blog";
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Skeleton } from "@nextui-org/react";

import BlurFade from "./magicui/blur-fade";

const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

export default function CardBlog() {
    const categories = [
        {name: 'View All'},
        {name: 'Software Enginnering'},
        {name: 'Design'},
        {name: 'Data Science'},
    ]
    return (
        <>
            <div className="flex flex-wrap gap-4">
            <Tabs aria-label="Tabs colors">
  {categories.map((item, index) => (
    <Tab key={index} title={item.name}>
      {/* Content for the tab */}
    </Tab>
  ))}
</Tabs>

            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-8 pt-10 sm:mt-4 sm:pt-8 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {dataBlog.map((item, index) => (
                    <BlurFade delay={0.25 * 4} inView key={index}>
                        <Card className="p-2">
                            <CardHeader className="">
                                <Image
                                    isBlurred
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src={item.img}
                                    width={270}
                                />
                            </CardHeader>
                            <CardBody className="max-w-[290px]">
                                <div className="space-y-1">
                                    <h4 className="text-medium font-medium">{item.title}</h4>
                                    <p className="text-small text-default-400">{truncateText(item.description, 65)}</p>
                                </div>
                                <Divider className="my-4" />
                                <div className="flex h-5 items-center space-x-4 text-small">
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm" />
                                    <div>
                                        <p>{item.author}</p>
                                        <p className="text-gray-400">{item.datePublished}</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </BlurFade>
                ))}
            </div>
        </>
    );
}
