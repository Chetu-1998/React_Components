import React from 'react'

const PlansCardComponent = () => {
    return (
        <>
            <div className='font-semibold text-center text-2xl m-8'>Flexible plans just for you</div>
            <div className='flex m-10 gap-3 items-center justify-center'>
                <div className='border h-96 w-96'>
                    <div className='text-2xl text-left ml-5 pt-5'>Subscription</div>
                    <div className='text-xs ml-5 mt-2 font-light'>The flexibility of paying month to month and <span className='font-semibold'>save 20%.</span></div>
                    <div className='mt-5 text-center font-fold text-3xl'>$3.99</div>
                    <div className='font-light text-center'>per month</div>
                    <button class="ml-14 w-24 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-blue-500 hover:border-transparent rounded">
                        select</button>
                    <div className='ml-5 mt-5'>Top features</div>
                    <div>
                        <ul className='list-outside list-disc ml-8'>
                            <li className='font-thin text-xs'>Resize multiple images at once</li>
                            <li className='font-light text-xs'>Privacy! Images never leave your device!</li>
                            <li className='font-light text-xs'>No advertising</li>
                            <li className='font-light text-xs'>E-mail support</li>
                        </ul>
                    </div>
                </div>
                <div className='border h-96 w-96'>
                    <div className='text-2xl text-left ml-5 pt-5'>Simple</div>
                    <div className='text-xs ml-5 mt-2 font-light'>Enjoy all premium features for a<br/> whole month.</div>
                    <div className='mt-5 text-center font-fold text-3xl'>$4.99</div>
                    <div className='font-light text-center'>1 month</div>
                    <button class="ml-14 w-24 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-3 border border-blue-500 hover:border-transparent rounded">
                        select</button>
                    <div className='ml-5 mt-5'>Top features</div>
                    <div>
                        <ul className='list-outside list-disc ml-8'>
                            <li className='font-thin text-xs'>Resize multiple images at once</li>
                            <li className='font-light text-xs'>Privacy! Images never leave your device!</li>
                            <li className='font-light text-xs'>No advertising</li>
                            <li className='font-light text-xs'>E-mail support</li>
                        </ul>
                    </div>
                </div>
                <div className='border h-96 w-96'>
                    <div className='text-2xl text-left ml-5 pt-5'>Smart</div>
                    <div className='text-xs ml-5 mt-2 font-light'>Get all features for 3 months and<br/><span className='font-semibold'>save 33%.</span></div>
                    <div className='mt-5 text-center font-fold text-3xl'>$9.99</div>
                    <div className='font-light text-center'>3 month</div>
                    <button class="ml-14 w-24 bg-transparent hover:bg-blue-500 text-blue-700  font-semibold hover:text-white py-2 px-4 mt-3 border border-blue-500 hover:border-transparent rounded bg-indigo-100">
                        select</button>
                    <div className='ml-5 mt-5'>Top features</div>
                    <div>
                        <ul className='list-outside list-disc ml-8'>
                            <li className='font-thin text-xs'>Resize multiple images at once</li>
                            <li className='font-light text-xs'>Privacy! Images never leave your device!</li>
                            <li className='font-light text-xs'>No advertising</li>
                            <li className='font-light text-xs'>E-mail support</li>
                            <li className='font-bold text-xs'>You save 33%</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PlansCardComponent;
