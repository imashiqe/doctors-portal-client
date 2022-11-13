import React from 'react';
import dental from '../../../assets/images/treatment.png'
const Dental = () => {
    return (
        <div className="card lg:card-side  shadow-xl py-20  ">
        <figure><img src={dental} className="lg:w-3/1 rounded-lg " alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Exceptional Dental Care, on Your Terms</h2>
          <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <div className="card-actions ">
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">GET STARTED</button>
          </div>
        </div>
      </div>
    );
};

export default Dental;