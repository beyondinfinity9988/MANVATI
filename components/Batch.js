
import React from 'react';
import Typewriter from 'typewriter-effect'
import {BsTelegram, BsTwitter, BsYoutube} from 'react-icons/bs'
 import {FaTelegram} from 'react-icons/fa'
 import {bsTwitter} from 'react-icons/bs'
 import Link from 'next/link';
export default function Batch () {
    return(
 <div className=' bg-white pt-1 '> 


 <div className='text-center '>
 <h1 className='text-2xl bg-white text-center pt-4'>
 Partnering with world's leading universities and companies

 </h1>
 </div>
<div className='items-center pt-9 pl-5  bg-white '>
 <img src="/1.webp" className="text-center items-center w-screen" width={400} height={200} alt=""/>
    </div>
    <h1 className='text-center  mt-20 text-2xl font-serif px-10 font-abc text-blue-500'> NEW BATCH EVERY MONTH 🔥
       </ h1>

       <h1 className='text-center pt-10 mt-20  text-black text-2xl font-abc space-x-20 '> Classes starting MAY
       </ h1>

       <div className='items-center text-center pt-20'>
       <button className='text-white  items-center px-6 py-4 animate-bounce bg-blue-600 rounded-xl font-bold '>
        EXPLORE 
       </button>
       </div>
     


      <div class='oyo'>
       <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3 className='text-2xl'>REQUEST A DEMO</h3>
            <p class="blue-text pt-5 text-xl ">Just answer a few questions so that we can personalize the right course for you.</p>
            <div class="card">
                <h5 class="text-center mb-4 text-xl text-white font-mono ">We Built Top Software Engineers , Web Developers , Data Scientist and more</h5>
                <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">First name<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last name<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Your email<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="xyz@gmail.com" onblur="validate(3)"/></div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone number<span class="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/></div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Course Title<span class="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Any Query<span class="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
                    </div>
                    <div class="row text-white justify-content-end">
                        <div class="form-group hover:text-red-400 col-sm-6"> <button type="submit" class="btn-block bg-black   hover:text-red-400 btn-primary">Request a demo</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>





<div class="#Contact Us">
<div className=' mt-20'> 
       <h1 className='text-center pb-10   text-2xl font-abc text-black'> WE ARE ON A MISSION, JOIN US.
       </ h1>
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

 <div className='justify-between bg-gray-300 h-48 font-mono font-bold items-center pl-16 pr-10 pt-5 flex'>
 <div className=''>

 <BsYoutube size={40} className='cursor-pointer'/>
 <h1 className='pt-2  pr-2'>
 YOUTUBE
 </h1>
 <h1>
  SKILLGPT
 </h1>
 </div>

 <div className=''>

 <FaTelegram size={40} className='cursor-pointer'/>
 <h1 className="pt-2   pr-2" >
  TELEGRAM
 </h1>
 <h1>
  SKILLGPT OFFICIAL
 </h1>
 </div>

 <div className=''>

 <BsTwitter size={40} className='cursor-pointer'/>
 <h1>
 TWITTER
 </h1>  
 <h1>
   SKILLGPT
 </h1>
 </div>

  </div>
     
            
</div>
</div>
    )
}