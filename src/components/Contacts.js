import React from 'react'

const Contacts = () => {
    return (
        <div className='pt-14 fixed top-0 bottom-0 right-0 left-0 w-screen h-full flex justify-center'>
            <div className=' w-1/2 h-4/5 shadow-2xl grid grid-flow-col grid-cols-12'>
                <div className='col-span-1 bg-slate-400'></div>
                <div className=' col-span-6 bg-slate-500 p-4 flex-col '>
                    <span className='text-4xl font-extrabold mb-3'>
                        Contact Us
                    </span>
                    
                    <input className='w-full bg-transparent' type="text" placeholder='Name' />
                </div>
                <div className='col-span-5 bg-slate-600 flex items-center'>
                    <div className='w-full h-3/5 bg-black p-3 text-white'>
                        <span className='text-4xl font-extrabold'>info</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contacts
