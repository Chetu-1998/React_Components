import React from 'react'

const LeftImageCardComponent = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-28">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src="../Assests/Images/sofa.jpg" alt="Modern building architecture" />
                </div>
                <div class="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                    <a href="#" className="block mt-1 text-lg  font-medium text-black">Incredible accommodation for your team</a>
                    <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                </div>
            </div>
        </div>
    )
}

export default LeftImageCardComponent
