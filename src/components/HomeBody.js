import React from 'react'
import videoBg from '../assets/Venice_5.mp4'
import TextScroll from './TextScroll'
import PreviousWorks from './PreviousWorks'
import Footer from './Footer'

const HomeBody = () => {

    return (
        <div className='bg-black'>
            <div className='grid grid-cols-4 grid-rows-4 pt-14 w-full h-screen'>
                <video src={videoBg} autoPlay loop muted className='col-start-1 col-end-5 row-start-1 row-end-5 w-full h-full object-cover'></video>
                <div className='text-5xl font-extrabold text-white col-start-1 col-end-5 row-start-2 row-end-3 place-self-center'>DIVE.DEVELOP.DEPLOY</div>
            </div>
            <div className='rounded-lg flex flex-col items-center p-3 text-white m-4 bg-gradient-to-r from-indigo-900 via-purple-600 to-pink-900'>
                <TextScroll text={"WHAT WE DO"} className={"text-5xl"} />
                <TextScroll text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                    className={"text-xl py-4 w-3/4"} />

            </div>
            <div className="w-full text-white font-extrabold text-center flex flex-col">
                <TextScroll text={"OUR SERVICES"} className={"text-5xl"} />
                <div className='grid grid-cols-4 grid-rows-4'>
                    <div className='w-[60%] aspect-square bg-violet-900 col-start-1 col-end-3 row-start-1 row-end-2 rounded-2xl place-self-center -rotate-[5deg] hover:scale-110 duration-75'></div>
                    <div className='text-5xl col-start-3 col-end-5 row-start-1 row-end-2  place-self-center'>Service Specifications</div>
                    <div className='text-5xl col-start-1 col-end-3 row-start-2 row-end-3 place-self-center'>Service Specifications</div>
                    <div className='w-[60%] aspect-square bg-violet-900 col-start-3 col-end-5 row-start-2 row-end-3 rounded-2xl place-self-center rotate-[5deg] hover:scale-110 duration-75'></div>
                    <div className='w-[60%] aspect-square bg-violet-900 col-start-1 col-end-3 row-start-3 row-end-4 rounded-2xl place-self-center -rotate-[10deg] hover:scale-110 duration-75'></div>
                    <div className='text-5xl col-start-3 col-end-5 row-start-3 row-end-4 place-self-center'>Service Specifications</div>
                    <div className='text-5xl col-start-1 col-end-3 row-start-4 row-end-5 place-self-center'>Service Specifications</div>
                    <div className='w-[60%] aspect-square bg-violet-900 col-start-3 col-end-5 row-start-4 row-end-5 rounded-2xl place-self-center rotate-[7deg] hover:scale-110 duration-75'></div>
                    
                </div>
            </div>
            <div className='w-full flex flex-col items-center text-white font-extrabold'>
                <TextScroll text={"OUR PREVIOUS WORKS"} className={"text-5xl"} />
                <PreviousWorks />
            </div>
            <Footer />
        </div>
    )
}

export default HomeBody
