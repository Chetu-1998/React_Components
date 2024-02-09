import React from 'react'


const SearchbarComponent = () => {

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br from-pink-300 to-green-500 p-6 sm:py-12 ">
      <div className="flex relative rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
        <button className='bg-orange-500 h-12 w-48 border rounded-3xl m-10 mt-1 ml-3'>Button</button>
        <form className="relative mx-auto w-max">
          <input type="search "
            className="peer cursor-pointer relative z-10 h-12 w-10 mt-1 bg-orange-500 rounded-full border border-orange-500 bg-transparent transition-all duration-500 pl-12 outline-none focus:w-full focus:cursor-text focus:border-orange-300 focus:pl-16 focus:pr-4" />
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-3 h-8 w-12 border-r border-transparent stroke-orange-500 px-3.5 peer-focus:stroke-orange-500" fill="none" viewBox="0 0 24 24" stroke="orange" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </form>
      </div>
    </div>

  )
}

export default SearchbarComponent




// <div className='flex'>
//   <button className='bg-orange-500 h-10 w-48 border rounded-2xl m-10'>Button</button>
//   <button className='rounded-full bg-orange-500 h-10 w-10 mt-10'>
//     <svg className="text-slate-400 h-5 w-10" viewBox="0 0 20 20" fill="black">
//       <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
//     </svg>
//   </button>
// </div>