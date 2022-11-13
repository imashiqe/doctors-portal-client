import React from 'react';
import Banner from '../Banner/Banner';
import Conected from '../Conected/Conected';
import Dental from '../Dental/Dental';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
             <Banner></Banner>
             <InfoCards></InfoCards>
             <Services></Services>
             <Dental></Dental>
             <MakeAppointment></MakeAppointment>
             <Testimonial></Testimonial>
             <Conected></Conected>
        </div>
    );
};

export default Home;