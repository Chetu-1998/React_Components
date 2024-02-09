import React from 'react'

const BlogCardComponent = () => {
    return (
        <div className='bg-black h-screen p-5'>
            <div className='shadow bg-zinc-200 h-full w-full rounded-lg p-5 '>
                <div className='shadow bg-white  h-full w-full rounded-lg overflow-x-auto'>
                    <div className='text-center text-lg pt-5 text-blue-600 p-1'>Our Blogs</div>
                    <div className='text-black text-3xl font-bold text-center p-1'>Our Recent News</div>
                    <div className='text-center p-1'>There are many variations of passages of Lorem Ipsum available <br />but the majority have suffered alteration in some form.</div>
                    <div className='flex columns-3 pt-14 mr-5'>
                        <div className='ml-7 h-screen'><img src='../Assests/Images/s1.png' />
                            <button className='bg-blue-500 text-white border-blue-700 rounded h-8 w-32 mt-8'>Dec 22,2023</button>
                            <div className='font-bold text-xl mt-7'>Meet AutoManage, the best AI management tools</div>
                            <div className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                        <div className='ml-5 h-screen'><img src='../Assests/Images/s2.png' />
                            <button className='bg-blue-500 text-white border-blue-700 rounded h-8 w-32 mt-8'>Mar 15,2023</button>
                            <div className='font-bold text-xl mt-8'>How to earn more money as a wellness coach</div>
                            <div className='mt-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                        <div className='ml-5 h-screen'><img src='../Assests/Images/s2.png' />
                            <button className='bg-blue-500 text-white border-blue-700 rounded h-8 w-32 mt-8'>Jan 05,2023</button>
                            <div className='font-bold text-xl mt-7'>The no-fuss guide to upselling and crossselling</div>
                            <div className='mt-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCardComponent;
