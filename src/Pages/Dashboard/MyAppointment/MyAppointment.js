import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyAppointment = () => {
    const {user} = useContext(AuthContext);
    
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
     
    const {data: bookings = []} = useQuery({
         queryKey: ['bookings', user?.email],
         queryFn: async () => {
             const res = await fetch(url);
             const  data  =  await res.json();
             return data;
         }
    })

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Appointments</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
 
      {
        bookings.map((booking, i) => 
            
            <tr>
            <th>{i+1}</th>
            <td>{booking.patient}</td>
            <td>{booking.treatment}</td>
            <td>{booking.appointmentDate}</td>
            <td>{booking.slot}</td>
            <td>{booking.phone}</td>

          </tr>
            )
      }

     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;