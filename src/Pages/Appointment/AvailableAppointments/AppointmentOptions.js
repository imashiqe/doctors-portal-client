import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOptions = ({option}) => {
    const {name,slots} = option;
    return (
        <div className="card  shadow-xl">
        <div className="card-body ">
          <h2 className="card-title text-2xl text-secondary font-bold">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
          <p> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
          <div className="card-actions justify-end">
           <PrimaryButton>Book Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default AppointmentOptions;