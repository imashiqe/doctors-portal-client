import React from 'react';
import background  from '../../../../assets/images/bg.png';
import chair from '../../../../assets/images/chair.png';

const AppointmentBanner = () => {
    return (
        <header>
   
          
            <div className="hero  " style={{ backgroundImage: `url(${background})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" />
    <div>
     
    
  </div>
</div>
        </div>
        
        </header>
    );
};

export default AppointmentBanner;