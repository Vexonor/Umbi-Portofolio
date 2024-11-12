"use client";

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto text-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 p-10 bg-golden-poppy rounded-md my-10">
                <div className="col-span-1 flex justify-center items-center gap-4 lg:border-white lg:border-r-4">
                    <Image
                        className="size-20 md:size-40 object-cover object-center"
                        src="/img/Logo.svg"
                        alt="Umbi Valley"
                        width={1000}
                        height={1000}
                    />
                    <div className="">
                        <h2 className="text-white font-xl text-start font-semibold">Reach Us At</h2>
                        <h2 className="text-white font-xl text-start font-semibold">Our Social Media</h2>

                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/umbi_dev/">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="size-10" viewBox="0 0 48 48">
                                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                </svg>
                            </a>
                            <a href="https://discord.gg/F4wxkrp2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="size-10" viewBox="0 0 48 48">
                                    <radialGradient id="La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1" cx="24" cy="10.009" r="32.252" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#8c9eff"></stop><stop offset=".368" stopColor="#889af8"></stop><stop offset=".889" stopColor="#7e8fe6"></stop><stop offset="1" stopColor="#7b8ce1"></stop></radialGradient><path fill="url(#La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"></path><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse>
                                </svg>
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="size-10" viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r="20" fill="#66bb6a"></circle><path fill="#fff" d="M35.066,22.035v-0.959h-1.821l-0.8-0.014c-0.684,0-1.151,0.45-1.335,0.974v-0.959h-2.039V27.3 h2.039v-1.334v-2.066c0-0.62,0.503-1.123,1.123-1.123h0.795v4.523h2.039v-1.334v-2.066c0-0.62,0.503-1.123,1.123-1.123h1.012v-1.7 l-0.8-0.014C35.718,21.061,35.25,21.512,35.066,22.035z M20.56,21.206l-1.094,3.597l-1.093-3.597h-2.039l2.215,6.223h0.12h1.597 h0.12l2.213-6.223H20.56z M12.23,21.206v-0.415c0-0.364,0.294-0.658,0.658-0.658h1.287v-1.706h-1.767 c-1.223,0-2.216,0.991-2.216,2.216v0.564H9v1.649h1.192v4.572h2.039v-4.572h1.944v4.572h2.039v-4.572v-1.649h-2.039H12.23V21.206z M25.424,21.122h-0.248c-1.67,0-3.024,1.354-3.024,3.024v0.342c0,1.67,1.354,3.024,3.024,3.024h0.552 c1.143,0,2.122-0.706,2.524-1.705l-1.798-0.525c0,0-0.215,0.616-0.965,0.616c-0.847,0-1.295-0.463-1.354-0.989l0,0v-0.003 c-0.004-0.038-0.006-0.077-0.006-0.115h2.3h2.022v-0.643C28.448,22.476,27.094,21.122,25.424,21.122z M24.13,23.59 c0.025-0.559,0.485-1.006,1.051-1.006h0.194c0.565,0,1.026,0.446,1.051,1.006H24.13z"></path><circle cx="38.852" cy="26.305" r="1.268" fill="#263238"></circle>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="size-10" viewBox="0 0 48 48">
                                <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center px-10">
                    <Image
                        className="max-w-full size-40 md:size-60 rounded-b-lg object-cover object-top z-10"
                        src="/img/asset-1.svg"
                        alt="Browser Placeholder"
                        width={800}
                        height={600}
                    />
                    <div className="flex flex-col w-[15rem] md:w-[25rem] font-semibold bg-white rounded-md p-4 md:p-5 gap-4 text-[0.6rem] md:text-lg">
                        Let&apos;s Collaboration With Us At Your Future Project
                    </div>
                </div>
            </div>
            <span className="text-center text-white">© All rights reserved | Made by Umbi Dev</span>
        </footer>
    )
}

export default Footer