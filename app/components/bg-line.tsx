import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function BackgroundLine() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 text-white font-montserrat">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Umbi <span className="text-golden-poppy">Dev</span>
            </h2>
            <p className="max-w-xl mx-auto font-semibold text-sm md:text-xl dark:text-neutral-400 text-center">
                " We Growth From Bottom "
            </p>
        </BackgroundLines>
    );
}

export default BackgroundLine;
