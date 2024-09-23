import Image from "next/image";
import React from "react";

interface MediaSectionProps {
    left?: boolean;
    image: string;
}
const MediaSection = ({left, image}: MediaSectionProps) => {
    return (
        <div>
            <div className="flex max-md:flex-col">
                <div className={`w-[50%] max-md:w-full ${left ? 'order-2' : 'order-1'}`}>
                    <div className="w-full h-[500px] relative">
                    <Image src={image} alt="hero" className="w-full" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className={`w-[50%] max-md:w-full ${left ? 'order-1' : 'order-2'}`}>
                    <div className="text-white">
                        <h1 className="body-2-medium">Hello</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaSection