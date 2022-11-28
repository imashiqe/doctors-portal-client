import React, {  useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP')
    const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
         queryKey: ['appointmentOptions', date],

         queryFn: async () =>   {
          const res = await  fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
          const data =  await  res.json() ;
          return data
         }
        
    });

    if(isLoading){
        return <Loading></Loading>
    }


    // useEffect( ()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // },[])
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
                refetch = {refetch}
               ></BookingModal>
            }
          
        </section>
    );
};

export default AvailableAppointments;