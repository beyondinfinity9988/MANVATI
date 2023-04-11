
import React from 'react';
import Typewriter from 'typewriter-effect'
import {BsTelegram, BsTwitter, BsYoutube} from 'react-icons/bs'
 import {FaTelegram} from 'react-icons/fa'
 import {bsTwitter} from 'react-icons/bs'
export default function Batch () {
    return(
 <div className='  pt-56 '> 
    
    <h1 className='text-center  mt-20 text-2xl font-mono text-blue-500'> NEW BATCH EVERY MONTH 🔥
       </ h1>
       <h1 className='text-center pt-10 mt-20 bg-white text-black text-2xl font-mono '> Classes starting from 10th April
       </ h1>

       <div className='items-center text-center pt-20'>
       <button className='text-white  items-center px-6 py-4 animate-bounce bg-blue-600 rounded-xl font-bold '>
        EXPLORE 
       </button>
       </div>
       <div className=' mt-20'> 
       <h1 className='text-center pb-10   text-2xl font-mono text-black'> WE ARE ON A MISSION, JOIN US.
       </ h1>
         </div>
 
<div>

</div>

<div className='pt-20 bg-gray-300' >

< h1 className='text-center text-2xl ' >JOIN US ON </h1>
<div className="text-3xl font-mono pl-3  pt-3 text-center font-bold text-red-600">
          <Typewriter
            options={{
              strings: ["#TELEGRAM" , "#INSTAGRAM" , "#YOUTUBE" , "#TWITTER"],
           
              autoStart: true,
              loop: true
            }} />
  </div>
 </div>

 <div className='justify-between bg-gray-300 h-48 font-mono font-extrabold items-center pl-16 pr-10 pt-5 flex'>
 <div className=''>

 <BsYoutube size={40} className='pl-'/>
 <h1 className='pt-2  pr-2'>
 YOUTUBE
 </h1>
 <h1>
  SKILLGPT
 </h1>
 </div>

 <div className=''>

 <FaTelegram size={40} className='pointer-cursor'/>
 <h1 className="pt-2   pr-2" >
  TELEGRAM
 </h1>
 <h1>
  SKILLGPT OFFICIAL
 </h1>
 </div>

 <div className=''>

 <BsTwitter size={40} className='pl-'/>
 <h1>
 TWITTER
 </h1>  
 <h1>
   SKILLGPT
 </h1>
 </div>

  </div>
     
            

</div>
    )
}