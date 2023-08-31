import React, { Component } from 'react'
import Reconnect from '../assets/images/reconnect.jpg'
import Festival from '../assets/images/festival.jpg'
import Connect from '../assets/images/connect.jpg'
import Ecology from '../assets/images/ecology.jpg'
import Women from '../assets/images/women.jpg'

export class Activities_Homepage extends Component {
  render() {
    return (
      <div className='bg-white pt-8 pb-20'>
      <h2 className='text-center mb-10 text-5xl font-light'>Какво можем да направим заедно?</h2>
      <section className="pt-20 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 order-2">
              <img src={Reconnect} alt="reconnect" />
            </div>
            <div className="content w-2/3 order-1">
              <h3 className='mb-5 text-4xl font-light'>(Double trouble)</h3>
              <p className='text-lg'>Кратки резидентни програми за чуждестранни артисти – двама участника, настаняване при съседа за 10 или 14 дни, изготвяне на произведения, които ще се покажат в публични пространства или в „Secret garden” (задния ни двор – the secret square, non-articulated space and art garden)</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary_3 pt-20 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 md:order-1">
              <img src={Festival} alt="" />
            </div>
            <div className="content w-2/3 md:order-2">
              <h3 className='mb-5 text-4xl font-light'>Nqmam nikva ideq kvo e tva i slojih kashoni</h3>
              <p className='text-lg'>(Сбор за съвременно изкуство за боси хора, щото масово сме боси за съвременното изкуство) – бутиков фестивал за изкуство, който ще се провежда като акция и различни галерии ще показват артисти, с които работят по достъпен начин за публиката – извън контейнера на галерията, ще се ходи бос</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-900 pt-20 pb-20 text-white">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 md:order-2">
              <img className="image w-100" src={Connect} alt="" />
            </div>
            <div className="content w-2/3 md:order-1">
              <h3 className='mb-5 text-4xl font-light'>Re:connected</h3>
              <p className='text-lg'>продължаване на ежегоден обмен между град от балканите и пловдив, който завършва с голяма колективна изложба. Включва артисти и от предишните обмени – създава се мрежа</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary_3 pt-20 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 md:order-1">
              <img src={Ecology} alt="" />
            </div>
            <div className="content w-2/3 md:order-2">
              <h3 className='mb-5 text-4xl font-light'>Public ecology</h3>
              <p className='text-lg'>проекти в публична среда с изцяло екологично послание и техники.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-row content-center items-center gap-10">
            <div className="image w-1/3 md:order-2">
              <img src={Women} alt="" />
            </div>
            <div className="content w-2/3 md:order-1">
              <h3 className='mb-5 text-4xl font-light'>Fierce grace</h3>
              <p className='text-lg'>модул свързан с жените в изкуството, първа акция УТРОБАТА – инсталация с Рая</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
export default Activities_Homepage