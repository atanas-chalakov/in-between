import React, { Component } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ReactSocialMediaIcons } from 'react-social-media-icons';

export class About_Us_Homepage extends Component {
  render() {
    return (
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
    )
  }
}

export default About_Us_Homepage