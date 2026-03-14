import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6 md:px-10 lg:px-10 w-full flex flex-col lg:flex-row gap-10 lg:gap-0'>
            <div className='lg:w-1/4 flex flex-col gap-10 lg:gap-5'>
                <h4 className='text-3xl text-[#303030] font-medium'>FOODIE</h4>
                <div className='flex w-full gap-5'>
                <FaTwitter className='text-[#585858] text-xl md:text-2xl lg:text-3xl'/>
                <FaLinkedin className='text-[#585858] text-xl md:text-2xl lg:text-3xl'/>
                <FaYoutube className='text-[#585858] text-xl md:text-2xl lg:text-3xl'/>
                <FaFacebookF className='text-[#585858] text-xl md:text-2xl lg:text-3xl'/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-end gap-10 lg:gap-20 w-full text-sm md:text-base lg:text-base'>
            <div className='font-medium text-[#4C4C4C]'>
                <ul className='flex flex-col gap-1'>
                    <li>Quality</li>
                    <li>Help</li>
                    <li>Share</li>
                    <li>Carrers</li>
                    <li>Work</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <div className='font-medium text-[#4C4C4C]'>
                <ul className='flex flex-col gap-1'>
                    <li>244-5333-7783</li>
                    <li>hello@food.com</li>
                    <li>press@food.com</li>
                    <li>Carrers</li>
                    <li>contact@food.com</li>
                </ul>
            </div>
            <div className='font-medium text-[#4C4C4C]'>
                <ul className='flex flex-col gap-1'>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Footer