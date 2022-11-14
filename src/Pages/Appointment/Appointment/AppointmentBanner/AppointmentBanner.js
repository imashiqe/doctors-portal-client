import React, { useState } from 'react';
import background  from '../../../../assets/images/bg.png';
import chair from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <header className='my-6'>
                 <div className="hero  " style={{ backgroundImage: `url(${background})` }}>
                 <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" />
                 <div className='mr-6'>
                        <DayPicker
                          mode='single'
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                        />

                        <p>You Have  Selected Date: {format(selectedDate, 'PP')}</p>
                 </div>
                 </div>
                 </div>
        </header>
    );
};

export default AppointmentBanner;