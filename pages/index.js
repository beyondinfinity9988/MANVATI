import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Animation from '../components/Animation.js';
import Review from '@/components/Review.js';
import Batch from '@/components/Batch.js';
import Footer from '@/components/Footer.js';
import DemoCarousel from '@/components/Slider.js';
import Cards from '@/components/Cards.js';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>skillgpt.com</title>
      </Head>

      <header className="bg-black">
    <div className="flex justify-between items-center px-8">
      <div>
        <a href="/" className="text-4xl text-white font-extrabold">
          SKILLGPT
        </a>
      </div>
      <div className="flex items-center">
        <nav className="hidden sm:block space-x-4">
          <a href="/" className="text-white hover:text-orange-500">
            Home
          </a>
          <a href="/" className="text-white hover:text-orange-500">
            Courses
          </a>
          <a href="/" className="text-white hover:text-orange-500">
            Goals
          </a>
          <a href="/" className="text-white hover:text-orange-500">
            Instructors
          </a>
          <a href="/" className="text-white hover:text-orange-500">
            Contact Us
          </a>
        </nav>
        <button
          className="ml-4 text-white border border-cyan-900 px-6 py-2 rounded-full text-lg focus:bg-transparent"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </div>
    {isMenuOpen && (
      <nav className="sm:hidden bg-black px-4 py-2">
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-white hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-orange-500">
              Courses
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-orange-500">
              Goals
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-orange-500">
              Instructors
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    )}
  </header>
<div>
 <Cards />
</div>
  <div className="flex-grow">
    <Animation />
    <DemoCarousel />
    <Batch />
  </div>

      <Footer />
    </>
  );
}
