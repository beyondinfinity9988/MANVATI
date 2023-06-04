import React, { useState } from 'react';
import ReactStars from 'react-stars';

const Cards = () => {
  const [data, setData] = useState([
    {
      Name: 'Skill GPT Web Dev Path',
      Instructor: 'ABC',
      StudentsEnrolled: 99,
      img: 'https://scrimba.com/assets/peeps-social.svg',
      Rating: 3,
    },
    {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
    {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
    {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
      {
        Name: 'Skill GPT Web Dev Path',
        Instructor: 'ABC',
        StudentsEnrolled: 99,
        img: 'https://scrimba.com/assets/peeps-social.svg',
        Rating: 3,
      },
  ]);

  return (
    <div className='flex flex-wrap justify-center p-3 mt-2 mx-6'>
    {data.map((e, i) => {
      return (
        <div
          key={i}
          className='card shadow-lg p-2 font-semibold hover:-translate-y-2 cursor-pointer mt-5 mx-4 transition-all duration-100 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4'
        >
                        <div className='w-21 h-21 overflow-hidden rounded'>
                          <img className='w-full h-full' src={e.img} alt="Card thumbnail" />
                        </div>
                        <h1>
                          <span className='text-blue ml-1 mr-1'></span><span className='text-white ml-1'>{e.Name}</span>
                        </h1>
                        <h1>
                          <span className='text-blue ml-1'>Instructor:</span><span className='text-white ml-1'>{e.Instructor}</span>
                        </h1>
                        <h1>
                          <span className='text-blue ml-1'>
                            Students Enrolled:</span><span className='text-white ml-1'>{e.StudentsEnrolled}
                          </span>
                        </h1>
                        <h1 className="flex items-center">
                          <span className='text-blue ml-1 m-1'>Rating: </span>
                            <ReactStars
                            size={20}
                            half={true}
                            value= {e.Rating}
                            edit={false}
                          />
                        </h1>
                      </div>
                    );
                  })}
                </div>
              );
            };
            
            export default Cards;
