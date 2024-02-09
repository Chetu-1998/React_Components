import React from "react";

const ContactFormCardComponent = () => {
    return (
        <>
            <div className="bg-red-200 h-screen hover:transition-all">
                <div className="font bold text-3xl ml-40 p-5 text-left">Contact Form</div>
                <div className="flex flex-col border rounded-lg h-4/5 w-96 ml-20 mr-20 shadow-2xl">
                    <div className="p-4">
                        <label className="block text-gray-700 text-xl font-bold mb-2">Full Name</label>
                        <input class=" border rounded-lg w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-xl font-bold mb-2" >Email</label>
                        <input class="border rounded-lg w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-xl font-bold mb-2">Contact</label>
                        <input class="border rounded-lg w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-xl font-bold mb-2" >Message</label>
                        <input class="border rounded-lg w-full h-20 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="p-4">
                        <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 border rounded-lg w-full py-2 px-2 text-white bg-blue-500 hover:bg-red">SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactFormCardComponent;