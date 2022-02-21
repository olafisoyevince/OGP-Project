import React from 'react';
import './footer.css';
import logo from '../../assets/images/ogp-logo.png';
// import CopyrightBar from './CopyrightBar';

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <span>
            <img src={logo} alt='ogp-logo' style={{ width: '150px' }} />
          </span>
          <div>
            <p className='para'>
              Plateau joined OGP as part of the 2020 cohort. They are currently
              implementing five commitments from their 2021-2023 action plan.
            </p>
            <p className='para'>
              This action plan features commitments related to open contracting,
              public participation, gender, and extractive industries.
            </p>
          </div>
        </div>

        <div>
          <h4>Our Action Plans</h4>
          <p className='para'>Fiscal Transparency</p>
          <p className='para'>Citizen Engagement</p>
          <p className='para'>Extractive Tranparency</p>
          <p className='para'>Gender Commitment</p>
          <p className='para'>Peace and Security</p>
        </div>

        <div>
          <h4>Reports</h4>
          <p className='para'>Report of Accountant General</p>
          <p className='para'>Quarterly Report</p>
          <p className='para'>Audit Reports</p>
          <p className='para'>Approved Reports</p>
          <p className='para'>All Reports</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p className='para'>Plateau State Government</p>
          <p className='para'>Open Government Partnership</p>
          <p className='para'>Government Projects</p>
          <p className='para'>Open Contracting</p>
          <p className='para'>All Downloads</p>
        </div>

      </footer>

      <div id='copyright'>
        <div>
          <p className='para'>
            Copyright © {new Date().getFullYear()} Designed and Developed by nHub
            Nigeria. All Rights Reserved.
          </p>
        </div>
      </div>
      {/* <CopyrightBar /> */}
    </>
  );
};

export default Footer;
