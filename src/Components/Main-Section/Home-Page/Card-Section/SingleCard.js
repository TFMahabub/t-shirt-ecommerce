import React from 'react';

const SingleCard = ({tshirt}) => {
  const {_id:id, picture:img} = tshirt;
  return (
    <div className=''>
      <img src={img} alt="" />
    </div>
  );
};

export default SingleCard;