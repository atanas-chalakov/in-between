import React, { Component } from 'react'

import ft from '../assets/images/footer.svg'
import bl from '../assets/images/bottom-left.svg'
import br from '../assets/images/bottom-right.svg'
import tl from '../assets/images/top-left.svg'
import tr from '../assets/images/top-right.svg'
import Valkov from '../assets/images/Valkov.jpg'
import Kalina from '../assets/images/Kalina.jpg'
import h2p from '../assets/images/h2p.png'
import baraka from '../assets/images/BARAKA-ARTIST.jpg'
import NavaC2 from '../assets/images/NavaC2.webp'
import artouching from '../assets/images/artouching.svg'

import plovdiv from '../assets/images/plovdiv.jpg'
import plovdiv2019 from '../assets/images/Plovdiv2019.png'
import bulekopak from '../assets/images/bulekopak.png'

export class Partners_Homepage extends Component {
  render() {
    return (
      <section id="team" className="bg-white pt-10 pb-10 mb:pt-20 mb:pb-20">

        <div className="container mx-auto">
          <h2 className='text-center mb-5 md:mb-10 text-2xl md:text-4xl font-light'>Партньори</h2>
          <div className="flex flex-col mb-10 md:flex-row content-center justify-center items-center gap-10">
            <div className="image w-full md:w-1/4 order-1 md:order-2 h-full flex justify-center items-center">
              <img src={plovdiv2019} alt="plovdiv2019" className='h-16 md:height-auto w-auto' />
            </div>
            <div className="image w-full md:w-1/4 order-1 md:order-2 h-full flex justify-center items-center">
              <img src={plovdiv} alt="plovdiv" className='h-34 md:height-auto w-auto' />
            </div>
            <div className="image w-full md:w-1/4 order-1 md:order-2 h-full flex justify-center items-center">
              <img src={bulekopak} alt="bulekopak" className='h-16 md:height-auto w-auto' />
            </div>
          </div>
          <div className="flex content-center justify-center gap-9 mb-16">
            <div className='flex flex-col items-center'>
              <a href="https://instagram.com/bkmihai?igshid=MzRlODBiNWFlZA==" target="_blank" className="flex justify-center items-center mb-4 w-24 h-24 md:h-32 md:w-32">
                <img src={baraka} alt="baraka artist logo" className='h-24 md:h-32' />
              </a>
              <a href="https://instagram.com/bkmihai?igshid=MzRlODBiNWFlZA==" target="_blank" className='text-center'>
                <span className='text-lg'>Baraka Artist</span>
              </a>
            </div>
            <div className='flex flex-col items-center'>
              <a href="https://www.facebook.com/artouching/" target="_blank" id="artouching" className="flex justify-center items-center mb-4 w-24 h-24 md:h-32 md:w-32">
                <img src={artouching} alt="baraka artist logo" className='h-24 md:h-32' />
              </a>
              <a href="https://www.facebook.com/artouching/" target="_blank" className='text-center'>
                <span className='text-lg'>Artouching</span>
              </a>
            </div>
            <div className='flex flex-col items-center'>
              <a href="https://instagram.com/navacedoi?igshid=MzRlODBiNWFlZA==" target="_blank" className="flex justify-center items-center mb-4 w-24 h-24 md:h-32 md:w-32 bg-black">
                <img src={NavaC2} alt="NavaC2 logo" className='h-24 md:h-32' />
              </a>
              <a href="https://instagram.com/navacedoi?igshid=MzRlODBiNWFlZA==" target="_blank" className='text-center'>
                <span className='text-lg'>NavaC2</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <h2 className='text-center mb-5 md:mb-10 text-2xl md:text-4xl font-light'>Ексклузивен медиен партньор</h2>
          <div className="flex content-center justify-center">
            <a href="https://www.how2plovdiv.com/" target="_blank">
              <img src={h2p} alt="How2Plovdiv" className='h-12 md:h-20' />
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Partners_Homepage