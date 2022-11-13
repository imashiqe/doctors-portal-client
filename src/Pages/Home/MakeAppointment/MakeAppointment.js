import React from 'react';
import doctor from  '../../../assets/images/doctor-small.png'
import appointment from  '../../../assets/images/appointment.png'
import './MakeAppointment.css';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className='mt-64  rounded-lg' 
          style={
             {
                background: `url(${appointment})`
             }
          }
        >
            <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row ">
    <img src={doctor} alt=""  className="-mt-64 appimg  " />
    <div>
      <h4 className='text-primary font-bold'>Appointment</h4>
      <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
      <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>Appointment</PrimaryButton>
    </div>
  </div>
</div>
        </section>
    );
};

export default MakeAppointment;