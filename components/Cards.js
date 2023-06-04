import React, { useState } from 'react';
import ReactStars from 'react-stars';

const data = [
  {
    Name: 'Web Development Course',
    Instructor: 'John Smith',
    StudentsEnrolled: 120,
    img: 'https://example.com/course1.jpg',
    Rating: 3,
  },
  {
    Name: 'JavaScript Fundamentals',
    Instructor: 'Jane Doe',
    StudentsEnrolled: 80,
    img: 'https://example.com/course2.jpg',
    Rating: 3.5,
  },
  {
    Name: 'React Complete Guide',
    Instructor: 'Mike Johnson',
    StudentsEnrolled: 150,
    img: 'https://example.com/course3.jpg',
    Rating: 4,
  },
  {
    Name: 'Python Crash Course',
    Instructor: 'Sarah Thompson',
    StudentsEnrolled: 200,
    img: 'https://example.com/course4.jpg',
    Rating: 4.5,
  },
  {
    Name: 'HTML & CSS Basics',
    Instructor: 'David Wilson',
    StudentsEnrolled: 90,
    img: 'https://example.com/course5.jpg',
    Rating: 3,
  },
  {
    Name: 'Node.js Essentials',
    Instructor: 'Emily Turner',
    StudentsEnrolled: 100,
    img: 'https://example.com/course6.jpg',
    Rating: 3.5,
  },
  {
    Name: 'Full Stack Web Development',
    Instructor: 'Michael Brown',
    StudentsEnrolled: 180,
    img: 'https://example.com/course7.jpg',
    Rating: 4,
  },
  {
    Name: 'Data Structures in Python',
    Instructor: 'Olivia Clark',
    StudentsEnrolled: 120,
    img: 'https://example.com/course8.jpg',
    Rating: 4.5,
  },
  {
    Name: 'React Native Mobile Development',
    Instructor: 'Daniel Evans',
    StudentsEnrolled: 140,
    img: 'https://example.com/course9.jpg',
    Rating: 3,
  },
  {
    Name: 'Java Programming Fundamentals',
    Instructor: 'Sophia Roberts',
    StudentsEnrolled: 160,
    img: 'https://example.com/course10.jpg',
    Rating: 3.5,
  },
  {
    Name: 'Data Science with Python',
    Instructor: 'William Wilson',
    StudentsEnrolled: 250,
    img: 'https://example.com/course11.jpg',
    Rating: 4,
  },
  {
    Name: 'Angular - The Complete Guide',
    Instructor: 'Chloe Davis',
    StudentsEnrolled: 110,
    img: 'https://example.com/course12.jpg',
    Rating: 4.5,
  },
  {
    Name: 'Machine Learning Fundamentals',
    Instructor: 'Henry Adams',
    StudentsEnrolled: 130,
    img: 'https://example.com/course13.jpg',
    Rating: 3,
  },
  {
    Name: 'CSS Advanced Techniques',
    Instructor: 'Sophie Turner',
    StudentsEnrolled: 70,
    img: 'https://example.com/course14.jpg',
    Rating: 3.5,
  },
  {
    Name: 'Python Web Scraping',
    Instructor: 'David Wilson',
    StudentsEnrolled: 95,
    img: 'https://example.com/course15.jpg',
    Rating: 4,
  },
  {
    Name: 'Vue.js Complete Course',
    Instructor: 'Emma Thompson',
    StudentsEnrolled: 200,
    img: 'https://example.com/course16.jpg',
    Rating: 4.5,
  },
];


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
