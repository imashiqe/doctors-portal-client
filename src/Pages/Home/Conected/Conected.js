import React from 'react';
import bgs from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Conected = () => {
    return (
        <section style={
             {
                background: `url(${bgs})`
             }
        }>

            <div className='text-center pt-16'>
               <h5 className='text-xl text-primary font-bold'>Contact Us</h5>
               <h2 className='text-white text-4xl'>Stay connected with us</h2>

               <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
      <div className="card-body">
        <div className="form-control">
         
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
       
          <input type="text" placeholder="Subject" className="input input-bordered" />
         
        </div>
        <div className="form-control">
       
          <textarea placeholder='Your Message' className="input input-bordered"></textarea>
         
        </div>
        <div className="form-control mt-6">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>   
        </section>
    );
};

export default Conected;