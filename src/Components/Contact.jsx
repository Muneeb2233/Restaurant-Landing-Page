import React from "react"

const Contact = () => {
  return (
    <section id="Contact" className='py-10 mt-10'>
      <div className='max-w-7xl mx-auto px-6 w-full flex flex-col items-center gap-7 lg:gap-15'>
        <div className='md:w-1/2 lg:w-1/2 flex flex-col items-center'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl text-center font-bold text-[#4C4C4C] leading-tight'>
            Have Question In Mind? Let Us Help You
          </h1>
         </div>
          <div className='relative md:w-2/3 lg:w-2/3 flex flex-col gap-2'>
            <input
              className='w-full bg-white py-4 lg:py-7 px-6 pr-12 rounded-full font-medium text-sm md:text-base lg:text-xl'
              placeholder='yourmail@gmail.com'
            />
            <div className="flex justify-center">
            <button className='lg:absolute lg:right-3 lg:top-1/2 lg:-translate-y-1/2 text-[#FFFFFF] bg-[#FE9E0D] font-medium py-2 md:py-3 lg:py-3 px-7 md:px-10 lg:px-10 rounded-4xl'>
              Submit
            </button>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact
