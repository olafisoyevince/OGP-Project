import React from 'react';
import CardImage from '../../assets/images/jake-blucker.png'

const Section4 = () => {
  return(
    <>
        <section>
            <div>
                <div className="container_shell">    
                    <h1 className="section_head">Our Lastest Project</h1> 
                    <div className="section_card">
                        <img src={CardImage} alt="image4" className="section_img"/>
                        <div className="section_title">
                        <h1>Construction of Zaramangada Road</h1>
                        <p className="section_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum odio elementum at vel interdum.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>   
    </>
  );
};

export default Section4;
