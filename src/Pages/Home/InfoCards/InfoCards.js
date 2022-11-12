import React from 'react';
import marker from '../../../assets/icons/marker.svg';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const InfoCards = () => {
     
    const cardData = [
         {
             id: 1,
             name: 'Opening Hours',
             description: 'Open 9.00 am to 5.00 Am Everyday',
             icon: clock,
             bgClass: 'bg-primary'
         },
         {
             id: 2,
             name: 'Our Locations',
             description: 'Brooklyn, NY 10036, United States',
             icon: marker,
             bgClass: 'bg-accent'
         },
         {
             id: 3,
             name: 'Contact Us Now ',
             description: '+000 123 456789',
             icon: phone,
             bgClass: 'bg-gradient-to-r from-primary to-secondary'
         },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {
                cardData.map( card => <InfoCard
                  key={card.id}
                  card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;