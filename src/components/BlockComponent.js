import React from "react";

const BlockComponent = () => {
    return (
        <>
            <div className="flex p-5 gap-3 ml-20">
                <div className="border h-75 w-80 shadow-lg rounded-lg">
                    <img className="ml-7 mt-2" src="../Assests/Images/1.png" alt="" />
                    <div className="text-black text-2xl ml-8 mt-3 font-bold">300+ UI Components</div>
                    <p className="text-black ml-8 mr-8 text-justify mt-3">UI components and snippets that cover all you need to create almost any- business, startup, SaaS landing page, or site.</p>
                </div>
                <div className="border h-75 w-80 shadow-lg rounded-lg">
                    <img className="ml-7 mt-2" src="../Assests/Images/2.png" alt="" />
                    <div className="text-black text-2xl ml-8 mt-3 font-bold">Copy-paste,Done</div>
                    <div className="text-black ml-8 mr-8 text-justify mt-3">Easy to use copy-paste interface depending on the components, building web page never been easier!.</div>
                </div>
                <div className="border h-80 w-80 shadow-lg rounded-lg">
                    <img className="ml-7 mt-2" src="../Assests/Images/3.png" alt="" />
                    <div className="text-black text-2xl ml-8 mt-3 font-bold">Universal UI toolkit</div>
                    <div className="text-black ml-8 mr-8 text-justify mt-3">Use the same codebases and snippets with your favorite tech stack. Such as - React, Vue, etc. without re-writing entirely</div>
                </div>
            </div>
            <div className="flex p-5 gap-3 ml-20">
                <div className="border h-80 w-80 shadow-lg rounded-lg">
                    <img className="ml-7 mt-1" src="../Assests/Images/4.png" alt="" />
                    <div className="text-black text-2xl mt-3 ml-8 font-bold">Built-with bootstrap 5</div>
                    <p className="text-black ml-8 mr-8 text-justify mt-3">Based on latest Bootstrap 5, HTML5 and Vanilla JavaScript which is most popular front-end stack, no extra dependencies</p>
                </div>
                <div className="border h-80 w-80 shadow-lg rounded-lg">
                    <img className="ml-7 mt-3" src="../Assests/Images/5.png" alt="" />
                    <div className="text-black text-2xl mt-3 ml-8 font-bold">High-quality Design</div>
                    <div className="text-black ml-8 text-justify mr-8 mt-3">Clean, beautiful and pixel-perfect design, rich typography and flawless UX to provide the best experience to end-users.</div>
                </div>
                <div className="border h-80 w-80 shadow-lg rounded-lg">
                    <img className="ml-7 mt-2" src="../Assests/Images/6.png" alt="" />
                    <div className="text-black text-2xl ml-8 mt-3 font-bold">Clean Code</div>
                    <div className="text-black ml-8 mr-8 text-justify mt-3">Super clean codes with detailed comments, taking full advantage of the latest coding conventions to make them more readable</div>
                </div>
            </div>
        </>
    )

}

export default BlockComponent;