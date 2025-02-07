import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-between p-5 text-white md:mx-32">
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-bold">Marvin</h2>
                <p>Thanks for visiting my portfolio</p>
            </div>
            <div className="flex gap-2">
                <Link href={"https://github.com/Fusraumspinne"} target="_blank">
                    <Image src={"/icons/GitHub.png"} alt={"Icon"} width={35} height={35} className="filter invert" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
