import clsx from "clsx";
import Marquee from "@/components/magicui/marquee";
import BlurFade from "./magicui/blur-fade";
import { Card } from "@nextui-org/react";
// import { Logo } from "./icons";

const list = [
    {
        logo: "",
        title: "",
        subtitle: "",
        text: ""
    },
]

const firstRow = list.slice(0, Math.ceil(list.length /2));

const ListCard = ({ logo, title, subtitle, text }: { logo: string; title: string; subtitle: string; text: string }) => {
    return(
        <Card className={clsx(
            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}>
            <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center">
                <span className="w-[50px] h-[50px]">
                    
                </span>
            </div>
            </div>
        </Card>
    )
}

export function listMarquee() {
    return(
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
            <BlurFade delay={0.25} inView>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((list, index) => (
                        <ListCard
                            key={index}
                            logo={list.logo}
                            title={list.title}
                            subtitle={list.subtitle}
                            text={list.text}
                        />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </BlurFade> 
        </div>
    )
}