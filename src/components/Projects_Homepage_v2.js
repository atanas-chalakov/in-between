import React, { Component, useState, useEffect, useRef } from 'react'

// import Reconnect from '../assets/images/reconnect.jpg'
// import Festival from '../assets/images/festival.jpg'
// import Connect from '../assets/images/connect.jpg'
// import Ecology from '../assets/images/ecology.jpg'
// import Women from '../assets/images/women.jpg'

import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'

function Projects_Homepage_v2() {

  return (

    <div className='bg-white pt-8 pb-20'>
      <h2 className='animation-wrapper text-center mb-10 text-3xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700'>Какво можем да правим заедно?</h2>
      
      <section className="animation-wrapper pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row content-center items-center gap-10">
            <div className="image w-full md:w-1/3 order-1 md:order-2">
              <img src={img1} alt="image" className="w-full opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700"/>
            </div>
            <div className="content w-full md:w-2/3 order-2 md:order-1">
              <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-left'>Изложби в алтернативна среда</h3>
            </div>
          </div>
        </div>
      </section>
      
      <section className="animation-wrapper bg-primary_3 pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row content-center items-center gap-10 ">
            <div className="image w-full md:w-1/3 md:order-1">
              <img src={img2} alt="image" className="w-full opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700" />
            </div>
            <div className="content w-full md:w-2/3 md:order-2">
              <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-right'>Екологично-образователни фестивали и форуми</h3>
            </div>
          </div>
        </div>
      </section>
      
      <section className="animation-wrapper bg-zinc-900 text-white pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row content-center items-center gap-10">
            <div className="image w-full md:w-1/3 md:order-2">
              <img src={img3} alt="image" className="w-full opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700" />
            </div>
            <div className="content w-full md:w-2/3 md:order-1">
              <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-left'>Художествени намеси в градска среда</h3>
            </div>
          </div>
        </div>
      </section>
      
      <section className="animation-wrapper bg-primary_3 pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row content-center items-center gap-10">
            <div className="image w-full md:w-1/3 md:order-1">
              <img src={img4} alt="image" className="w-full opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700" />
            </div>
            <div className="content w-full md:w-2/3 md:order-2">
              <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-right'>Уъркшопове с културно-приобщаваща кауза</h3>
            </div>
          </div>
        </div>
      </section>
      
      <section className="animation-wrapper pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row content-center items-center gap-10">
            <div className="image w-full md:w-1/3 md:order-2">
              <img src={img5} alt="image" className="w-full opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700" />
            </div>
            <div className="content w-full md:w-2/3 md:order-1">
              <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-left'>Резидентни програми с международно участие</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Projects_Homepage_v2
