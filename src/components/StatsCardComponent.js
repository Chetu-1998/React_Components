import React from 'react'

const StatsCardComponent = () => {
    return (
        <div className='border h-72 w-4/5 mx-auto m-5'>
            <div className='bg-zinc-300 h-full p-10'>
                <p className='font-bold'>Last 30 days</p>
                <div className='flex col-3 justify-between gap-4 pt-4'>
                    <div className='border h-40 w-96 bg-white rounded-lg'>
                        <div className='flex p-5 gap-4'>
                            <div><img src='../Assests/Images/sc.jpg' /></div>
                            <div>
                                <div className=''>Total Subscribers</div>
                                <div className='font-bold text-3xl'>71,897</div>
                            </div>
                        </div>
                        <div className='w-full bg-zinc-100 pt-1'>
                            <div className='text-blue-600 my-4 ml-5 h-10'>View all</div>
                        </div>
                    </div>
                    <div className='border h-40 w-96 bg-white rounded-lg'>
                        <div className='flex p-5 gap-4'>
                        <div><img src='../Assests/Images/av.jpg' /></div>
                        <div>
                            <div className=''>Avg. Open Rate</div>
                            <div className='font-bold text-3xl'>58.16%</div>
                        </div>
                        </div>
                        <div className='w-full bg-zinc-100 pt-1'>
                            <div className='text-blue-600 my-4 ml-5 h-10'>View all</div>
                        </div>
                    </div>
                    <div className='border h-40 w-96 bg-white rounded-lg'>
                        <div className='flex p-5 gap-4'>
                        <div><img src='../Assests/Images/rv.png' /></div>
                        <div>
                            <div className=''>Avg. Click Rate</div>
                            <div className='font-bold text-3xl'>24.57%</div>
                        </div>
                        </div>
                        <div className='w-full bg-zinc-100 pt-1'>
                            <div className='text-blue-600 my-4 ml-5 h-10'>View all</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsCardComponent;
