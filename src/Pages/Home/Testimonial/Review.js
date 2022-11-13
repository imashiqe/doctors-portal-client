import React from 'react';

const Review = ({revse}) => {
    const {name, review, location, img } = revse;
    return (
        <div>
            <div className="card shadow-xl">
  <div className="card-body">
  
    <p>{review}</p>
    <div className=" flex items-center ">
    <div className="avatar mr-6 pt-3">
  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt='' />
  </div>
  </div>
  <div>
     <h5 className='text-lg'>{name}</h5>
     <p>{location}</p>
  </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default Review;