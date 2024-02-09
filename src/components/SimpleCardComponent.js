import React from 'react'

const SimpleCardComponent = () => {
    return (
        <div className='h-40 w-11/12 shadow-lg  m-20 mx-auto bg-zinc-200 overflow-hidden '>
            <h1 className='text-black p-6 ml-4'>Pinned Projects</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 lg:pl-10 md:5 sm:4 gap-3 justify-center'>
                <div className='h-16 w-72 shadow-none bg-white flex'>
                    <div className='h-16 w-16 p-5 bg-pink-500 text-center'>GA</div>
                    <div className='p-2 ml-1'>
                        <div className='w-40 '>Graph API</div>
                        <div className='font-light'>16 Members</div>
                    </div>
                    <div className='p-2 pt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColorName" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                    </div>
                </div>
                <div className='h-16 w-72 shadow-md bg-white flex '>
                    <div className='h-16 w-16 bg-violet-500 ml-0 p-5 text-white'>CD</div>
                    <div className='p-2 ml-1'>
                        <div className='w-40'>Component Design</div>
                        <div className='font-light'>12 Members</div>
                    </div>
                    <div className='p-2 pt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColorName" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                    </div>
                </div>
                <div className='h-16 w-72 shadow-md bg-white flex '>
                    <div className='h-16 w-16 bg-yellow-500 ml-0 p-5 text-white'>TS</div>
                    <div className='p-2 ml-1'>
                        <div className='w-40'>Templates</div>
                        <div className='font-light'>16 Members</div>
                    </div>
                    <div className='p-2 pt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColorName" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                    </div>
                </div>
                <div className='h-16 w-72 shadow-md bg-white flex '>
                    <div className='h-16 w-16 bg-orange-500 ml-0 p-5 text-white'>RC</div>
                    <div className='p-2 ml-1'>
                        <div className='w-40'>React Components</div>
                        <div className='font-light'>8 Members</div>
                    </div>
                    <div className='p-2 pt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColorName" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleCardComponent
