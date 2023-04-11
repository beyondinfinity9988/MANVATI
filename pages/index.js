import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Animation from '../components/Animation.js'
import Review from '@/components/Review.js'
import Batch from '@/components/Batch.js'
import Footer from '@/components/Footer.js'
import React, { Component } from 'react';

import DemoCarousel from '@/components/Slider.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <><title> SKILLGPT
    </title>
    <Head>
 <div>
     <div className='flex  bg-blue-900 justify-between cursor-pointer h-full w-full '> 
    <Image src="/2176.jpg" width={500} height={50} className='h-[700px] bg-contain w-full mix-blend-overlay pt-20  bg-blue-400 absolute  '  />
    <a  href='/' className='text-4xl text-white cursor-pointer font-mono font-bold underline pt-5 pl-5'> SKILLGPT </a>

   < h1>  
   </h1> 


<ul className='pl-3 pr-2 pt-6 bg-blue-900 pb-5  px-4 space-x-3 space-y-1 font-serif hover:bg-gray-700   text-2xl text-white ' >
<a href='/' > Home </a>
<a href='/' >  Courses  </a>
 <a href='/' > Goals </a>
<a href='/' > Instructors  </a>
< a href='/' > Contact Us </a>

</ul>
<div className='pr-10 pt-6 '>
<button className='bg-white border-cyan-900 px-2 animate-bounce text-blue-800 text-center rounded text-xl pb-3 font-sans pr-2 pt-2 pl-3 py-1' > Enroll Now
 </button>
 </div>
    </div>
    <div className='pt-64 pl-10 justify-end text-right pr-56 '>
     < button className='bg-blue-800 px-2 animate-bounce text-white text-center rounded text-2xl pb-3 font-sans pr-2 pt-2 pl-3 py-1'>
     SIGN UP
     </button>
    
    </div>
   
 </div>

   </Head>
   
  
    
  <div>
   <Animation/>


   
  
   <DemoCarousel/>
   <Batch/>
   
   <Footer/>

  </div>
 
    </>
  )


}