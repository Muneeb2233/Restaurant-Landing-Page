import React from "react"

const About = () => {
  return (
    <section id="About" className='relative w-full min-h-screen flex item-center'>
       <img
        className='hidden lg:block lg:w-1/7 lg:absolute'
        src='/images/About Section Background.png'
        alt=''
      />
      <div className='max-w-7xl px-6 py-5 mx-auto w-full z-10 flex flex-col lg:flex-row items-center text-center lg:text-start gap-10 lg:gap-0'>
        <div className='md:w-1/2 lg:w-1/2'>
          <img
            className='w-full h-auto object-contain'
            src='/images/About Page Banner Image Background Removed 1.png'
            alt=''
          />
          </div>
          <div className="flex flex-col md:w-1/2 lg:w-1/2 gap-7">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm md:text-base font-bold text-[#F4980D]">About</h3>
            <h1 className="text-2xl md:text-3xl lg:text-5xl leading-tight font-bold text-[#4C4C4C]">Food Is An Important Part Of A Balanced Diet</h1>
          </div>
            <div className="text-[#828282] text-sm md:text-base font-semibold flex flex-col gap-3">
            <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla
              quam.
            </p>
            <p>
              Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
              facilisis at fringilla quam.
            </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-15">
              <button className="font-medium py-3 px-10 rounded-4xl bg-[#FE9E0D] text-[#FFFFFF]">Learn More</button>
              <div className="w-[10vw] lg:w-[5vw] flex items-center justify-center gap-1.5">
                <img className="w-full h-auto object-contain" src="/images/material-symbols_play-circle-rounded.png" alt="" />
                <p className="text-2xs text-[#515151] font-medium whitespace-nowrap">Watch Video</p>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  )
}

export default About
