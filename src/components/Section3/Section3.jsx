import React from "react";
import './Section3.css';
import Wed from '../../assets/images/section3bg.svg';
import BankIcon from '../../assets/images/bank-icon.svg';
import CalIcon from '../../assets/images/cal-icon.svg';
import DocumentIcon from '../../assets/images/document-icon.svg'
import DownloadIcon from '../../assets/images/download-icon.svg'


const Section3 = () => {
    return (
    <>
        <section>

            <div>
                <div className="card-container" >
                    <div className="card" style={{ backgroundColor: 'rgba(0, 59, 73, 0.75)' }}>
                        <div className="card-content">
                            <div> 
                                <img src={ BankIcon } alt="Avatar" style={{ width:"80px" }} className='card-icon'/>
                            </div>
                            
                            <div className="card-content-text">
                                <h2>Report of Accountant<br></br> General</h2>
                                <p>Comprehensive report of the <br/> Accountant General</p>
                            </div>
                           
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: 'rgba(255, 125, 69, 0.75)' }} >
                        <div className="card-content">
                            <div> 
                                <img src={ CalIcon } alt="Avatar" style={{ width:"80px" }} className='card-icon'/>
                            </div>
                            
                            <div className="card-content-text">
                                <h2>Quarterly<br/>Report</h2>
                                <p>Download the Comprehensive Quarterly <br/> Report</p>
                            </div>
                             
                        </div>
                    </div>

                    <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.60)'}}>
                        <div className="card-content">
                            <div> 
                                <img src={ DocumentIcon } alt="Avatar" style={{width:"80px"}} className='card-icon'/>
                            </div>
                           
                            <div className="card-content-text" style={{ color: 'black' }}>
                                <h2>Audit<br/>Report</h2>
                                <p>Download the Comprehensive Auditory <br/> Report</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <div> 
                                <img src={  DownloadIcon } alt="Avatar" style={{ width:"80px" }} className='card-icon'/>
                            </div>

                            <div className="card-content-text">
                                <h2>All<br/>Downloads</h2>
                                <p>Find Approved Yearly Budgets</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        
            <section >
                <div className='new-container'>
                    <div className='new-container-board'>
                        <div className="text-board">
                            <div className="new-card">
                                <h1>Open <br/> <span>Contracting</span></h1>
                                <p>We’re working to make public contracting fair and effective, so it <br/> provides everyone, everywhere with the public goods, works and <br/> services that they need.</p>
                            </div>

                            <div className="weird-rectangle">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non volutpat, posuere <br/> eleifend et. Egestas netus faucibus elit, dignissim vulputate. Lacus, purus <br/> neque ac phasellus amet enim nisl. Pharetra a nulla id dolor varius. Quis <br/> integer habitant risus facilisi viverra eu praesent pellentesque venenatis. <br/> Nunc, neque nisl sapien metus, pretium cras imperdiet nunc ut. Feugiat porta <br/> tellus dolor tempor tellus tempor, volutpat imperdiet. Molestie.</p>
                            </div>
                        </div>
                        
                        <img src={ Wed } alt="Avatar"className='section3img' />

                        
                    </div>
                </div>
            </section>

        
        
        
        </section> 
    </>
    );
};



export default Section3;
