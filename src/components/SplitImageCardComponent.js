import React from 'react'

const SplitImageCardComponent = () => {
    return (
        <div className='h-screen flex border mx-20 my-20  overflow-hidden rounded-2xl'>
            <div className="bg-cover min-h-screen"><img src='../Assests/Images/meeting.png'></img></div>
            <div className='ml-24 mt-28'>
                <div className='text-violet-700 pt-7'>Our track record</div>
                <div className='text-3xl font-bold pt-2'>Trusted by thousands of creators worldwide</div>
                <p className='pt-3 font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Maiores impedit perferendis suscipit eaque, iste dolor<br /> cupiditate blanditiis ratione.</p>
                <div className='pt-14'>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='border-l-2 space-y-2'>
                            <div className='font-bold ml-6 text-2xl'>8000+</div>
                            <div className='ml-6 font-extralight'>Creators on the platform</div>
                        </div>
                        <div className='border-l-2 space-y-2'>
                            <div className='font-bold ml-6 text-2xl'>3%</div>
                            <div className='ml-6 font-extralight'>Flat platform fee</div>
                        </div>
                        <div className='border-l-2 space-y-2'>
                            <div className='font-bold ml-6 text-2xl'>99.9%</div>
                            <div className='ml-6 font-extralight'>Uptime guarantee</div>
                        </div>
                        <div className='border-l-2 space-y-2'>
                            <div className='font-bold ml-6 text-2xl'>$70M</div>
                            <div className='ml-6 font-extralight'>Paid out to creators</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SplitImageCardComponent;
