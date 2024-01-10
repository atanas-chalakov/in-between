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
import festival from '../assets/images/festival.png'
import green from '../assets/images/green-v2.gif'
import yellow from '../assets/images/yellow-v2.gif'
import small from '../assets/images/small.png'

function Projects_Homepage_v2() {

  return (
    <>
    <div className=' pt-20 pb-20'>
      <h2 className='animation-wrapper text-center mb-0 text-3xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700'>Акцент 2024</h2>
    </div>
    <div className=''>
      <section className="animation-wrapper pt-12 pb-12 md:pt-20 md:pb-20 bg-primary_4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row content-center items-top gap-10">
            <div className="image w-full md:w-1/2 order-1 md:order-2 h-full  opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-right">
              <div className='border-solid border-4 border-white p-4'>
                <img src={festival} alt="image" className="w-full "/>
                <div className="w-100 flex flex-row justify-between items-end gap-1 mx-auto ">
                  <img src={yellow} alt="image" className="w-32 mb-10 "/>
                  <img src={green} alt="image" className="w-48 "/>
                  {/* <img src={small} alt="image" className="w-16 opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700"/> */}
                </div>
              </div>
              <div className='flex justify-center items-center py-4'>
              
                <a className='button-white' target='_blank' href="https://docs.google.com/forms/d/1ijfD8Xs2_TFim0PRUICgfRv-Lk949covRu01cJOPR7M/viewform?chromeless=1&edit_requested=true&fbclid=IwAR0j-clPuX2VImw6mNrqauuPVbQmlLX4rEuJWwKYPxyYACuHd_mnS-iD_iQ">Апликационна форма</a>
              </div>
            </div>
            <div className="content w-full md:w-1/2 order-2 md:order-1 opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-left">
              <div className='border-solid border-4 border-white p-4 mb-4'>
                <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light'>Детски фестивал за изкуства: <strong className='block pt-3 font-bold'>“Ние сме децата на реката”</strong></h3>
                <p className='text-left mb-2 text-md font-light'>Пилотното издание на ежегодният детски фестивал за изкуства “Ние сме децата на реката”, ще се проведе в Пловдив. Вдъхновени от природата като “,велик артист”, организаторите от InBetween Foundation of art избират локация за фестивала - бреговете на река Марица. Фестивалът има за цел сближаване децата с изкуството и възможност за откриване на нови творчески хоризонти пред подрастващите и катализиране на детския творчески потенциал.</p>
                <p className='text-left mb-2 text-md font-light'>Едно от посланията, които ще отправи събитието е насочено към връзката на малки и големи с природата и възможностите, които ни дава реката за отдих и забавление. Един от основните акценти ще бъде темата за превенция на замърсяването и нашата роля за опазване на природата. В програмата на фестивала ще бъдат включени музикално-артистични изпълнения на живо от сцена; творчески и креативни работилници; зона за изложители на стоки насочени към деца, родители; запознаване на децата с изкуството; зона спорт и забавление. Събитието ще бъде с вход свободен за всички деца и родители!</p>
              </div>
              <strong className='text-left mb-2 text-md font-bold px-4 block'>Фестивалът търси своите партньори и съмишленици! Свържете се с нас за повече информация!</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className='bg-white pt-20 pb-20'>
      
      <h2 className='animation-wrapper text-center mb-10 text-3xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700'>Активности</h2>
      
      <section className="animation-wrapper pt-12 pb-12 md:pt-20 md:pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row content-center items-center gap-10">
            <div className="image w-full md:w-1/3 order-1 md:order-2">
              <img src={img1} alt="image" className="w-full opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700"/>
            </div>
            <div className="content w-full md:w-2/3 order-2 md:order-1">
              <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-left'>Изложби за съвременно изкуство с алтернативна презентация</h3>
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
              <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-right'>Екологично-информативни форуми и фестивални акции</h3>
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
              <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light opacity-1 md:opacity-0 transition ease-in-out delay-150 duration-700 custom-text-transform-right'>Артистични работилници с културно-приобщаваща цел </h3>
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
    </>
  );
}
export default Projects_Homepage_v2
