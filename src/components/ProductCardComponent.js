import React from 'react'

const ProductCardComponent = (props) => {
    return (
        <>
        <div className='bg-violet-700 h-full'>
            <h1 className='md:text-3xl lg:text-3xl sm:text-3xl text-white text-center pt-5'>Engineering, Procurement and Construction <br/>Projects Around the World</h1>
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid grid-cols-1 gap-1 w-11/12 mx-auto p-5'>
                {props.data.map((value) => (
                <div className='mt-10 border rounded-2xl shadow-none ml-10 pl-5 pr-5 bg-white '>
                    <div className='text-2xl mt-3'>
                        {value.title}
                    </div>
                    <div className='flex mr-2 space-x-2'>
                    <div className='h-2 w-5 mt-5'><img src='../Assests/Images/icon.png' alt=''></img></div>
                    <p className='font-thin text-sm italic pt-2 mt-3'>{value.location}</p>
                    </div>
                    <div className='font-thin italic pt-6'>{value.description}</div>
                    <div className='text-indigo-700 mt-7'>{value.link}</div>
                    <div className='border-b-2 w-24 border-indigo-600'></div>
                    <div>
                        <img className='rounded-2xl w-screen mt-3 pt-4 pb-7 mr-3' src={value.Images} alt=''></img>
                    </div>                    
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default ProductCardComponent
