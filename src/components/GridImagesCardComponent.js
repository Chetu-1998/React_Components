import React from 'react'

const GridImagesCardComponent = () => {
    return (
        <div className='shadow bg-zinc-100 h-4/5 w-auto m-10'>
            <div className='grid grid-cols-4 gap-4 p-5'>
                <div>
                    <img className="rounded-lg" src="../Assests/Images/pic.png"></img>
                    <div className='ml-1'>IMG_4985.HEIC</div>
                    <div className='ml-1'>3.9 MB</div>
                </div>
                <div>
                    <img src="../Assests/Images/pic8.png"></img>
                    <div className='ml-1'>IMG_5214.HEIC</div>
                    <div className='ml-1'>4 MB</div>
                </div>
                <div>
                    <img src="../Assests/Images/pic2.png"></img>
                    <div className='ml-1'>IMG_3851.HEIC</div>
                    <div className='ml-1'>3.8 MB</div>
                </div>
                <div>
                    <img src="../Assests/Images/pic3.png"></img>
                    <div className='ml-1'>IMG_4278.HEIC</div>
                    <div className='ml-1'>4.1 MB</div>
                </div>
                <div>
                    <img src="../Assests/Images/pic4.png"></img>
                    <div className='ml-1'>IMG_6842.HEIC</div>
                    <div className='ml-1'>4 MB</div>
                </div>
                <div>
                    <img src="../Assests/Images/pic5.png"></img>
                    <div className='ml-1'>IMG_3284.HEIC</div>
                    <div className='ml-1'>3.9 MB</div>
                </div>
                <div>
                    <img src="../Assests/Images/pic6.png"></img>
                    <div className='ml-1'>IMG_4841.HEIC</div>
                    <div className='ml-1'>3.8 MB</div>
                </div>
                <div>
                    <img src="../Assests/Images/pic7.png"></img>
                    <div className='ml-1'>IMG_5644.HEIC</div>
                    <div className='ml-1'>4 MB</div>
                </div>
            </div>
        </div>
    )
}

export default GridImagesCardComponent
