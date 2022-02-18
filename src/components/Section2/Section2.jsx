import React from 'react';
import '../Section2/Section2.css';
import { cardDatas } from './Data';

const Section2 = () => {
  return (
    <>
      <section className='section2-content'>
        <div className='section2-top'>
          <div className='section2-text'>
            <h1>Current <span>Action Plan</span></h1>
            <p>Plateau joined OGP as part of the 2020 cohort. They are currently implementing five commitments from their 2021-2023 action plan. This action plan features commitments related to open contracting, public participation, gender, and extractive industries.</p>
          </div>
          <div className='section2-button'>
            <button>Login/Register</button>
          </div>
        </div>

        <div className='section2-cards'>
          {
            cardDatas.map(cardData => {
              return (
                <div className='section2-card-content' key={ cardData.id } style={{ backgroundColor: `${ cardData.bg }`, color: `${ cardData.color }`, borderBottom: `5px solid ${ cardData.border }` }}>
                  <div className='section2-card-img'>
                    <img src={ cardData.image } alt="" />
                  </div>
                  <h3 className='section2-card-title'>{ cardData.title }</h3>
                  <p className='section2-card-text'>{ cardData.text }</p>
                  <div className='section2-list'>
                    <ul>
                      <li>aliquam urna pretium</li>
                      <li>eugiat vulputate id </li>
                      <li>adipiscing vitae.</li>
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  );
}

export default Section2