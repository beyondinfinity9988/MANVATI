import Image from 'next/image'
import React from 'react';
import {AiOutlineTeam } from 'react-icons/ai';
 import Typewriter from 'typewriter-effect';

export default function Animation (){

    return(

 <>
 <div className='z-0 text-2xl mb-10 flex justify-between items-center pt-96 '>

    <div class="main">
            <h1 class='text-3xl pl-6'>Crack your goal with india's top <span className='flex text-orange-500  text-3xl pt-2'> educators </span>
        </h1>
        <h1 class='text-xl font-normal pl-6 pt-4'> Over <span className='text-green-400'>8,00,000 </span> learners trust us for their preparation
        </h1>
        </div> 


        <div className='pt-10'>
 <Image src="/my.svg" alt="" height={600} width={600} className='pr-40 pt-5 '/>

        </div> 
        </div>





     <div className='h-48 bg-contain w-full mix-blend-overlay mt-10  bg-blue-900 rounded-lg  absolute'> 
   
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
     3 CRORE+
     </h1>
     <h1 className='text-white text-xl font-bold'> MONTHLY VIEWS
     </h1>
     </div>

     <div className='pt-10'>
     <h1>
   200,000+
     </h1>
     <h1 className='text-white text-xl font-bold'>NEW MONTHLY SUBSCRIBERS
  
     </h1>
     </div>
     
     </div>

     
</div>
    
           
            </>
    )
}