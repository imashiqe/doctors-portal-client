import React from 'react';
import Banner from '../Banner/Banner';
import Dental from '../Dental/Dental';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
             <Banner></Banner>
             <InfoCards></InfoCards>
             <Services></Services>
             <Dental></Dental>
        </div>
    );
};

export default Home;