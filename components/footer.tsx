'use client';
import { Button, Divider, Image, Link } from '@nextui-org/react';
import { GithubIcon, TwitterIcon } from './icons';
import BlurFade from './magicui/blur-fade';

export default function Footer() {
    return (

<footer className="w-full text-white py-12" style={{ backgroundColor: '#0057B8' }}>
    <BlurFade delay={0.25 * 2} inView>
    <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
                <Image src="./logo.png" width={150} />                     
                <h1 className="text-2xl font-bold mb-2 mt-2">ENERGI MASA <br />DEPAN INDONESIA</h1>
            </div>

            <div className="mb-4 md:mb-0">
                <div className="flex space-x-12">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Company</h2>
                        <ul>
                            <li>
                                <Link href="/" className="text-white font-light text-[14px] hover:text-gray-400">Blog</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white font-light text-[14px] hover:text-gray-400">Careers</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white font-light text-[14px] hover:text-gray-400">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Resources</h2>
                        <ul>
                            <li>
                                <Link href="/" className="text-white font-light text-[14px] hover:text-gray-400">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white font-light text-[14px] hover:text-gray-400">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white font-light text-[14px] hover:text-gray-400">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Legal</h2>
                        <ul>
                            <li>
                                <Link href="/" className="text-white font-light text-[14px] hover:text-gray-400">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white font-light text-[14px] hover:text-gray-400">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white font-light text-[14px] hover:text-gray-400">Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white font-light text-[14px] hover:text-gray-400">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Divider className="my-4" />
        <div className=" mt-6 pt-4 text-center flex justify-between">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} SMK TI BAZMA. All rights reserved.
            </p>
            <div className='flex gap-3'>
                <TwitterIcon />
                <GithubIcon />
            </div>
        </div>
    </div>
</BlurFade>
</footer>
    );
}
