import React from 'react';
import { GoArrowRight } from "react-icons/go";

const NarrowCardComponent = () => {
    return (
        <div className='h-96 w-80 shadow-sm shadow-white mx-auto my-12 border bg-zinc-100 rounded-md'>
            <div>
                <div className='m-5'>
                    <div className='text-xl font-bold'>Amount</div>
                    <div className='flex items-center justify-between'>
                        <div className='font-bold text-xl'>$10,560.00</div>
                        <button className='outline outline-offset-2 outline-3 outline-green-500 bg-green-100 rounded-lg px-4 py-1 font-bold'>Paid</button>
                    </div>
                </div>
                <div className='w-84 border overflow-hidden'></div>
                <div className='mt-7'>
                    <div className='flex gap-5 m-4'>
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2em"
                            width="2em"

                        >
                            <path d="M12 2A10.13 10.13 0 002 12a10 10 0 004 7.92V20h.1a9.7 9.7 0 0011.8 0h.1v-.08A10 10 0 0022 12 10.13 10.13 0 0012 2zM8.07 18.93A3 3 0 0111 16.57h2a3 3 0 012.93 2.36 7.75 7.75 0 01-7.86 0zm9.54-1.29A5 5 0 0013 14.57h-2a5 5 0 00-4.61 3.07A8 8 0 014 12a8.1 8.1 0 018-8 8.1 8.1 0 018 8 8 8 0 01-2.39 5.64z" />
                            <path d="M12 6a3.91 3.91 0 00-4 4 3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4zm0 6a1.91 1.91 0 01-2-2 1.91 1.91 0 012-2 1.91 1.91 0 012 2 1.91 1.91 0 01-2 2z" />
                        </svg>
                        <div className='font-bold text-xl'>Alex Curren</div>
                    </div>
                    <div className='flex gap-5 m-4'>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="2em"
                            width="2em"
                        >
                            <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z" />
                            <path d="M11 7.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-2 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z" />
                        </svg>
                        <div className='text-zinc-500 text-xl'>January 31, 2023</div>
                    </div>
                    <div className='flex gap-5 m-4'>
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="2em"
                            width="2em"

                        >
                            <path d="M928 160H96c-17.7 0-32 14.3-32 32v160h896V192c0-17.7-14.3-32-32-32zM64 832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V440H64v392zm579-184c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72z" />
                        </svg>
                        <div className='text-zinc-500  text-xl'>Paid with MasterCard</div>
                    </div>
                    <div className='w-84 border overflow-hidden'></div>
                    <div className='flex'>
                        <div className='text-xl font-bold m-4 pt-5'>Download receipt</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NarrowCardComponent;
