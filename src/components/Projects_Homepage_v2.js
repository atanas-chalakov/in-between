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

import uni_1 from '../assets/images/uni-1.jpg'
import uni_2 from '../assets/images/uni-2.jpg'
import uni_3 from '../assets/images/uni-3.jpg'

import video1 from "../assets/images/festival-video.mp4";

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ReactSocialMediaIcons } from 'react-social-media-icons';

function Projects_Homepage_v2() {

  return (
    <>
      <div className='bg-white pt-20 pb-20'>

        <h2 className='animation-wrapper text-center mb-10 text-3xl md:text-4xl font-light '>Активности</h2>

        <section className="animation-wrapper pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row content-center items-center gap-10">
              <div className="image w-full md:w-1/3 order-1 md:order-2">
                <img src={img1} alt="image" className="w-full " />
              </div>
              <div className="content w-full md:w-2/3 order-2 md:order-1">
                <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light  custom-text-transform-left'>Изложби за съвременно изкуство с алтернативна презентация</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="animation-wrapper bg-primary_3 pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row content-center items-center gap-10 ">
              <div className="image w-full md:w-1/3 md:order-1">
                <img src={img2} alt="image" className="w-full " />
              </div>
              <div className="content w-full md:w-2/3 md:order-2">
                <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light  custom-text-transform-right'>Екологично-информативни форуми и фестивални акции</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="animation-wrapper bg-zinc-900 text-white pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row content-center items-center gap-10">
              <div className="image w-full md:w-1/3 md:order-2">
                <img src={img3} alt="image" className="w-full " />
              </div>
              <div className="content w-full md:w-2/3 md:order-1">
                <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light  custom-text-transform-left'>Художествени намеси в градска среда</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="animation-wrapper bg-primary_3 pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row content-center items-center gap-10">
              <div className="image w-full md:w-1/3 md:order-1">
                <img src={img4} alt="image" className="w-full " />
              </div>
              <div className="content w-full md:w-2/3 md:order-2">
                <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light  custom-text-transform-right'>Артистични работилници с културно-приобщаваща цел </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="animation-wrapper pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row content-center items-center gap-10">
              <div className="image w-full md:w-1/3 md:order-2">
                <img src={img5} alt="image" className="w-full " />
              </div>
              <div className="content w-full md:w-2/3 md:order-1">
                <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light  custom-text-transform-left'>Резидентни програми с международно участие</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="about" className="background pt-20 pb-20">
        {/* <div class="background"> */}
        {/* <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div> */}
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 bg-zinc-900 text-white p-8 md:p-20 shadow-xl rounded-2xl">
            <div className="w-full lg:w-1/2">
              <h2 className='text-left mb-5 text-2xl md:text-4xl font-light'>За Нас</h2>
              <p className='text-left mb-2 text-md font-light'>Зад In/between стои колектив обединен от каузата за създаване на хибридни форми за презентиране на изкуство и заздравяване на връзката между институциите и пространствата с по неформален статут.</p>
              <p className='text-left mb-2 text-md font-light'>С дейностите и програмите, които извършва фондацията визуалните артистите имат възможност да са част от динамична и жива културно-социална среда, която излиза извън пределите на определените нормативи, поддържани от институционалните структури, без да ги лишава от тяхното влияние и значение, а създавайки мост между различните перспективи. По този начин съвременното изкуство се приближава до публиката и може да се осъществи по-директен и достъпен диалог.</p>
              <p className='text-left text-md font-light'>Основната дейност на фондацията е организиране на резидентни програми с международно участие, проекти с екологично послание, различни образователни формати и алтернативен тип форуми и фестивали.</p>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className='text-left mb-5 text-2xl md:text-4xl font-light'>Контакти</h2>
              <div className='flex flex-col gap-4 mb-10'>
                <a className="flex flex-row gap-1 text-white hover:text-primary transition-all duration-200 ease-in-out" href="mailto:inbetweenfoundation@gmail.com" ><EnvelopeIcon className='image w-7'></EnvelopeIcon> inbetweenfoundation@gmail.com</a>
                <a className="flex flex-row gap-1 text-white hover:text-primary transition-all duration-200 ease-in-out" href="tel:0888460386" ><PhoneIcon className='image w-7'></PhoneIcon>0888 460 386</a>
              </div>
              <div className='flex flex-row gap-2'>
                <ReactSocialMediaIcons borderColor="" roundness="6" borderWidth="0" iconSize="4" icon="facebook" iconColor="#7e22ce" backgroundColor="#fff" url="https://www.facebook.com/profile.php?id=61550296665490" size="36" target="_blank" />
                <ReactSocialMediaIcons borderColor="" roundness borderWidth="0" iconSize="4" icon="instagram" iconColor="#7e22ce" backgroundColor="#fff" url="https://www.instagram.com/inbetween_foundation/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D&fbclid=IwAR3JLvC4Ei_iAsnFHNEFtfjESEicpOKL5H6PwAB48_nTANHSfRFJ0QzscFk" size="36" target="_blank" />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      <div className='bg-primary_3 pt-20 pb-20'>
        <div className="container mx-auto">
          <h2 className='animation-wrapper text-center md:mb-5 text-3xl md:text-4xl font-light'>АКТИВНИ ИНФОРМАЦИОННИ КАМПАНИИ</h2>
          <p className='text-left mb-2 text-md  text-center font-light md:mb-10'>
            С подкрепата на УниКредит Студио, бе проведена информационна кампания “Ние сме децата на реката”- Преоткрий природата в твоя град.
            Основната идея на фестивала е преоткриване на градските пространства, подобно на потока на реките – чрез разнообразни занимания с изкуство, спорт и дискусии на открито.
            Събитието е част от комуникационният план за интегриране на екологично съзнание сред подрастващите и популяризиране на концепцията за зелен град, насърчаване на устойчиви практики за опазване на околната среда, както и на чувството за единство и принадлежност в общността към градската екосистема.
          </p>
          <div className='flex flex-col md:flex-row content-center justify-center items-top gap-10'>

            <img src={uni_1} className="block uni_img height-auto" alt="" srcset="" />
            <img src={uni_2} className="block uni_img height-auto" alt="" srcset="" />
            <img src={uni_3} className="block uni_img height-auto" alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className=' pt-20 pb-20'>
        <h2 className='animation-wrapper text-center mb-0 text-3xl md:text-4xl font-light '>Акцент 2024</h2>
      </div>
      <div>
        <section className="animation-wrapper pt-12 pb-12 md:pt-20 md:pb-20 bg-primary_4">
          <div className="container mx-auto mb-10">
            <video className='fest-video w-100' src={video1} autoPlay="true" muted></video>
          </div>
          <div className="container mx-auto">
            <div className="mb-10 flex flex-col md:flex-row content-center items-top gap-10">
              <div className="image w-full md:w-1/2 order-2 md:order-2 h-full  ">
                <div className='program border-solid border-4 border-white p-4'>
                  <h4>Програма от сцена</h4>
                  <div className="presenter">Водещ Даниел Киров</div>

                  <div className="event"><span>11:00 - 11:15</span> - Официално откриване</div>
                  <div className="event-info">г-н Георги Стаменов кмет на район Централен Община Пловдив;
                    Представител на Пловдив 2019; Виктория Гецова от БулЕкопак; Мира Мохсен,
                    основател на InBetween</div>
                  <div className="event"><span>11:20 - 11:30</span> - Да Дао демонстрация от сцена</div>
                  <div className="event"><span>11:30 - 12:10</span> - Drum session с Дамян Харалампиев</div>
                  <div className="event"><span>12:10 - 12:40</span> - Амира - сесия с китара</div>
                  <div className="event"><span>12:40 - 13:20</span> - Група Nienna</div>
                  <div className="event"><span>13:20 - 14:05</span> - Театър Зазу - “Принцът Жабок”</div>
                  <div className="event"><span>14:10 - 14:30</span> - Зелен куест с награди от Булекопак</div>
                  <div className="event"><span>14:30 - 15:30</span> - DJ музикална програма</div>
                  <div className="event"><span>15:30 - 16:00</span> - Дуо Николай Иванов и Людмил Хризанов- Поп и Джаз</div>
                  <div className="event"><span>16:00 - 16:30</span> - Група Freija</div>
                  <div className="event"><span>16:30</span> Награждаване на конкурс за детска рисунка</div>
                  <h5>ЛЕКЦИИ и ДИСКУСИИ:</h5>
                  <div className="event"><span>14:10 - 14:50</span> - Тайните на взаимодействието между микробиома,</div>
                  имунната система и факторите на околната среда
                  <div className="event"><span>14:50 - 15:00</span> БДЗП - Дискусия</div>
                  <div className="event"><span>15:00 - 16:00</span> - Дискусия &quot;Работилница за речни идеи&quot;</div>

                  <h5>ПРОГРАМА СПОРТ:</h5>
                  <div className="event"><span>11:30 - 12:30</span> ДА Дао - Открити тренировки</div>
                  <div className="event"><span>12:30- 13:30</span> Син Дао - Открити тренировки</div>
                  <div className="event"><span>11:30 - 12:30</span> Йога за деца</div>
                  <div className="event"><span>12:30-13:30</span> Медитационни практики</div>
                  <h5>РАБОТИЛНИЦИ:</h5>
                  <div className="event"><span>10:00- 17:00</span></div>
                  <div className="event-info">
                    Работилница за рисуване - “Омагьосващият свят на илюстрацията”<br />
                    Екологична работилница - ”Направи си сам тефтер”<br />
                    Книговище.БГ - “Колко хубаво е да четем!”<br />
                    workshop с ударни инструменти с Дамян Харалампиев и Амира / китара /<br />
                  </div>
                </div>

              </div>
              <div className="content w-full md:w-1/2 order-1 md:order-1">
                <div className='border-solid border-4 border-white p-4 mb-4'>
                  <h3 className='mb-0 md:mb-5 text-2xl md:text-4xl font-light'>Детски фестивал за изкуства: <strong className='block pt-3 font-bold'>“Ние сме децата на реката”</strong></h3>
                  <p className='text-left mb-2 text-md font-light'>Пилотното издание на ежегодният детски фестивал за изкуства “Ние сме децата на реката”, ще се проведе в Пловдив. Вдъхновени от природата като “,велик артист”, организаторите от InBetween Foundation of art избират локация за фестивала - бреговете на река Марица. Фестивалът има за цел сближаване децата с изкуството и възможност за откриване на нови творчески хоризонти пред подрастващите и катализиране на детския творчески потенциал.</p>
                  <p className='text-left mb-2 text-md font-light'>Едно от посланията, които ще отправи събитието е насочено към връзката на малки и големи с природата и възможностите, които ни дава реката за отдих и забавление. Един от основните акценти ще бъде темата за превенция на замърсяването и нашата роля за опазване на природата. В програмата на фестивала ще бъдат включени музикално-артистични изпълнения на живо от сцена; творчески и креативни работилници; зона за изложители на стоки насочени към деца, родители; запознаване на децата с изкуството; зона спорт и забавление. Събитието ще бъде с вход свободен за всички деца и родители!</p>
                </div>
                <strong className='text-left mb-8 text-md font-bold px-4 block'>Фестивалът търси своите партньори и съмишленици! Свържете се с нас за повече информация!</strong>
                <div className='border-solid border-4 border-white p-4'>
                  <img src={festival} alt="image" className="w-full " />
                  <div className="w-100 flex flex-row justify-between items-end gap-1 mx-auto ">
                    <img src={yellow} alt="image" className="w-32 mb-10 " />
                    <img src={green} alt="image" className="w-48 " />
                    {/* <img src={small} alt="image" className="w-16 "/> */}
                  </div>
                </div>
                <div className='flex justify-center items-center py-4'>

                  <a className='button-white' target='_blank' href="https://docs.google.com/forms/d/1ijfD8Xs2_TFim0PRUICgfRv-Lk949covRu01cJOPR7M/viewform?chromeless=1&edit_requested=true&fbclid=IwAR0j-clPuX2VImw6mNrqauuPVbQmlLX4rEuJWwKYPxyYACuHd_mnS-iD_iQ">Апликационна форма</a>
                </div>
              </div>
            </div>
            <div className='p-4 py-8 md:p-10 bg-white'>
              <div className="flex flex-col md:flex-row content-center justify-center items-top gap-10">
                <h4 className='mb-10 text-l md:text-xl font-light text-center px-0 md:px-8'>Фестивалът се осъществява с подкрепата на Район Централен, Община Пловдив, Фондация Пловдив 2019. Пловдив - Европейска столица на културата 2019 и Булекопак АД
                  Част от програмата „Зелена Култура – Зелен Град“  на Пловдив - Европейска столица на културата 2019</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Projects_Homepage_v2
