import React from 'react'

const StackCardComponent = () => {
    return (
        <>
            <div className="p-5 mt-5 max-w-lg mx-auto bg-white rounded-lg shadow-lg " >
                <div className='relative'>
                    <img className='w-full h-full' src='../Assests/Images/sofa.jpg' alt='' />
                </div>
                <div className='absolute bottom-48'>
                    <div className='p-5 w-96 space-y-2 ml-10 mr-10 bg-white shadow-lg'>
                        <div className='text-xl font-medium text-black'>Tour</div>
                        <p class="text-slate-500 text-xl">7 Nights hotel accommodation.</p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default StackCardComponent;