import React from "react"

const Hero = () => {
  return (
    <>
        <section className='relative w-full min-h-screen flex items-center'>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 pb-10 w-full z-20">
        <div className="flex flex-col lg:items-start md:w-1/2 lg:w-1/2 gap-5 order-2 lg:order-1 text-center lg:text-start">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl text-[#4C4C4C] leading-tight">Your Favourite Food Delivered Hot & Fresh</h1>
          <p className="text-[#828282] text-sm md:text-base font-semibold">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <div className="flex items-center justify-center">
          <button className="font-medium px-10 py-3 rounded-4xl bg-[#FE9E0D] text-[#FFFFFF] ">Order Now →</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 order-1 lg:order-2">
            <img className="w-full h-auto object-contain" src="/images/Home Page Banner Image Background Removed 1.png" alt="" />
        </div>
        </div>
      </section>
    </>
  )
}

export default Hero
