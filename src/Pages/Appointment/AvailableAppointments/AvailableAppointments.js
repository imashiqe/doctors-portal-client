import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect( ()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='mt-16 font-20'>
            <h3 className='text-secondary font-bold text-center text-3xl pb-6'>Available Appointments on {format(selectedDate, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                     
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    >

                    </AppointmentOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
               ></BookingModal>
            }
          
        </section>
    );
};

export default AvailableAppointments;