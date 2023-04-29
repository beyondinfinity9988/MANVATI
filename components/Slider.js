import Image from 'next/image';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
	render() {
		return (
			<div className='h-full text-white  bg-opacity-100 bg-black mt-72 pt-10'>
			<h2 className='text-3xl text-white font-sans text-center'>Our Students Love Us ❤️</h2>
			<Carousel>
				<div className='h-[800px]  w-[1200px]  relative  text-center items-center pt-10'>
					<Image src="/1.jpg" className='text-right pl-96 ' height={600} width={300} alt="image1"/>
					{/* <p className="legend">Image 1</p> */}

            {/* iamge 1  */}
			< div className='relative pl-72 font-mono  ml-40 tetx-2xl pt-5 text-center    '>
				
					<h1 className='text-center inline relative pt-2 text-xl'>
					"It was only because of Apna College and Alpha batch that I was able to crack FAANG!" 
                  </h1>
				  <h1 className='text-center font-bold  pt-2'>
				  (7Lakh/ Month)
                  </h1>
				  <h1 className='text-center pt-2'>
				  SHIVAM
                  </h1>
				  <h1 className='text-center font-mono pt-2 text-2xl'>
				  INTERNSHIP @AMAZON (INTERNATIONAL OFFER)
                  </h1>
			
				  </div></div>

                                   {/* image 2  */}
				<div className=' h-[700px]  w-[1100px]  text-center pt-10'>
					<Image src="/2.jpg"  alt="image2" className='  text-right pl-96 ' height={600} width={300}/>
					< div className='relative pl-72 font-mono  ml-40 tetx-2xl pt-5 text-center    '>
					<h1 className='text-center inline relative pt-2 text-xl'>
					"It was only because of Apna College and Alpha batch that I was able to crack FAANG!" 
                  </h1>
				  <h1 className='text-center font-bold  pt-2'>
				  (7Lakh/ Month)
                  </h1>
				  <h1 className='text-center pt-2'>
				  SHIVAM
                  </h1>
				  <h1 className='text-center font-mono pt-5 text-2xl'>
				  INTERNSHIP @AMAZON (INTERNATIONAL OFFER)
                  </h1>

				  </div></div>

                                         {/* iamge 3  */}

				<div className='h-[700px]  w-[1100px]  text-center pt-10'>
					<Image src="/3.jpg" height={600} className='pl-96 text-right ' width={300} alt="image3"/>
					 < div className='relative pl-72 font-mono  ml-40 tetx-2xl pt-5 text-center    '>
					<h1 className='text-center inline relative pt-2 text-xl'>
					"It was only because of Apna College and Alpha batch that I was able to crack FAANG!" 
                  </h1>
				  <h1 className='text-center font-bold  pt-2'>
				  (7Lakh/ Month)
                  </h1>
				  <h1 className='text-center pt-2'>
				  SHIVAM
                  </h1>
				  <h1 className='text-center font-mono pt-5 text-2xl'>
				  INTERNSHIP @AMAZON (INTERNATIONAL OFFER)
                  </h1>

				  </div></div>

                                               {/* iamge 4  */}
				<div className='h-[600px] pl-  w-[1100px] text-center pt-10'>
					<Image src="/4.jpg" height={200} className='pl-80 text-right ml-40 ' width={300} alt="image4"/>
					
					< div className='relative pl-80 font-mono  ml-40 tetx-2xl pt-5 text-center    '>
					<h1 className='text-center inline relative pt-2 text-xl'>
					"It was only because of Apna College and Alpha batch that I was able to crack FAANG!" 
                  </h1>
				  <h1 className='text-center font-bold  pt-2'>
				  (7Lakh/ Month)
                  </h1>
				  <h1 className='text-center pt-2'>
				  SHIVAM
                  </h1>
				  <h1 className='text-center font-mono pt-5 text-2xl'>
				  INTERNSHIP @AMAZON (INTERNATIONAL OFFER)
                  </h1>

				  </div></div>


                                           {/* image 5  */}

				<div className='h-[900px]  w-[1200px] pt-10'>
					<Image src="/5.jpg" height={300} className='pl-96 text-right pr-84 opacity-100' width={300} alt="image5"/>
					{/* <p className="legend">Image 5</p> */}
					< div className='relative font-mono pl-80 ml-5 tetx-2xl pt-5 text-center    '>
					<h1 className='text-center pt-2 text-xl'>
					"It was only because of Apna College and Alpha batch that I was able to crack FAANG!" 
                  </h1>
				  <h1 className='text-center font-bold  pt-2'>
				  (7Lakh/ Month)
                  </h1>
				  <h1 className='text-center pt-2'>
				  SHIVAM
                  </h1>
				  <h1 className='text-center font-mono pt-5 text-2xl'>
				  INTERNSHIP @AMAZON (INTERNATIONAL OFFER)
                  </h1>

				  </div></div>
			</Carousel>
			</div>
		);
	}
};
