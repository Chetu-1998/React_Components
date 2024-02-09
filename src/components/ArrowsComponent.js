import React from 'react'

const ArrowsComponent = () => {
    return (
        <>
            <div className='container'>
                <div className='m-44 flex gap-24'>
                    <div>
                        <div className='ml-16 h-8 w-20 border border-black rounded-2xl bg-white'></div>
                        <div class="absolute h-px w-36 ml-36 top-48 bg-black"></div>
                        <div className='absolute h-0 w-0 border-y-8 border-y-transparent border-l-[16px] ml-52 top-48  border-black'></div>                    
                    </div>
                    <div>
                        <div className='ml-12 h-8 w-20 border border-black rounded-2xl bg-zinc-400 relative'></div>
                        <div class="absolute h-px w-36 ml-32 top-48 bg-black "></div>
                    </div>
                    <div>
                        <div className='ml-12 h-8 w-20 border border-black rounded-2xl bg-blue-100 relative'></div>
                        <div class="absolute h-px w-36 ml-32 top-48 bg-black "></div>
                    </div>
                    <div>
                    <div className='ml-12 h-8 w-20 border border-black rounded-2xl bg-blue-700 relative'></div>
                    <div class="absolute h-px w-36 ml-32 top-48 bg-black"></div>
                    </div>
                    <div>
                        <div className='ml-12 h-8 w-20 border border-black rounded-2xl bg-violet-950 relative'></div>
                        <div class="absolute h-44 w-px ml-32 mr-4 top-58 right-80 bg-black "></div>
                    </div>
                </div>
                
                <div className='border border-black h-96 w-auto mb-12 rounded-lg mx-auto ml-52 mr-36'></div>
            </div>


        </>
    )
}

export default ArrowsComponent;
