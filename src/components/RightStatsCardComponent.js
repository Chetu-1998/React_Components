import React from 'react'

const RightStatsCardComponent = () => {
    return (
        <div className='h-72 w-4/5 mx-auto m-5'>
            <div className='bg-zinc-300 h-full p-10 rounded-xl'>
                <p className='font-bold'>Last 30 days</p>
                <div className='flex col-3 justify-between gap-4 pt-4'>
                    <div className='border h-40 w-96 bg-white rounded-lg shadow-3xl'>
                        <div className='flex p-5 justify-between ml-6 mr-6'>
                            <div>
                                <div className=''>Total Subscribers</div>
                                <div className='font-bold text-3xl'>71,897</div>
                            </div>
                            <div className=''><img src='../Assests/Images/sc.jpg' /></div>
                        </div>
                        <div className='w-full bg-zinc-100 pt-1'>
                            <div className='text-blue-600 my-4 mr-12 h-9 text-right'>View all</div>
                        </div>
                    </div>
                    <div className='border h-40 w-96 bg-white rounded-lg shadow-3xl'>
                        <div className='flex p-5 gap-4 justify-between ml-6 mr-6'>
                            <div>
                                <div className=''>Avg. Open Rate</div>
                                <div className='font-bold text-3xl'>58.16%</div>
                            </div>
                            <div><img src='../Assests/Images/av.jpg' /></div>
                        </div>
                        <div className=' bg-zinc-100 pt-1 h-14'>
                            <div className='text-blue-600 my-4 mr-12 h-9 text-right'>View all</div>
                        </div>
                    </div>
                    <div className='border h-40 w-96 bg-white rounded-lg shadow-3xl'>
                        <div className='flex p-5 gap-4 justify-between ml-6 mr-6'>
                            <div>
                                <div className=''>Avg. Click Rate</div>
                                <div className='font-bold text-3xl'>24.57%</div>
                            </div>
                            <div><img src='../Assests/Images/rv.png' /></div>
                        </div>
                        <div className='w-full bg-zinc-100 pt-1'>
                            <div className='text-blue-600 my-4 mr-12 h-9 text-right'>View all</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightStatsCardComponent
