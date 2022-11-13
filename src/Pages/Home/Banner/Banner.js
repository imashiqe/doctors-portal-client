import React from 'react';
import background  from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import './Banner.css';
const Banner = () => {
    return (
        <div className="hero  " style={{ backgroundImage: `url(${background})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       <PrimaryButton>GET STARTED</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;