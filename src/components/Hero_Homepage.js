import React, { Component } from 'react'
import Slogan from '../assets/images/l.svg'

export class Hero_Homepage extends Component {
  render() {
    return (
      <section id="hero-home" className="pt-20 pb-20 text-slate-100">
        <div className="container mx-auto">
          <div className="flex flex-col content-center items-center">
            <div className="md:w-11/12 flex flex-col content-center items-center">
              <div className='hero-img mb-5 mx-auto w-60 flex flex-row'>
              {/* <img src={Slogan} alt="slogan" /> */}
              </div>
              <h1 className='text-center mb-5 text-7xl font-bold'>In Between</h1>
              <h2 className='text-center md:mb-12 text-3xl font-thin'>Foundation of Art</h2>
              <p className='text-center text-2xl font-light w-10/12 md:mb-12'>Фокусира дейността си към артистични изяви и обмен в сферата на съвременното визуално изкувство като развива и популяризира художественета сцена на България – в рамките на държавата и в чужбина.</p>
              <a href="#" className='btn-white'>Контакти</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Hero_Homepage