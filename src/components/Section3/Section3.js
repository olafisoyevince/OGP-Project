import React from 'react';
import './Card.css';

const Section3 = () => {
  // const cardInfo = [
  //     {Image:'', title:'',text:''},
  //     {Image:'', title:'',text:''},
  //     {Image:'', title:'',text:''},
  //     {Image:'', title:'',text:''},
  //     {Image:'', title:'',text:''},
  // ];
  // const renderCard = (card, index) => {
  //     <Card style = {{width:'18rem' }}></Card>

  return (
    <div>
      <section>
        <div className='card-container'>
          <div className='card'>
            <div style={{ paddingTop: '12rem' }}>
              <img
                src='../images/bank-icon.svg'
                alt='Avatar'
                style={{ width: '50px' }}
              />
            </div>
            <div
              className='text'
              style={{ backgroundColor: 'blue', marginTop: '0rem' }}
            >
              <h2>
                Report of Accountant<b></b> General
              </h2>
              <h4>
                <b></b>
              </h4>
              <p></p>
            </div>
          </div>

          <div className='card'>
            <div style={{ paddingTop: '12rem' }}>
              <img
                src='../images/cal-icon.svg'
                alt='Avatar'
                style={{ width: '50px' }}
              />
            </div>
            <div class='text'>
              <h4>
                <b></b>
              </h4>
              <p>card</p>
            </div>
          </div>

          <div className='card'>
            <div style={{ paddingTop: '12rem' }}>
              <img
                src='../images/document-icon.svg'
                alt='Avatar'
                style={{ width: '50px' }}
              />
            </div>
            <div class='text'>
              <h4>
                <b></b>
              </h4>
              <p>card</p>
            </div>
          </div>

          <div className='card'>
            <div style={{ paddingTop: '12rem' }}>
              <img
                src='../images/download-icon.svg'
                alt='Avatar'
                style={{ width: '50px' }}
              />
            </div>
            <div class='text'>
              <h4>
                <b></b>
              </h4>
              <p>card</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;

/*
Step1
-create 5 image tags
-use d pic as a background image 


*/
