import React from 'react'

const HomeCardComponent = () => {
    return (
        <div className='bg-yellow-300 h-screen'>
            <div className='flex gap-60 justify-center p-5'>
                <div className='text-black font-bold'>BIO</div>
                <div className='text-black font-bold'>PORTFOLIO</div>
                <div className='text-black font-bold'>PODCAST</div>
                <div className='text-black font-bold'>BLOG</div>
            </div>
            <div className='border-2 border-indigo-950 h-1/2 w-50 ml-64 mr-64 mt-7'>
                <div className='mr-5 mb-6'>
                    <img className="float-right h-80 w-96 mt-3 ml-20" src='../Assests/Images/sofa.jpg' alt=''></img>
                </div>
                <p className='text-black font-bold ml-10 text-3xl'>Bethany Jones</p>
                <p className='ml-10 mt-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='font-bold ml-10 mt-10'>@reallygreatsite</p>
                <div className='flex ml-10 gap-5'>
                <img className="h-4 w-3 mt-2" src="../Assests/Images/fb.png" alt=''></img>
                <img className="h-4 w-4 mt-2" src="../Assests/Images/i.png" alt=''></img>
                <img className="h-4 w-4 mt-2" src="../Assests/Images/t.png" alt=''></img>
                <img className="h-4 w-4 mt-2" src="../Assests/Images/l.png" alt=''></img>
                </div>
            </div>
        </div>

    )
}

export default HomeCardComponent
