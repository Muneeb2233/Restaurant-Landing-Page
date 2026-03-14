import React from "react"
import { IoStarSharp } from "react-icons/io5"

const Testimonials = () => {
  return (
    <section id="Testimonials" className='min-h-screen py-10'>
      <div className='max-w-7xl mx-auto px-6 w-full flex flex-col items-center'>
        <div className='flex flex-col items-center gap-5 py-10 md:w-1/2 lg:w-1/2'>
          <h3 className='text-sm md:text-base font-bold text-[#F4980D]'>
            Testimonial
          </h3>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl text-[#4C4C4C] text-center'>
            What They Are Saying
          </h1>
          <p className='text-sm md:text-base font-semibold text-[#828282] text-center lg:w-2/3'>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className='flex flex-col items-center gap-5 rounded-2xl py-8 md:w-2/3 lg:w-2/3 bg-[#FFFFFF]'>
          <img className='w-1/6' src='/images/Ellipse 1.png' alt='' />
          <p className='text-center text-sm md:text-base font-semibold text-[#515151] lg:w-1/2'>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className='flex items-center gap-2'>
            <IoStarSharp className='text-[#FE9E0D] size-6' />
            <IoStarSharp className='text-[#FE9E0D] size-6' />
            <IoStarSharp className='text-[#FE9E0D] size-6' />
            <IoStarSharp className='text-[#FE9E0D] size-6' />
            <IoStarSharp className='text-[#FE9E0D] size-6' />
          </div>
          <h2 className='text-xl font-semibold text-[#1C1C1C]'>John Doe</h2>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
