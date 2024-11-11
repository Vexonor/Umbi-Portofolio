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
            <div className="hs-carousel relative overflow-hidden w-full h-[35rem] rounded-lg">
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-1000 opacity-0">
                    <div className="hs-carousel-slide">
                        <div className="flex flex-col bg-Gray justify-center h-full px-10">
                            <Image
                                className="w-full object-cover object-center brightness-50"
                                src="/img/project-1.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute flex flex-col bottom-10 px-10 w-full">
                                <h2 className="text-white font-semibold text-2xl my-5">Umbi Valley</h2>
                                <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">Game</span>
                                <p className="w-[60rem] text-white font-semibold my-5">
                                    Indonesia, sebagai negara agraris dengan populasi lebih dari 270 juta jiwa, memiliki tantangan
                                    besar dalam hal ketahanan pangan dan kemiskinan. Dalam konteks ini, Tujuan Pembangunan
                                    Berkelanjutan (SDGs) yang diadopsi oleh PBB menjadi sangat relevan, terutama SDG 2 (Zero Hunger)
                                    dan SDG 1 (No Poverty). Pertanian adalah tulang punggung ekonomi di banyak daerah di Indonesia,
                                    namun sektor ini seringkali dihadapkan pada berbagai tantangan, seperti perubahan iklim, degradasi
                                    lahan, dan ketidakstabilan harga pasar. Pengentasan Kemiskinan tetap menjadi isu utama di banyak
                                    daerah pedesaan di Indonesia.
                                </p>
                                <a href="" type="button" className="py-3 px-4 w-60 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-victoria text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Check
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="flex flex-col bg-Gray justify-center h-full px-10">
                            <Image
                                className="w-full object-cover object-center brightness-50"
                                src="/img/project-2.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute flex flex-col bottom-10 px-10 w-full">
                                <h2 className="text-white font-semibold text-2xl my-5">Burger Blitz</h2>
                                <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">Game</span>
                                <p className="w-[60rem] text-white font-semibold my-5">
                                    Dengan memanfaatkan sifat alami anak-anak yang mudah bosan, pembuatan game pengenalan poladengan kedok simulasi restoran menjadi salah satu solusi efektif mengenai masalah ini. Denganmemanfaatkan situasi sehari-hari yang akrab bagi anak-anak seperti pemilihan burger sebagai ikon gamedan melalui mekanik pattern recognition yang terintegrasi dengan cerdas dalam permainan, anak-anakakan diajak untuk mengamati pola-pola tertentu dalam tata letak restoran, pesanan pelanggan, atau polaperilaku karakter dalam permainan.
                                </p>
                                <a href="" type="button" className="py-3 px-4 w-60 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-victoria text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Check
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="flex flex-col bg-Gray justify-center h-full px-10">
                            <Image
                                className="w-full h-full object-cover object-top brightness-50"
                                src="/img/project-3.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute flex flex-col bottom-10 px-10 w-full">
                                <h2 className="text-white font-semibold text-2xl my-5">Mockup Website Rental Kendaraan</h2>
                                <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">UI / UX Design</span>
                                <p className="w-[60rem] text-white font-semibold my-5">
                                    Mockup website rental kendaraan ini memiliki halaman utama dengan header berisi logo, navigasi, dan tombol login/daftar,
                                    serta hero section dengan gambar besar kendaraan, kolom pencarian singkat, dan beberapa kendaraan populer yang bisa disewa.
                                    Tersedia juga testimoni pelanggan, serta keunggulan layanan seperti harga terjangkau dan layanan 24/7. Di halaman detail kendaraan,
                                    pengguna dapat melihat foto, deskripsi lengkap, harga, serta formulir pemesanan.
                                </p>
                                <a href="" type="button" className="py-3 px-4 w-60 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-victoria text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Check
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="flex flex-col bg-Gray justify-center h-full px-10">
                            <Image
                                className="w-full h-full object-cover object-top brightness-50"
                                src="/img/project-4.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute flex flex-col bottom-10 px-10 w-full">
                                <h2 className="text-white font-semibold text-2xl my-5">Mockup Website Sistem Informasi SMK Muhammadiyah Plus Batam Kota</h2>
                                <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">UI / UX Design</span>
                                <p className="w-[60rem] text-white font-semibold my-5">
                                    The planned application is designed as a web-based platform utilizing a Content Management System (CMS) model to efficiently manage information for SMK Muhammadiyah Plus Batam Kota. This comprehensive system will cater to various aspects of school management, including school details, news updates, announcements, a gallery for events and achievements, academic information management, directories for teachers, staff, and students, facilities information, social media updates, and admission details (PPDB).
                                </p>
                                <a href="" type="button" className="py-3 px-4 w-60 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-victoria text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Check
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="flex flex-col bg-Gray justify-center h-full px-10">
                            <Image
                                className="w-full h-full object-cover object-top brightness-50"
                                src="/img/project-5.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute flex flex-col bottom-10 px-10 w-full">
                                <h2 className="text-white font-semibold text-2xl my-5">Mockup Website Furniture</h2>
                                <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">UI / UX Design</span>
                                <p className="w-[60rem] text-white font-semibold my-5">
                                    Mockup website furniture ini memiliki halaman utama yang modern dengan header berisi logo, navigasi, ikon keranjang, dan tombol login/daftar, serta hero section dengan gambar furniture besar, tombol Lihat Koleksi, dan kategori produk populer seperti Sofa atau Meja. Di bagian produk
                                    unggulan, pengunjung dapat melihat produk-produk populer lengkap dengan harga dan opsi Tambah ke Keranjang. Halaman detail produk memuat foto, deskripsi, harga, dan opsi pembelian.
                                </p>
                                <a href="" type="button" className="py-3 px-4 w-60 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-victoria text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Check
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="flex flex-col bg-Gray justify-center h-full px-10">
                            <Image
                                className="w-full h-full object-cover object-top brightness-50"
                                src="/img/project-6.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute flex flex-col bottom-10 px-10 w-full">
                                <h2 className="text-white font-semibold text-2xl my-5">Mockup Mobile App Trashify</h2>
                                <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">UI / UX Design</span>
                                <p className="w-[60rem] text-white font-semibold my-5">
                                    This application was developed to help the people of Batam City in managing waste more efficiently, including sorting, reporting problems, and monitoring and analysis by the Government. Additionally, the app designed to reduce the volume of waste in landfills through recycling programs and improve the overall cleanliness of the city.
                                </p>
                                <a href="" type="button" className="py-3 px-4 w-60 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-victoria text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Check
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="flex flex-col bg-Gray justify-center h-full px-10">
                            <Image
                                className="w-full h-full object-cover object-top brightness-50"
                                src="/img/project-7.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute flex flex-col bottom-10 px-10 w-full">
                                <h2 className="text-white font-semibold text-2xl my-5">Website Rental Kendaraan</h2>
                                <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">Web Developer</span>
                                <p className="w-[60rem] text-white font-semibold my-5">
                                    It's a web-based vehicle rental application that services services. Aimed at the manufacture of information systems to help tenants find better vehicle rental services and bookings.
                                </p>
                                <a href="" type="button" className="py-3 px-4 w-60 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-victoria text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Check
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hs-carousel-slide">
                        <div className="flex flex-col bg-Gray justify-center h-full px-10">
                            <Image
                                className="w-full h-full object-cover object-top brightness-50"
                                src="/img/project-8.svg"
                                alt="Umbi Valley"
                                width={1000}
                                height={1000}
                            />
                            <div className="absolute flex flex-col bottom-10 px-10 w-full">
                                <h2 className="text-white font-semibold text-2xl my-5">Website Sistem Informasi SMK Muhammadiyah Plus Batam Kota</h2>
                                <span className="w-max inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-golden-poppy text-white">Web Developer</span>
                                <p className="w-[60rem] text-white font-semibold my-5">
                                    The planned application is designed as a web-based platform utilizing a Content Management System (CMS) model to efficiently manage information for SMK Muhammadiyah Plus Batam Kota. This comprehensive system will cater to various aspects of school management, including school details, news updates, announcements, a gallery for events and achievements, academic information management, directories for teachers, staff, and students, facilities information, social media updates, and admission details (PPDB).
                                </p>
                                <a href="" type="button" className="py-3 px-4 w-60 inline-flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg bg-victoria text-white focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Check
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center size-20 rounded-full text-gray-800 bg-golden-poppy hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                <span className="text-2xl" aria-hidden="true">
                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </span>
                <span className="sr-only">Previous</span>
            </button>
            <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center size-20 rounded-full text-gray-800 bg-golden-poppy hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
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