import React from 'react';
import { format } from 'date-fns';
const AvailableAppointments = ({selectedDate}) => {
    return (
        <section className='mt-16 font-20'>
            <h3 className='text-secondary font-bold text-center'>Available Appointments on {format(selectedDate, 'PP')}</h3>
        </section>
    );
};

export default AvailableAppointments;