import React from 'react';
import OgpLogo2 from '../../assets/images/ogp-logo-2.png';
import PlateauLogo from '../../assets/images/plateau-logo.png';
import Man1 from '../../assets/images/man protesting one.png';
import Man2 from '../../assets/images/man protesting two.png';
import Rectangle from '../../assets/images/irregular rectangle.png';
import '../Section1/SectionOne.css';

const Section1 = () => {
  return (
    <>
      <section>
        <div className='container-mask'>
          <div className='one-card'>
            <div className='one-img'>
              <img
                src={OgpLogo2}
                alt='open governance partnership'
                style={{ width: '50px' }}
              />
            </div>
            <div className='one-text'>
              <h4>Open Government Partnership</h4>
              <p>
                The Open Government Partnership is a multilateral initiative
                that promote open government to strengthen governance
              </p>
              <button className='one-btn'>READ MORE</button>
            </div>
          </div>

          <div
            className='one-card'
            style={{ backgroundColor: '#003B49', color: '#fff' }}
          >
            <div className='one-img'>
              <img
                src={PlateauLogo}
                alt='plateau state'
                style={{ width: '50px' }}
              />
            </div>
            <div className='one-text'>
              <h4>Plateau State Government</h4>
              <p>
                Plateau State is the twelfth largest state of Nigeria, and is
                roughly located in the center of the country
              </p>
              <button className='one-btn-2'>READ MORE</button>
            </div>
          </div>
        </div>

        <div className='container-mask-2'>
          <div className='two-card'>
            <h3>
              Government + Click&Tell = <span>Citizen Engagement</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              odio elementum at vel interdum aliquam urna id id. Scelerisque
              pretium, lectus feugiat vulputate id fermentum adipiscing vitae.
              Cras molestie nulla sollicitudin in. Urna volutpat, duis blandit
              mauris aliquam ultrices lacus, tincidunt. Massa turpis scelerisque
              ultrices et nunc, ut. Nullam est metus sapien cursus lacus
              vestibulum et. Tellus ullamcorper quam
            </p>
            <button>Login/Register</button>
          </div>

          <div className='second-half'>
            <img src={Man1} alt='' className='man1' />
            <img src={Man2} alt='' className='man2' />
            <img src={Rectangle} alt='' className='rectangle' />
            <div className='registered'>
              <p>15,350</p>
              <p>Registered Citizens</p>
              <button className='one-btn'>READ MORE</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
