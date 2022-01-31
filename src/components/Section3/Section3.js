import React from "react";
import './Card.css';
import Wed from '../assets/images/[GetPaidStock 2.svg';


const Section3 = () => {
    return (
    <>
     <div  style={{width:'100vw',display:'flex'}}>
     <div className='daddy' style={{width:'100%', height:'100vh'}}>
        <section>
            <div className="card-container"  >
                <div className="card" style={{backgroundColor:'rgba(0, 59, 73, 0.75) ',}}>
            <div style={ { paddingTop:'12rem' }}> 
                   <img src="../images/bank-icon.svg" alt="Avatar" style={{width:"50px",}}/>
                   </div>
                    <div className="text" style={{ marginTop:'0rem'}}>
                    <h2>Report of Accountant<br></br> General</h2>
                        <h4>lorem<b></b>ipsum</h4>
                        <p></p>
                    </div> 
                    
                </div>

                <div className="card" style={{backgroundColor:'rgba(255, 125, 69, 0.75)' }} >
                    <div style={ { paddingTop:'12rem' }}> 
                    <img src="../images/cal-icon.svg" alt="Avatar" style={{width:"50px" }}/>
                    </div>
                    <div class="text">
                    <h2>Quarterly <br></br>Report</h2>
                        <h4><b></b></h4>
                        <p>card</p>
                    </div> 
                </div>

                <div className="card" style={{backgroundColor:'rgba(255, 255, 255, 0.60)'}}>
                <div style={ { paddingTop:'12rem' }}> 
                    <img src="../images/document-icon.svg" alt="Avatar" style={{width:"50px"}}/>
                </div>
                    <div class="text">
                    <h2>Audit <br></br>Report</h2>
                        <h4><b></b></h4>
                        <p>card</p>
                    </div> 
                </div>
                  
                <div className="card">
                <div style={ { paddingTop:'12rem' }}> 
                    <img src="../images/download-icon.svg" alt="Avatar" style={{width:"50px"}}/>
                </div>
                    <div class="text">
                    <h2>All <br></br>Downloads</h2>
                        <h4><b></b></h4>
                        <p>card</p>
                    </div> 
                </div>
            </div>
      </section>
      <section >
        <div className='new-container' style={{backgroundColor:'', width:'100%'}}>
            <div className="new-card" style={ { paddingTop:'18rem', backgroundColor:'#003B49 ' }}></div>
            <img src={Wed} alt="Avatar" />
        </div>
     


      </section>

      </div>
    
    
    </div > 
    </>
    )
};



export default Section3;
