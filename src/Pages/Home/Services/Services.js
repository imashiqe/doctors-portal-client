import React from 'react';
import  fluoride from '../../../assets/images/fluoride.png';
import  cavity from '../../../assets/images/cavity.png';
import  whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const serviceData = [
         {
             id: 1,
             name: 'Fluoride Treatment',
             description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
             image: fluoride,
         },
         {
             id: 2,
             name: 'Cavity Filling',
             description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
             image: cavity,
         },
         {
             id: 3,
             name: 'Teeth Whitening',
             description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
             image: whitening,
         },
    ]
   
    return (
        <div className='text-center '>
           <h4 className='text-primary font-bold text-2xl'>OUR SERVICES</h4>
           <h2 className='text-4xl pb-4 font-bold pt-4'>Services We Provide</h2>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-12'>
                  {
                    serviceData.map(serv =>  <Service
                    key={serv.id}
                    serv={serv}

                    > </Service>  )
                  }
           </div>
        </div>
    );
};

export default Services;