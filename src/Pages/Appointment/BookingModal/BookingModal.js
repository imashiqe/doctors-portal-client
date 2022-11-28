import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';
const BookingModal = ({treatment,setTreatment, selectedDate,refetch}) => {
    // treatment is  just another of appointment options  with name, slots, _id
    const {name:treatmentName, slots} = treatment; 
    
    const date =  format(selectedDate, 'PP')

   const {user} = useContext(AuthContext);
       
   const handleBooking = event => {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const email = form.email.value;
     const slot = form.slot.value;
     const phone = form.phone.value;
     const booking = {
        appointmentDate: date,
        treatment: treatmentName,
        patient: name ,
        slot,
        email,
        phone,
     }

     //TODO: send data  to  the  server  
     // and once  data is saved then  close the modal and display  success toast
    

     fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(booking)
     })
     .then(res => res.json())
     .then(data => {
       console.log(data);

      if(data.acknowledged){
          
       setTreatment(null);
       toast.success('Booking Confirmed')
       refetch();
      }


     })

   
   }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div className="modal-action">
      <label htmlFor="booking-modal" className="btn">X</label>
    </div>
    <h3 className="font-bold text-lg">{treatmentName}</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
    <input type="text" disabled value={date} className="input w-full  input-bordered" />
    <select name='slot' className="select select-bordered w-full ">
     {
        slots.map((slot, i) =>  <option
             value={slot}
             key={i}
             >{slot}</option>)
     }
    </select>
    <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input w-full  input-bordered" />
    <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full  input-bordered" />
    <input name='phone' type="text" placeholder="Phone Number" className="input w-full  input-bordered" />
    <input type="submit" value="submit"  className="input w-full  btn btn-accent" />
    </form>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    
  </div>
</div>
        </>
    );
};

export default BookingModal;