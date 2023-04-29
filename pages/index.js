import Head from 'next/head'
import Image from 'next/image'

import {ya} from "../public/ya.gif"
import Animation from '../components/Animation.js'
import Review from '@/components/Review.js'
import Batch from '@/components/Batch.js'
import Footer from '@/components/Footer.js'

import React, { Component } from 'react';

import DemoCarousel from '@/components/Slider.js'
import Link from 'next/link';



export default function Home() {
  return (
     <>
     
     <title> skillgpt.com
    </title>
    
 {/* <div className=''>
     <div className='flex  bg-black justify-between cursor-pointer h-full w-full '> 
    <Image src="/mw.jpg" width={500} height={50} className=' bg-contain w-[60%] h-[600px] bg-black mix-blend-overlay pt-20  absolute  '  />
    <a  href='/' className='text-4xl text-white cursor-pointer font-mono font-bold underline pt-5 pl-5'> SKILLGPT </a>
<Image src="/ya.gif" alt='' height={200} width={100}/>
   < h1>  
   </h1>  */}
< div className='flex bg-black justify-between items-center'>
<div>
<ul className='pl-3  pt-6 bg-black pb-5  px-4 space-x-3 space-y-1 font-serif    text-2xl text-white ' >
<a  href='/' className='text-4xl text-white cursor-pointer font-abc font-extrabold  overflow-hidden hover:text-orange-700  pt-5 pl-8'> SKILLGPT </a>
<a href='#' className=' hover:text-orange-500 pl-40' > Home </a>
<a href='#' className=' hover:text-orange-500' >  Courses  </a>
 <a href='#' className=' hover:text-orange-500'> Goals </a>
<a href='#' className=' hover:text-orange-500'> Instructors  </a>
< a href='#'className=' hover:text-orange-500' > Contact Us </a>

</ul>
</div>
<div className='flex justify-between'>
<div className='pr-10 pt-6 pb-4'>
<button className=' border-cyan-900 px-6 bg-white animate-pulse hover:bg-green-500 text-black focus:bg-transparent items-center text-center rounded-full text-xl pb-3 font-abc pt-2 pl-5 py-0' > Enroll Now
 </button>
</div>
<div className='pr-10 pt-6'>
 <button className= 'border-cyan-900 px-6 niline bg-white animate-pulse hover:bg-green-500 text-black focus:bg-transparent items-center text-center rounded-full text-xl pb-3 font-abc pt-2 pl-5 py-0'>
     SIGN UP
     </button>
 </div>
</div>
    </div>
   < div className=' bg-blue-100  items-center'>
    {/* <div className='pt-2 pl-10  text-right pr-56 '>
    <Image src="/mw.jpg" width={500} height={50} className=' bg-contain w-[400px] h-[600px]   pt-2  '  />
   </div> */}
   <div>
   <Image src="/ya.gif" alt='' height={50} width={100} className='w-[100%] h-[10%]'/>
      </div>
    </div>
   


   
   
  
    

   <Animation/>
<DemoCarousel/>
   <Batch/>
   
   <Footer/>


    </>
    
  )


}