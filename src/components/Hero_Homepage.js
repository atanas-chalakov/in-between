import React, { Component } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import Logo from '../assets/images/LogoWhite.svg'

export class Hero_Homepage extends Component {
  render() {
    return (
      <section id="hero-home" className="pt-14 md:pt-20 pb-20 text-slate-100">
        <div className="container mx-auto">
          <div className="flex flex-col content-center items-center">
            <div className="md:w-11/12 flex flex-col content-center items-center">
              <div className='hero-img mb-5 mx-auto w-60 flex flex-row'>
              <img src={Logo} alt="logo" className='w-50' />
              </div>
              {/* <h1 className='text-center mb-5 text-7xl font-bold'>In Between</h1>
              <h2 className='text-center md:mb-12 text-3xl font-thin'>Foundation of Art</h2> */}
              <p className='text-center text-xl md:text-2xl font-light md:w-3/5 mb-10 md:mb-12'>In\between фокусира дейността си към артистични изяви и обмен в сферата на съвременното визуално изкуство, като развива и популяризира художествената сцена на България – в рамките на страната и  чужбина.</p>
              {/* <a onClick={() => scrollTo('#about')}  className='btn-white cursor-pointer'>Контакти</a> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Hero_Homepage