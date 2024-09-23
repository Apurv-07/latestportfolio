"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CoolButton from "./Animated-button/CoolButton";

const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <div className="px-5 sticky top-0">
        <div className={`flex justify-between w-full bg-[#181818] mt-10 max-md:flex-col ${showMenu ? 'max-md: rounded-[40px]' : 'rounded-[100px] '}`}>
            <div className="relative w-[146px] h-[102px] ml-[42px]">
                <Image src="/images/logo.png" alt="Logo" layout="fill" objectFit="contain" />
            </div>
            <div className="w-[100px] md:hidden box-border absolute right-[70px] flex flex-col gap-6 p-4 mt-1"  onClick={() => setShowMenu(!showMenu)}>
                <div className="h-1 w-full bg-white"></div>
                <div className="h-1 w-full bg-white"></div>
                <div className="h-1 w-full bg-white"></div>
            </div>
            <div className="flex gap-9 items-center text-white pr-[129px] max-md:hidden">
                <h1 className="body-2-medium"><Link href="/">Home</Link></h1>
                <h1 className="body-2-medium"><Link href="/about">About</Link></h1>
                <h1 className="body-2-medium"><Link href="/about">Portfolio</Link></h1>
                <div className="w-[200px]"><CoolButton onClick={() => { }} /></div>
            </div>
            {showMenu &&  <div className="md:hidden bg-[#181818] box-content w-full h-full text-white rounded-bl-[40px] rounded-br-[40px] pb-10">
                <h1 className="body-2-medium text-center"><Link href="/">Home</Link></h1>
                <h1 className="body-2-medium text-center"><Link href="/about">About</Link></h1>
                <h1 className="body-2-medium text-center"><Link href="/about">Portfolio</Link></h1>
                <div className="w-[200px] ml-[50%] translate-x-[-40%]"><CoolButton onClick={() => { }} /></div>
            </div>}
        </div>
        </div>
    );
}

export default Header;