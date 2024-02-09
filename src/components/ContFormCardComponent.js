import React from 'react'

const ContFormCardComponent = () => {
    return (
        <div className='flex'>
            <div className='p-20'>
                <div className=''>Contact Us</div>
                <div className='font-bold text-2xl mt-5'>GET IN TOUCH WITH US</div>
                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis<br /> nostrud exercitation ullamco</p>
                <div className='flex gap-5 mt-7'>
                    <div><img src="../Assests/Images/home.png" alt="" /></div>
                    <div>
                        <div className='font-bold'>Our Location</div>
                        <p>99 S.t Jomblo Park Pekanbaru<br />28292.Indonesia</p>
                    </div>
                </div>
                <div className='flex gap-5 mt-7'>
                    <div><img src="../Assests/Images/call.png" alt="" /></div>
                    <div>
                        <div className='font-bold'>Phone Number</div>
                        <p>(+62)81 414 257 9980</p>
                    </div>
                </div>
                <div className='flex gap-5 mt-7'>
                    <div><img src="../Assests/Images/mess.png" alt="" /></div>
                    <div>
                        <div className='font-bold'>Email Address</div>
                        <p>info@yourdomain.com</p>
                    </div>
                </div>
            </div>

            <div class="mt-10 ml-24">
                <div class="fixed h-16 w-16 bg-blue-500 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-none mt-8 right-44 "></div>
            </div>
            <div className='relative bg-white-500 bg-white shadow-inner h-84 w-2/6 mt-24 rounded-lg ml-54'>
            <div className="p-4 mt-5">
                        <label className=" text-gray-700 text-xl font-bold mb-2 ml-12"></label>
                        <input className="border rounded-md w-96 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Your Name'/>
                    </div>
                    <div className="p-4">
                        <label className=" text-gray-700 text-xl font-bold mb-2 ml-12" ></label>
                        <input className="border rounded-md w-96 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Your Email' />
                    </div>
                    <div className="p-4">
                        <label className=" text-gray-700 text-xl font-bold mb-2 ml-12"></label>
                        <input className="border rounded-md w-96 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Your Phone'/>
                    </div>
                    <div className="p-4">
                        <label className=" text-gray-700 text-xl font-bold mb-2 ml-12" ></label>
                        <input className="  border rounded-md w-96 h-32 p-2 pb-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Your Message'/>
                    </div>
                    <div className="p-4">
                        <button className="border rounded-lg w-96 py-2 px-2 text-white bg-blue-700 hover:bg-red ml-12">SEND MESSAGE</button>
                    </div>
            </div>
        </div>
    )
}

export default ContFormCardComponent;
