import React, { useState } from 'react'

const StackedCardComponent = () => {

    const menus = ['Office Management', 'Online Grocery Store', 'Weather App','Music App']

    const [Open, setOpen] = useState(false);

    const [Open1, setOpen1] = useState(false)

    const popHandler = () => {
        setOpen(!Open)
    }

    const popHandler1 = () => {
        setOpen1(!Open1)
    }

    return (
        <div className='bg-zinc-200 h-screen '>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl shadow-black border bg-white mx-auto">
                <img className="w-full" src="../Assests/Images/profile.jpg" alt="Sunset in the mountains" />
                <div>
                    <div className='text-red-500 text-center mt-3'>Software Developer</div>
                    <div className="font-bold text-3xl mb-2 text-center">Cooper Jake</div>
                    <p className="text-gray-700 text-base text-center p-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>

                    <div className='flex bg-red-500 justify-around py-5'>
                        <div>
                            <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={popHandler}>
                                <div className='text-white text-center text-xl'>4</div>
                                <div className='text-yellow-300'>Projects</div>
                            </button>
                            {Open && (
                            <div data-popover id="popover-click" role="tooltip">
                                <div className="w-48 h-28 py-2 bg-white absolute left-1/4 bottom-14 ml-4 mt-10">
                                    <ul className='list-disc list-inside cursor-pointer px-3'>
                                        {menus.map((value) => (
                                            <li key={value}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div data-popper-arrow></div>
                            </div>
                            )}
                        </div>
                        <div>
                            <button data-popover-target="popover-left" data-popover-placement="left" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={popHandler1}>
                                <h1 className='text-white text-center text-xl'>7</h1>
                                <h1 className='text-yellow-300'>Skills</h1>
                            </button>
                            {Open1 && (
                            <div className='absolute right-auto mt-1'>
                                <div className="bg-white w-44 h-12 overflow-auto">
                                    <p className='px-2'>PYTHON, HTML, CSS</p>
                                    <p className='uppercase px-2'>Javascript, Django, Bootstrap, React</p>
                                </div>
                                <div data-popper-arrow></div>
                            </div>
                            )}
                        </div>                           
                        <div className='mt-2'>
                            <div className='text-white text-center text-xl'>1</div>
                            <div className='text-yellow-300'>Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StackedCardComponent
