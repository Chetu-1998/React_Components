import React from 'react'

const CardComponets = () => {
    return (
        <div className='bg-zinc-200 h-screen p-5 '>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl shadow-black border bg-white mx-auto">
                <img className="w-full" src="../Assests/Images/mountain.jpg" alt="Sunset in the mountains" />
                <div>
                    <div className='text-red-500 text-center mt-3'>4 Day ago</div>
                    <div className="font-bold text-3xl mb-2 text-center">Post One</div>
                    <p className="text-gray-700 text-base text-center p-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    
                    <div className='flex bg-red-500 justify-around py-7'>
                        <div>
                            <div className='text-white text-center text-xl'>7</div>
                            <div className='text-yellow-300'>Reads</div>
                        </div>
                        <div>
                            <div className='text-white text-center text-xl'>3224</div>
                            <div className='text-yellow-300'>Views</div>
                        </div>
                        <div>
                            <div className='text-white text-center text-xl'>21</div>
                            <div className='text-yellow-300'>Comments</div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default CardComponets
