import React, { Component } from 'react'

import ft from '../assets/images/footer.svg'
import bl from '../assets/images/bottom-left.svg'
import br from '../assets/images/bottom-right.svg'
import tl from '../assets/images/top-left.svg'
import tr from '../assets/images/top-right.svg'

export class Team_Homepage extends Component {
  render() {
    return (
      <section className="bg-white pt-20 pb-20">
        {/* <img src={ft} alt="" />
        <img src={tl} alt="" />
        <img src={tr} alt="" />
        <img src={bl} alt="" />
        <img src={br} alt="" /> */}
        <div className="container mx-auto">
          <h2 className='text-center mb-10 text-4xl font-light'>Eкип</h2>
          <div className="text-center mb-16 mr-auto ml-auto w-2/3 text-2xl font-light">Екипът в топ. Има трайни изгради връзки с различни специалисти в областти, свързани с дейността на фондацията.</div>
          <div className="grid grid-cols-2 gap-10 ">
            <div className="team-card">
              <div className="img w-32 rounded-full overflow-hidden">
                <img src="https://dummyimage.com/128x128/666/fff" alt="" />
              </div>
              <div className="info">
                <h3 className="name mb-4 text-xl font-bold">Mira Mohsen</h3>
                <div className="text-lg font-light">Tuka trqbva da pishete neshto za sebe si</div>
              </div>
            </div>
            <div className="team-card">
              <div className="img w-32 rounded-full overflow-hidden">
                <img src="https://dummyimage.com/128x128/666/fff" alt="" />
              </div>
              <div className="info">
                <h3 className="name mb-4 text-xl font-bold">Kalina</h3>
                <div className="text-lg font-light">Tuka trqbva da pishete neshto za sebe si</div>
              </div>
            </div>
            <div className="team-card">
              <div className="img w-32 rounded-full overflow-hidden">
                <img src="https://dummyimage.com/128x128/666/fff" alt="" />
              </div>
              <div className="info">
                <h3 className="name mb-4 text-xl font-bold">Mitko</h3>
                <div className="text-lg font-light">Tuka trqbva da pishete neshto za sebe si</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Team_Homepage