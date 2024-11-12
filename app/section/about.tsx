import React from 'react';
import Image from 'next/image';
import Card from '../components/card';

const AboutSection = () => {
    return (
        <section id="about">
            <svg className='w-full h-40' viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" fill="#ffffff">
                <defs>
                    <path id="wavepath" d="M 0 2000 0 500 Q 126.5 245 253 500 t 253 0 253 0 253 0 253 0 253 0  v1000 z" />
                </defs>
                <g >
                    <use href="#wavepath" y="169" fill="#f8c301">
                    </use>
                </g>
            </svg>

            <div className="grid grid-cols-1 p-10 md:p-0 md:grid-cols-2 md:gap-4 bg-golden-poppy h-max">
                <div className="relative col-span-1 flex flex-col justify-center items-center my-10">
                    <Image
                        className="max-w-full size-[15rem] lg:size-[25rem] rounded-b-lg object-cover object-top z-10"
                        src="/img/asset-1.svg"
                        alt="Browser Placeholder"
                        width={800}
                        height={600}
                    />
                    <div className="bg-shalimar rounded-full size-[15rem] lg:size-[25rem] absolute"></div>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-start gap-4">
                    <div className="bg-shalimar rounded-full size-10 lg:size-20 absolute transform -translate-x-[10rem] lg:-translate-y-40 z-0"></div>
                    <div className="flex flex-col text-white font-semibold bg-malibu rounded-md p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                        About Us
                    </div>
                    <div className="flex flex-col w-[15rem] md:w-[20rem] lg:w-[25rem] text-white font-semibold bg-malibu rounded-md p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 gap-4">
                        <div className="bg-shalimar size-3 rounded-full"></div>
                        <p className="text-sm lg:text-xl">
                            Umbi Dev is a growing tech community focused on web development, game development, UI/UX design, and mobile development. With a team of four skilled members, we deliver high-quality, impactful solutions.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <h2 className='text-white text-4xl text-center my-10 font-semibold'>Our Ability</h2>

                    <div className="flex flex-col justify-center items-center my-10 px-5 lg:px-0">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection