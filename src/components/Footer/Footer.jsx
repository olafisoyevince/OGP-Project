import React from 'react';
import './footer.css';
import logo from '../../assets/images/ogp-logo.png';
import CopyrightBar from './CopyrightBar';

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <span>
            <img src={logo} alt='ogp-logo' style={{ width: '150px' }} />
          </span>
          <div>
            <p>
              Plateau joined OGP as part of the 2020 cohort. They are currently
              implementing five commitments from their 2021-2023 action plan.
            </p>
            <p>
              This action plan features commitments related to open contracting,
              public participation, gender, and extractive industries.
            </p>
          </div>
        </div>
        <div>
          <h4>Our Action Plans</h4>
          <p>Fiscal Transparency</p>
          <p>Citizen Engagement</p>
          <p>Extractive Tranparency</p>
          <p>Gender Commitment</p>
          <p>Peace and Security</p>
        </div>
        <div>
          <h4>Reports</h4>
          <p>Report of Accountant General</p>
          <p>Quarterly Report</p>
          <p>Audit Reports</p>
          <p>Approved Reports</p>
          <p>All Reports</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>Plateau State Government</p>
          <p>Open Government Partnership</p>
          <p>Government Projects</p>
          <p>Open Contracting</p>
          <p>All Downloads</p>
        </div>
      </footer>
      <CopyrightBar />
    </>
  );
};

export default Footer;
