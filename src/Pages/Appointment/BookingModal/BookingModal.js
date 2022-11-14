import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({treatment, selectedDate}) => {
    const {name, slots} = treatment; // treatment is  appointment options  just difference
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div className="modal-action">
      <label htmlFor="booking-modal" className="btn">X</label>
    </div>
    <h3 className="font-bold text-lg">{name}</h3>
    <form className='grid grid-cols-1 gap-3 mt-10'>
    <input type="text" disabled value={format(selectedDate, 'PP')} className="input w-full  input-bordered" />
    <select className="select select-bordered w-full ">
     {
        slots.map(slot =>  <option value={slot}>{slot}</option>)
     }
    </select>
    <input type="text" placeholder="Type here" className="input w-full  input-bordered" />
    <input type="text" placeholder="Type here" className="input w-full  input-bordered" />
    <input type="text" placeholder="Type here" className="input w-full  input-bordered" />
    <input type="submit" value="submit"  className="input w-full  btn btn-accent" />
    </form>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    
  </div>
</div>
        </>
    );
};

export default BookingModal;