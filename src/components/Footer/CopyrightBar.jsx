import React from 'react';
import './copyrightBar.css';

const CopyrightBar = () => {
  return (
    <div id='copyright'>
      <div>
        <p>
          Copyright © {new Date().getFullYear()} Designed and Developed by nHub
          Nigeria. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default CopyrightBar;
