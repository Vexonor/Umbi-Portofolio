import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function BackgroundLine() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col md:px-4 text-white font-montserrat">
            <h2 className="bg-clip-text text-transparent text-center text-4xl lg:text-7xl py-2 md:py-10 md:relative z-20 font-bold tracking-tight">
                Umbi <span className="text-golden-poppy">Dev</span>
            </h2>
            <p className="w-screen md:max-w-xl mx-auto font-semibold text-xl dark:text-neutral-400 text-center">
                " We Growth From The Bottom "
            </p>
        </BackgroundLines>
    );
}

export default BackgroundLine;
