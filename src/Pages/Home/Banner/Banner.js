import React from 'react';
import background  from '../../../assets/images/bg.png';
const Banner = () => {
    return (
        <div className="hero  " style={{ backgroundImage: `url(${background})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;