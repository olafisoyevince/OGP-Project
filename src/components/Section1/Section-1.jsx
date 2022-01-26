import React from 'react';
import OGPLogo2 from '../../assets/images/ogp-logo-2.png';
import PlateauLogo from '../../assets/images/plateau-logo.png';
import './Section-1.css';



const Section1 = () => {
  return (
    <>
      <section>
        <div className='container-mask'>
          <div className='one-card'>
            <div className='one-img'>
              <img src={OGPLogo2} alt="open governance partnership" style={{ width: '50px' }}/>
            </div>
            <div className='one-text'>
              <h4>Open Government Partnership</h4>
              <p>The Open Government Partnership is a multilateral initiative that promote open government to strengthen governance</p>
              <button>READ MORE</button>
            </div>
          </div>

          <div className='one-card' style={{backgroundColor: '#003B49', color: '#fff'}}>
            <div className='one-img'>
              <img src={PlateauLogo} alt="plateau state" style={{ width: '50px' }} />
            </div>
            <div className='one-text'>
              <h4>Plateau State Government</h4>
              <p>Plateau State is the twelfth largest state of Nigeria, and is roughly located in the center of the country</p>
              <button className='one-btn'>READ MORE</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
