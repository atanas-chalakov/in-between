import React, { Component } from 'react'

import ft from '../assets/images/footer.svg'
import bl from '../assets/images/bottom-left.svg'
import br from '../assets/images/bottom-right.svg'
import tl from '../assets/images/top-left.svg'
import tr from '../assets/images/top-right.svg'
import Valkov from '../assets/images/Valkov.jpg'
import Kalina from '../assets/images/Kalina.jpg'
import Mira from '../assets/images/Mira.jpg'

export class Team_Homepage extends Component {
  render() {
    return (
      <section id="team" className="bg-white pt-20 pb-20">
        {/* <img src={ft} alt="" />
        <img src={tl} alt="" />
        <img src={tr} alt="" />
        <img src={bl} alt="" />
        <img src={br} alt="" /> */}
        <div className="container mx-auto">
          <h2 className='text-center mb-5 md:mb-10 text-2xl md:text-4xl font-light'>Eкип</h2>
          <div className="text-center mb-16 mr-auto ml-auto w-full md:w-2/3 text-md md:text-2xl font-light">В общата история на екипа стоят редица изложби, артистични прояви и намеси в градска среда, международни форуми за изкуство и  програми за творчески обмен.</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
            <div className="team-card">
              <div className="img w-32 h-32 rounded-full overflow-hidden">
                <img src={Mira} alt="Мира Мохсен" className='block w-full'/>
              </div>
              <div className="info w-auto">
                <h3 className="name mb-1 text-md md:text-xl font-semibold">Мира Мохсен</h3>
                <div className="text-base md:text-md mb-1 font-semibold">Основател, организатор проекти</div>
                <div className="text-base md:text-md font-light">Мира е артист с обширна практика в аудио-визуалното изкуство и медиум. Организатор на редица значими проекти в областта на съвременното  изкуство. Изследовател на нови изразни средства и медии на работа, голяма част от тях с екологична ориентация.</div>
              </div>
            </div>
            <div className="team-card">
              <div className="img w-32 h-32 rounded-full overflow-hidden">
                <img src={Kalina} alt="Калина Пейчева" className='block w-full'/>
              </div>
              <div className="info w-auto">
                <h3 className="name mb-1 text-md md:text-xl font-semibold">Калина Пейчева</h3>
                <div className="text-base md:text-md mb-1 font-semibold">Консултант, редактор</div>
                <div className="text-base md:text-md font-light">Калина е изкуствовед с преобладаващ интерес към теория и философия на изкуството, както и към алтернативни методи на съвременни практики на арт-ориентираната терапия. Тя изследва в ролята си на „медиатор“ различните възможности за представяне на изкуство.</div>
              </div>
            </div>
            <div className="team-card">
              <div className="img w-32 h-32 rounded-full overflow-hidden">
                <img src={Valkov} alt="Димитър Вълков" className='block w-full'/>
              </div>
              <div className="info w-auto">
                <h3 className="name mb-1 text-md md:text-xl font-semibold">Димитър Вълков</h3>
                <div className="text-base md:text-md mb-1 font-semibold">Медиен експерт, сътрудник</div>
                <div className="text-base md:text-md font-light">Димитър има научнни публикации в областта на медийната и социална педагогика, развиване на медийни компетенции, знания и умения в сфера на медиите. Участва  в множество филмови, фотографски, театрални и кросмедиални проекти в България и Германия.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Team_Homepage