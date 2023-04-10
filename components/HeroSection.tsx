"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Typed from 'react-typed';




const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-20 py-8 sm:py-16 md:py-24 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl animate-updown"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          {/* <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Evi!</h1> */}
          <Typed
            strings={['Hi, I\'m Evi Dianasari.']}
            typeSpeed={80}
            backSpeed={50}
            loop
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            
          />
          <p className="text-lg mt-4 mb-6 md:text-2xl text-justify">
            I&#39;m a{" "}

            <span className="font-semibold text-teal-600">
              Active student at informatics faculty Udayana University. {" "}
            </span>

            I have an interest in the technology and computer programming, especially in database management, UI web design, and network security. I am eager to learn. I also participated in many activity and seminar to improve my skill not only about computers, but new things too. Right now my activities are studying full stack web development at eduwork.

          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
