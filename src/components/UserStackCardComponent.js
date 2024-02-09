import React from "react";

const UserStackCardComponent = () => {
    return (
        <div className="flex p-10 gap-3">
            <div className="border h-85 w-80 shadow-lg rounded-lg">
                <div className="text-black text-2xl text-center mt-3 font-bold">Single User</div>
                <div className="text-black text-2xl text-center mt-5 font-bold" >$149</div>
                <div className="text-black text-lg text-center mt-5 border-b-2 border-indigo-50">500 GB Storage</div>
                <div className="text-black text-lg text-center mt-3 ">1 Granted User</div>
                <div className="text-black text-lg text-center mt-3 border-b-2 border-indigo-50">Send up to 2GB</div>
                <button className="bg-green-500 hover:bg-red text-black font-bold py-2 px-4 rounded-md ml-10 mt-6 w-60">Start Trial</button>
            </div>
            <div className="border h-96 w-80 shadow-lg rounded-lg">
                <div className="text-black text-2xl text-center mt-3 font-bold">Double User</div>
                <div className="text-black text-2xl text-center mt-5 font-bold" >$299</div>
                <div className="text-black text-lg text-center mt-5 border-b-2 border-indigo-50">1 TB Storage</div>
                <div className="text-black text-lg text-center mt-3 ">1 Granted User</div>
                <div className="text-black text-lg text-center mt-3 border-b-2 border-indigo-50">Send up to 4GB</div>
                <button className="bg-green-500 hover:bg-red text-black font-bold py-2 px-4 rounded-md ml-10 mt-6 w-60">Start Trial</button>
            </div>
            <div className="border h-96 w-80 shadow-lg rounded-lg">
                <div className="text-black text-2xl text-center mt-3 font-bold">Triple User</div>
                <div className="text-black text-2xl text-center mt-5 font-bold" >$399</div>
                <div className="text-black text-lg text-center mt-5 border-b-2 border-indigo-50">1.5 TB Storage</div>
                <div className="text-black text-lg text-center mt-3 ">1 Granted User</div>
                <div className="text-black text-lg text-center mt-3 border-b-2 border-indigo-50">Send up to 8GB</div>
                <button className="bg-green-500 hover:bg-red text-black font-bold py-2 px-4 rounded-md ml-10 mt-6 w-60">Start Trial</button>
            </div>
        </div>
    )
}

export default UserStackCardComponent;