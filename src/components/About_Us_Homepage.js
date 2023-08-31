import React, { Component } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import {ReactSocialMediaIcons} from 'react-social-media-icons';

export class About_Us_Homepage extends Component {
  render() {
    return (
      <section className="background pt-20 pb-20">
        {/* <div class="background"> */}
          <div class="shape"></div>
          <div class="shape"></div>
          <div class="shape"></div>
          <div className="container mx-auto">
            <div className="flex gap-20 bg-zinc-900 text-white p-20 shadow-xl rounded-2xl">
              <div className="w-1/2">
                <h2 className='text-left mb-5 text-4xl font-light'>За Нас</h2>
                <p className='text-left text-xl font-light'>In/between се зарaжда като естествено продължение на общите проекти, които свързват членовете на фондацията – сред които създаване на изложби, артистични прояви и осъществяване на международната програма за творчески обмен Re-connect (Тимишоара – Пловдив 2023).</p>
              </div>
              <div className="w-1/2">
                <h2 className='text-left mb-5 text-4xl font-light'>Контакти</h2>
                <div className='flex flex-col gap-4 mb-10'>
                  <a class="flex flex-row gap-1 text-white hover:text-primary transition-all duration-200 ease-in-out" target='mailto:inbetween@gmail.com' href="inbetween@gmail.com" ><EnvelopeIcon className='image w-7'></EnvelopeIcon> inbetween@gmail.com</a>
                  <a class="flex flex-row gap-1 text-white hover:text-primary transition-all duration-200 ease-in-out" target='tel:0898123321' href="" ><PhoneIcon className='image w-7'></PhoneIcon>0898 123 321</a>
                </div>
                <div className='flex flex-row gap-2'>
                  <ReactSocialMediaIcons borderColor="" roundness="6" borderWidth="0" iconSize="4" icon="facebook" iconColor="#7e22ce" backgroundColor="#fff" url="#" size="36" />
                  <ReactSocialMediaIcons borderColor="" roundness borderWidth="0" iconSize="4" icon="twitter" iconColor="#7e22ce" backgroundColor="#fff" url="#" size="36" />
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