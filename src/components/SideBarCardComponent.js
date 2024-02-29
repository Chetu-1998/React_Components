import React from 'react'

const SideBarCardComponent = () => {

    const imageURL = '../Assests/Images/pic3.png';

    return (
        <div className="flex absolute duration-700" style={{ backgroundImage: `url(${imageURL})` }}>
            <div className="relative mix-blend-darken sidebar min-h-screen w-[3.80rem] overflow-hidden border-r hover:w-96 hover:bg-red-500 hover:shadow-lg duration-500 delay-300">
                <div className="flex h-screen flex-col justify-between pt-2 pb-6 bg-red-500">
                    <ul className="mt-6 space-y-3 tracking-wide">
                        <li className="min-w-max">
                            <a href="#" aria-label="About" className="flex items-center space-x-4 hover:bg-black px-4 py-3  text-white">
                                <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="font-medium">About</span>
                            </a>
                        </li>
                        <li className="min-w-max">
                            <a href="#" className="group flex items-center space-x-4 px-4 py-3 hover:bg-black text-white">
                                <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M5 7h14a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zM2 8a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V8zm8 1l4 3-4 3V9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="group-hover:text-white">Work</span>
                            </a>
                        </li>
                        <li className="min-w-max">
                            <a href="#" className="group flex items-center space-x-4 px-4 py-3 hover:bg-black text-white">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="2em"
                                    width="2em"
                                >
                                    <path d="M14 13.5h-4a.5.5 0 000 1h4a.5.5 0 000-1zm-4-3h1a.5.5 0 000-1h-1a.5.5 0 000 1zm6 0a.501.501 0 01-.5-.5V9A3.504 3.504 0 0012 5.5h-2A4.505 4.505 0 005.5 10v4a4.505 4.505 0 004.5 4.5h4a4.505 4.505 0 004.5-4.5v-1a2.502 2.502 0 00-2.5-2.5zm1.5 3.5a3.504 3.504 0 01-3.5 3.5h-4A3.504 3.504 0 016.5 14v-4A3.504 3.504 0 0110 6.5h2A2.502 2.502 0 0114.5 9v1c0 .828.672 1.5 1.5 1.5s1.5.672 1.5 1.5v1zM20 1H4a3.003 3.003 0 00-3 3v16a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V4a3.003 3.003 0 00-3-3zm2 19a2.003 2.003 0 01-2 2H4a2.003 2.003 0 01-2-2V4a2.003 2.003 0 012-2h16a2.003 2.003 0 012 2v16z" />
                                </svg>
                                <span className="group-hover:text-white">Blog</span>
                            </a>
                        </li>
                        <li className="min-w-max">
                            <a href="#" className="group flex items-center space-x-4 px-4 py-3 hover:bg-black text-white">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="2em"
                                    width="2em"
                                >
                                    <path d="M21.945 2.765a1.552 1.552 0 00-1.572-.244L2.456 9.754a1.543 1.543 0 00.078 2.884L6.4 13.98l2.095 6.926c.004.014.017.023.023.036a.486.486 0 00.093.15.49.49 0 00.226.143c.01.004.017.013.027.015h.006l.003.001a.448.448 0 00.233-.012c.008-.002.016-.002.025-.005a.495.495 0 00.191-.122c.006-.007.016-.008.022-.014l3.013-3.326 4.397 3.405c.267.209.596.322.935.322.734 0 1.367-.514 1.518-1.231L22.469 4.25a1.533 1.533 0 00-.524-1.486zM9.588 15.295l-.707 3.437-1.475-4.878 7.315-3.81-4.997 4.998a.498.498 0 00-.136.253zm8.639 4.772a.54.54 0 01-.347.399.525.525 0 01-.514-.078l-4.763-3.689a.5.5 0 00-.676.06L9.83 19.07l.706-3.427 7.189-7.19a.5.5 0 00-.584-.797L6.778 13.054l-3.917-1.362A.526.526 0 012.5 11.2a.532.532 0 01.334-.518l17.914-7.233a.536.536 0 01.558.086.523.523 0 01.182.518l-3.261 16.015z" />
                                </svg>
                                <span className="group-hover:text-white">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-screen bg-cover ' ></div>
        </div>

    )
}

export default SideBarCardComponent;
