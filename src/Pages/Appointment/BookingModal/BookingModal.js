import React from 'react';

const BookingModal = ({treatment}) => {
    const {name} = treatment;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="booking-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </>
    );
};

export default BookingModal;