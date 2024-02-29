import React from 'react'

const BackgroundImageCardComponents = () => {
    const ImageURL = '../Assests/Images/meeting.png';

    return (
        <div className='h-screen border mx-20 overflow-hidden rounded-2xl'>
            <div className='h-full bg-no-repeat bg-cover grayscale' style={{ backgroundImage: `url(${ImageURL})` }}>
                <div className='ml-24 pt-24'>
                    <div className='text-white pt-7 text-xl'>Our track record</div>
                    <div className='text-3xl font-bold pt-2 text-white'>Trusted by thousands of creators worldwide</div>
                    <p className='pt-3 font-light text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Maiores impedit perferendis suscipit eaque, iste dolor<br /> cupiditate blanditiis ratione.</p>
                    <div className='pt-14'>
                        <div className='flex gap-20'>
                            <div className='border-l-2 space-y-2'>
                                <div className='font-bold ml-6 text-2xl text-white'>8000+</div>
                                <div className='ml-6  text-white'>Creators on the platform</div>
                            </div>
                            <div className='border-l-2 space-y-2'>
                                <div className='font-bold ml-6 text-2xl text-white'>3%</div>
                                <div className='ml-6  text-white'>Flat platform fee</div>
                            </div>
                            <div className='border-l-2 space-y-2'>
                                <div className='font-bold ml-6 text-2xl text-white'>99.9%</div>
                                <div className='ml-6  text-white'>Uptime guarantee</div>
                            </div>
                            <div className='border-l-2 space-y-2'>
                                <div className='font-bold ml-6 text-2xl text-white'>$70M</div>
                                <div className='ml-6 text-white'>Paid out to creators</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BackgroundImageCardComponents;
