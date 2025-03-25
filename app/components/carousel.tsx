"use client";

import React from 'react';
import Image from 'next/image';

const Carousel = () => {
    return (
        <div data-hs-carousel='{
                    "loadingclassNamees": "opacity-0",
                    "dotsItemclassNamees": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
                    "isAutoPlay": true
                }' className="relative">
            <div className="hs-carousel relative overflow-hidden w-full h-[25rem] md:h-[35rem] rounded-lg">
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-1000 opacity-0">
                    <div className="hs-carousel-slide bg-white md:bg-none">
                        <div className="relative bg-white border shadow-sm lg:rounded-xl">
                            <Image
                                className="w-full h-32 md:h-80 lg:h-full object-cover object-center md:brightness-50"
                                src="/img/project-1.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute top-32 md:top-80 lg:top-72 start-0 end-0 text-black lg:text-white font-montserrat">
                                <div className="p-4 md:p-5">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-xl font-bold">
                                            Umbi Valley
                                        </h3>
                                        <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">Game</span>
                                    </div>
                                    <p className="text-xs lg:text-base overflow-y-auto h-36 mt-3">
                                        Indonesia, sebagai negara agraris dengan populasi lebih dari 270 juta jiwa, memiliki tantangan
                                        besar dalam hal ketahanan pangan dan kemiskinan. Dalam konteks ini, Tujuan Pembangunan
                                        Berkelanjutan (SDGs) yang diadopsi oleh PBB menjadi sangat relevan, terutama SDG 2 (Zero Hunger)
                                        dan SDG 1 (No Poverty). Pertanian adalah tulang punggung ekonomi di banyak daerah di Indonesia,
                                        namun sektor ini seringkali dihadapkan pada berbagai tantangan, seperti perubahan iklim, degradasi
                                        lahan, dan ketidakstabilan harga pasar. Pengentasan Kemiskinan tetap menjadi isu utama di banyak
                                        daerah pedesaan di Indonesia.
                                    </p>
                                    <a href="https://youtu.be/6KEa5zS13c8?si=Ze_g0YZEZj5hxpG4" className="w-full flex justify-center" target="_blank">
                                        <button className="fixed bottom-5 w-max md:w-[20rem] text-white rounded-sm cursor-pointer bg-victoria px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F8C301,-0.5rem_-0.5rem_#F8F8AB] transition">
                                            Check !
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide bg-white md:bg-none">
                        <div className="relative bg-white border shadow-sm lg:rounded-xl">
                            <Image
                                className="w-full h-32 md:h-80 lg:h-full object-cover object-center md:brightness-50"
                                src="/img/project-2.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute top-32 md:top-80 lg:top-72 start-0 end-0 text-black lg:text-white font-montserrat">
                                <div className="p-4 md:p-5">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-xl font-bold">
                                            Burger Blitz
                                        </h3>
                                        <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">Game</span>
                                    </div>
                                    <p className="text-xs lg:text-base overflow-y-auto h-36 mt-3">
                                        Dengan memanfaatkan sifat alami anak-anak yang mudah bosan,
                                        pembuatan game pengenalan poladengan kedok simulasi restoran
                                        menjadi salah satu solusi efektif mengenai masalah ini. Dengan
                                        memanfaatkan situasi sehari-hari yang akrab bagi anak-anak seperti
                                        pemilihan burger sebagai ikon gamedan melalui mekanik pattern recognition
                                        yang terintegrasi dengan cerdas dalam permainan, anak-anakakan diajak untuk
                                        mengamati pola-pola tertentu dalam tata letak restoran, pesanan pelanggan, atau
                                        polaperilaku karakter dalam permainan.
                                    </p>
                                    <a href="https://youtu.be/PSTpbxVHQmQ?si=U34h3xKY-e2weCtR" className="w-full flex justify-center" target="_blank">
                                        <button className="fixed bottom-5 w-max md:w-[20rem] text-white rounded-sm cursor-pointer bg-victoria px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F8C301,-0.5rem_-0.5rem_#F8F8AB] transition">
                                            Check !
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide bg-white md:bg-none">
                        <div className="relative bg-white border shadow-sm lg:rounded-xl">
                            <Image
                                className="w-full h-32 md:h-80 lg:h-full object-cover object-top md:brightness-50"
                                src="/img/project-3.svg"
                                alt="Project 3"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute top-32 md:top-80 lg:top-72 start-0 end-0 text-black lg:text-white font-montserrat">
                                <div className="p-4 md:p-5">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-sm md:text-xl font-bold">
                                            su-re.co Website Design
                                        </h3>
                                        <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[0.5rem] text-center md:text-xs font-semibold bg-victoria text-white">UI / UX Design</span>
                                    </div>
                                    <p className="text-xs lg:text-base overflow-y-auto h-32 mt-3">
                                        Redesigning the UI/UX of a website using Figma to create a clean and visually appealing design. This involves applying UX principles by improving the website's layout structure to minimize excessive scrolling and enhance user convenience. Additionally, it includes analyzing UX issues such as inconsistent navigation, content, and typography to ensure a seamless and user-friendly experience.
                                    </p>
                                    <a href="https://www.figma.com/design/j5T56OiAm48Z7JFgH6IU6X/su-re.co-Design?node-id=19-55&t=Me81FSkB3uxhn4j3-1" className="w-full flex justify-center" target="_blank">
                                        <button className="fixed bottom-5 w-max md:w-[20rem] text-white rounded-sm cursor-pointer bg-victoria px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F8C301,-0.5rem_-0.5rem_#F8F8AB] transition">
                                            Check !
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide bg-white md:bg-none">
                        <div className="relative bg-white border shadow-sm lg:rounded-xl">
                            <Image
                                className="w-full h-32 md:h-80 lg:h-full object-cover object-top md:brightness-50"
                                src="/img/project-4.svg"
                                alt="Project 3"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute top-32 md:top-80 lg:top-72 start-0 end-0 text-black lg:text-white font-montserrat">
                                <div className="p-4 md:p-5">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-xs md:text-xl font-bold">
                                            Mockup Website Sistem Informasi SMK Muhammadiyah Plus Batam Kota
                                        </h3>
                                        <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[0.5rem] text-center md:text-xs font-semibold bg-victoria text-white">UI / UX Design</span>
                                    </div>
                                    <p className="text-xs lg:text-base overflow-y-auto h-28 mt-3">
                                        The planned application is designed as a web-based platform utilizing a Content Management System
                                        (CMS) model to efficiently manage information for SMK Muhammadiyah Plus Batam Kota.
                                        This comprehensive system will cater to various aspects of school management, including school
                                        details, news updates, announcements, a gallery for events and achievements, academic information
                                        management, directories for teachers, staff, and students, facilities information, social media
                                        updates, and admission details (PPDB).
                                    </p>
                                    <a href="https://www.figma.com/design/chXk9NkiJKUIxMHeW3oPrV/Wireframe?node-id=0-1&t=LmW8JqdLCVD2XvYE-1" className="w-full flex justify-center" target="_blank">
                                        <button className="fixed bottom-5 w-max md:w-[20rem] text-white rounded-sm cursor-pointer bg-victoria px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F8C301,-0.5rem_-0.5rem_#F8F8AB] transition">
                                            Check !
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide bg-white md:bg-none">
                        <div className="relative bg-white border shadow-sm lg:rounded-xl">
                            <Image
                                className="w-full h-32 md:h-80 lg:h-full object-cover object-top md:brightness-50"
                                src="/img/project-5.svg"
                                alt="Project 3"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute top-32 md:top-80 lg:top-72 start-0 end-0 text-black lg:text-white font-montserrat">
                                <div className="p-4 md:p-5">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-sm md:text-xl font-bold">
                                            Mockup Website Furniture
                                        </h3>
                                        <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[0.5rem] text-center md:text-xs font-semibold bg-victoria text-white">UI / UX Design</span>
                                    </div>
                                    <p className="text-xs lg:text-base overflow-y-auto h-32 mt-3">
                                        Mockup website furniture ini memiliki halaman utama yang modern dengan header berisi logo, navigasi, ikon keranjang, dan tombol login/daftar, serta hero section dengan gambar furniture besar, tombol Lihat Koleksi, dan kategori produk populer seperti Sofa atau Meja. Di bagian produk
                                        unggulan, pengunjung dapat melihat produk-produk populer lengkap dengan harga dan opsi Tambah ke Keranjang. Halaman detail produk memuat foto, deskripsi, harga, dan opsi pembelian.
                                    </p>
                                    <a href="https://www.figma.com/design/4uSS9yowz1L8OhGsCG4yJV/Flipper?node-id=0-1&t=WqgsGNeSaNybXRDg-1" className="w-full flex justify-center" target="_blank">
                                        <button className="fixed bottom-5 w-max md:w-[20rem] text-white rounded-sm cursor-pointer bg-victoria px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F8C301,-0.5rem_-0.5rem_#F8F8AB] transition">
                                            Check !
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide bg-white md:bg-none">
                        <div className="relative bg-white border shadow-sm lg:rounded-xl">
                            <Image
                                className="w-full h-32 md:h-80 lg:h-full object-cover object-top md:brightness-50"
                                src="/img/project-6.svg"
                                alt="Project 3"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute top-32 md:top-80 lg:top-72 start-0 end-0 text-black lg:text-white font-montserrat">
                                <div className="p-4 md:p-5">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-sm md:text-xl font-bold">
                                            Mockup Mobile App Trashify
                                        </h3>
                                        <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[0.5rem] text-center md:text-xs font-semibold bg-victoria text-white">UI / UX Design</span>
                                    </div>
                                    <p className="text-xs lg:text-base overflow-y-auto h-32 mt-3">
                                        This application was developed to help the people of Batam City in managing waste more efficiently,
                                        including sorting, reporting problems, and monitoring and analysis by the Government. Additionally,
                                        the app designed to reduce the volume of waste in landfills through recycling programs and improve
                                        the overall cleanliness of the city.
                                    </p>
                                    <a href="https://www.figma.com/design/Q9svl21EOOntoROhBDbsz2/Desain-Antarmuka-PBL-IF-09?node-id=247-43&t=qnqvbUQZByDbDVqi-1" className="w-full flex justify-center" target="_blank">
                                        <button className="fixed bottom-5 w-max md:w-[20rem] text-white rounded-sm cursor-pointer bg-victoria px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F8C301,-0.5rem_-0.5rem_#F8F8AB] transition">
                                            Check !
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide bg-white md:bg-none">
                        <div className="relative bg-white border shadow-sm lg:rounded-xl">
                            <Image
                                className="w-full h-32 md:h-80 lg:h-full object-cover object-top md:brightness-50"
                                src="/img/project-8.svg"
                                alt="Project 3"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute top-32 md:top-80 lg:top-72 start-0 end-0 text-black lg:text-white font-montserrat">
                                <div className="p-4 md:p-5">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-sm md:text-xl font-bold">
                                            Website Sistem Informasi SMK Muhammadiyah Plus Batam Kota
                                        </h3>
                                        <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[0.5rem] text-center md:text-xs font-semibold bg-malibu text-white">Website Application</span>
                                    </div>
                                    <p className="text-xs lg:text-base overflow-y-auto h-24 mt-3">
                                        The planned application is designed as a web-based platform utilizing a Content Management System (CMS) model to
                                        efficiently manage information for SMK Muhammadiyah Plus Batam Kota. This comprehensive system will cater to various
                                        aspects of school management, including school details, news updates, announcements, a gallery for events and achievements,
                                        academic information management, directories for teachers, staff, and students, facilities information, social media updates,
                                        and admission details (PPDB).
                                    </p>
                                    <a href="https://github.com/fathualr/PBL-SistemInformasiSMK.git" className="w-full flex justify-center" target="_blank">
                                        <button className="fixed bottom-5 w-max md:w-[20rem] text-white rounded-sm cursor-pointer bg-victoria px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F8C301,-0.5rem_-0.5rem_#F8F8AB] transition">
                                            Check !
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-1/4 md:inset-y-1/3 start-0 inline-flex justify-center items-center size-10 md:size-20 rounded-full text-gray-800 bg-golden-poppy hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                <span className="text-2xl" aria-hidden="true">
                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </span>
                <span className="sr-only">Previous</span>
            </button>
            <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-1/4 md:inset-y-1/3 end-0 inline-flex justify-center items-center size-10 md:size-20 rounded-full text-gray-800 bg-golden-poppy hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                <span className="sr-only">Next</span>
                <span className="text-2xl" aria-hidden="true">
                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </span>
            </button>

            <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
        </div>

    )
}

export default Carousel