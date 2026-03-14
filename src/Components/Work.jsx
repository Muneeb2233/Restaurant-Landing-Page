import React from 'react'

const Work = () => {
  return (
    <section className='min-h-screen py-10'>
        <div className='max-w-7xl mx-auto px-6 w-full flex flex-col items-center'>
        <div className='flex flex-col items-center gap-5 py-10 md:w-1/2 lg:w-1/2'>
            <h3 className='text-sm md:text-base font-bold text-[#F4980D]'>Work</h3>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl text-[#4C4C4C]'>How It Works</h1>
            <p className='text-sm md:text-base font-semibold text-[#828282] text-center'>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 py-10 md:w-2/3 lg:w-2/3'>
            <div className='bg-[#FFFFFF] w-full flex flex-col items-center p-4 rounded-xl gap-6'>
                <img className='w-1/2' src="/images/material-symbols_no-meals-rounded.png" alt="" />
                <h3 className='font-bold text-[#505050] text-xl'>Pick Meals</h3>
                <p className='text-xs text-[#474747] text-center font-bold'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
            </div>
            <div className='bg-[#FFFFFF] w-full flex flex-col items-center p-4 rounded-xl gap-6'>
                <img className='w-1/2' src="/images/mdi_cursor-pointer.png" alt="" />
                <h3 className='font-bold text-[#505050] text-xl'>Choose How Often</h3>
                <p className='text-xs text-[#474747] text-center font-bold'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et</p>
            </div>
            <div className='bg-[#FFFFFF] w-full flex flex-col items-center p-4 rounded-xl gap-6'>
                <img className='w-1/2' src="/images/mdi_truck-delivery.png" alt="" />
                <h3 className='font-bold text-[#505050] text-xl'>Fast Deliveries</h3>
                <p className='text-xs text-[#474747] text-center font-bold'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Work