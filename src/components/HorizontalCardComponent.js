import React from 'react'

const HorizontalCardComponent = () => {
  return (
    <div className='shadow bg-zinc-300 h-54 w-auto m-10'>
    <div className='grid grid-cols-2 gap-4 p-5'>
        <div className='border bg-white h-24 w-54 shadow flex items-start justify-between rounded-xl hover:outline outline-offset-2 outline-2 outline-blue-700'>
          <div>
          <div className='flex gap-3 justify-center'>
            <div><img className="m-5" src='../Assests/Images/Jane.png'/></div>
            <div>
            <div className='mt-5 mr-5 text-lg'>Leslie Alexander</div>
            <div className='text-md font-thin'>Co-Founder / CEO</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='border bg-white h-24 w-54 shadow flex items-start justify-between rounded-xl hover:outline outline-offset-2 outline-2 outline-blue-700'>
        <div>
          <div className='flex gap-3 justify-center'>
          <div><img className="m-5" src='../Assests/Images/co.png'/></div>
          <div>
            <div className='mt-5 mr-5 text-lg'>Dries Vincent</div>
            <div className='text-md font-thin'>Business Relations</div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className='border bg-white h-24 w-54 shadow flex items-start justify-between rounded-xl hover:outline outline-offset-2 outline-2 outline-blue-700'>
        <div>
          <div className='flex gap-3 justify-center'>
          <div><img className="m-5" src='../Assests/Images/cw.png'/></div>
          <div>
            <div className='mt-5 mr-5 text-lg'>Michael Foster</div>
            <div className='text-md font-thin'>Co-Founder / CTO</div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className='border bg-white h-24 w-54 shadow flex items-start justify-between rounded-xl hover:outline outline-offset-2 outline-2 outline-blue-700'>
        <div>
          <div className='flex gap-3 justify-center'>
          <div ><img className="m-5" src='../Assests/Images/Je.png'/></div>
          <div>
            <div className='mt-5 mr-5 text-lg'>Lindsay Walton</div>
            <div className='text-md font-thin'>Front-end Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HorizontalCardComponent 
