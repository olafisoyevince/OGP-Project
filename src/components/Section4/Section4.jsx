import React from 'react';
import CardImage from '../../assets/images/jake-blucker.png'

const Section4 = () => {
  return(
    <>
        <section>
            <div>
                <div className="container_shell">    
                    <h1 className="section_head">Our Lastest <span> Projects</span></h1> 
                    <div className="section_card">
                        <div className="section_card1">
                            <img src={CardImage} alt="image4" className="section_img"/>
                            <div className="local_govt">
                                <p className='local_govt_text'> JOS SOUTH</p>
                            </div>
                            <div className="section_title">
                                <h1>Construction of Zaramangada Road</h1>
                                <p className="section_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum odio elementum at vel interdum.</p>
                            </div>   
                        </div>
                        
                        <div className="section_card1">
                            <img src={CardImage} alt="image4" className="section_img"/>
                            <div className="local_govt">
                                <p className='local_govt_text'> JOS NORTH</p>
                            </div>
                            <div className="section_title">
                                <h1>Renovation of Plateau State Specialist Hospital</h1>
                                <p className="section_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum odio elementum at vel interdum.</p>
                            </div>   
                        </div>
                        
                        <div className="section_card1">
                            <img src={CardImage} alt="image4" className="section_img"/>
                            <div className="local_govt">
                                <p className='local_govt_text'> JOS SOUTH</p>
                            </div>
                            <div className="section_title">
                                <h1>Construction of Jos Main Airport</h1>
                                <p className="section_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum odio elementum at vel interdum.</p>
                            </div>   
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>   
    </>
  );
};

export default Section4;
