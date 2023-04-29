import Image from 'next/image'
import React from 'react';
import {AiOutlineTeam } from 'react-icons/ai';
 import Typewriter from 'typewriter-effect';

export default function Animation (){

    return(

 <>
 <div className='z-0 text-2xl mb-10 flex justify-between items-center pt-20 '>

    <div class="main">
            <h1 class='text-3xl pl-16'>Crack your goal with india's top <span className='flex text-orange-500  text-3xl pt-2'> educators </span>
        </h1>
        <h1 class='text-xl font-normal pl-16 pt-4'> Over <span className='text-green-400'>8,00,000 </span> learners trust us for their preparation
        </h1>
        </div> 


        <div className='pt-10'>
 <Image src="/my.svg" alt="" height={600} width={600} className='pr-40 pt-5 '/>

        </div> 
        </div>

 <div className='bg-black'>
        <div className="bg-black text-gray-600 px-5  py-5  hover:focus-visible:  pl-10 text-2xl font-mono font-bold w-full">
 <h1 className=" text-center text-green-700 font-mono text-3xl   bg-black border-red-500  hover:bg-black">
 India's top educators
 </h1>
 <div className="mo">
  <div className="oo">
    <span class="m">N</span>
    <span class="m">I</span>
    <span class="m">C</span>
    <span class="m">E</span>
    <span class="m">&</span>
    <span class="m">S</span>
    <span class="m">I</span>
    <span class="m">M</span>
    <span class="m">P</span>
    <span class="m">L</span>
    <span class="m">E</span>
    <span class="m">E</span>
    <span class="m">X</span>
    <span class="m">P</span>
    <span class="m">L</span>
    <span class="m">A</span>
    <span class="m">N</span>
    <span class="m">A</span>
    <span class="m">T</span>
    <span class="m">I</span>
    <span class="m">O</span>
    <span class="m">N</span>


  </div>
</div>
</div>



 <h1 className="text-xl font-abc pl-24 text-white space-x-6 pt-4"> Learn with the best educators for <span className="animate-pulse space-x-2 text-orange-500">  DSA , COMPETITIVE PROGRAMMING , FULL STACK DEVELOPEMENT COURSES </span>
 </h1>
 <div className="pt-5 pl-6">
 <button className="bg-white text-xl text-black border-green-700 border-4 animate-bounce mt-6 hover:bg-slate-50 text-left px-3 py-2  font-mono"> Try Learning for free
  </button>
</div>
</div>



     <div className='h-48 bg-contain w-full mix-blend-overlay mt-10  bg-purple-900 rounded-lg  absolute'> 
   
     <h1 className='text-2xl font-bold text-center text-white font-serif space-x-0 pt-5'> INDIA'S MOST LOVED CODING COMMUNITY ❤️
  
     </h1>
          <div className='justify-between text-white pl-9 pr-6 items-center flex'>
     <div className='pt-10'>
    
     <h1>
     3,000,000+
     </h1>
     <h1 className='text-white text-xl font-bold'> HAPPY LEARNERS  
     </h1>
     </div>


     <div className='pt-10'>
     <h1>
     3 Lakhs+
     </h1>
     <h1 className='text-white text-xl font-bold'> MONTHLY VIEWS
     </h1>
     </div>

     <div className='pt-10'>
     <h1>
   200,00+
     </h1>
     <h1 className='text-white text-xl font-bold'>NEW MONTHLY SUBSCRIBERS
  
     </h1>
     </div>
     
     </div>

     
</div>
    
           
            </>
    )
}