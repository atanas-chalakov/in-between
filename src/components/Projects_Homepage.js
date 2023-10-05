import React, { Component, useState, useEffect, useRef } from 'react'

import Reconnect from '../assets/images/reconnect.jpg'
import Festival from '../assets/images/festival.jpg'
import Connect from '../assets/images/connect.jpg'
import Ecology from '../assets/images/ecology.jpg'
import Women from '../assets/images/women.jpg'

function Activities_Homepage() {

  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const ref = useRef(null);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     ref.current.querySelectorAll("section").forEach((el) => {
  //       el.classList.add("slide-in");
  //     });
  //   }
  // }, [isIntersecting]);

  // const [scroll, setScroll] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 50);
  //   });
  // }, []);

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])

  return (

    <div className='bg-white pt-8 pb-20'>
      <div className={scroll ? "animate" : ""} >
        <h2 className='text-center mb-10 text-4xl font-light'>Какво можем да правим заедно?</h2>
      </div>
      
      <div className={scroll ? "animate" : ""} >
      <section className="pt-20 pb-20 ">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 order-2">
              <img src={Reconnect} alt="reconnect" />
            </div>
            <div className="content w-2/3 order-1">
              <h3 className='mb-5 text-4xl font-light'>Изложби в алтернативна среда</h3>
              <p className='text-lg'></p>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      <div className={scroll ? "animate" : ""} >
      <section className="bg-primary_3 pt-20 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 md:order-1">
              <img src={Festival} alt="" />
            </div>
            <div className="content w-2/3 md:order-2">
              <h3 className='mb-5 text-4xl font-light'>Екологично-образователни фестивали и форуми</h3>
              <p className='text-lg'></p>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      <div className={scroll ? "animate" : ""} >
      <section className="bg-zinc-900 pt-20 pb-20 text-white">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 md:order-2">
              <img className="image w-100" src={Connect} alt="" />
            </div>
            <div className="content w-2/3 md:order-1">
              <h3 className='mb-5 text-4xl font-light'>Художествени намеси в градска среда</h3>
              <p className='text-lg'></p>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      <div className={scroll ? "animate" : ""} >
      <section className="bg-primary_3 pt-20 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 md:order-1">
              <img src={Ecology} alt="" />
            </div>
            <div className="content w-2/3 md:order-2">
              <h3 className='mb-5 text-4xl font-light'>Уъркшопове с културно-приобщаваща кауза</h3>
              <p className='text-lg'></p>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      <div className={scroll ? "animate" : ""} >
      <section className="pt-20 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 md:order-2">
              <img src={Women} alt="" />
            </div>
            <div className="content w-2/3 md:order-1">
              <h3 className='mb-5 text-4xl font-light'>Резидентни програми с международно участие</h3>
              <p className='text-lg'></p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
export default Activities_Homepage
