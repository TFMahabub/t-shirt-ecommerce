import React from 'react';
import SingleCard from './SingleCard';

const Card = ({tshirts}) => {
  return (
    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 md:mx-4 lg:mx-6 my-5'>
      {
        tshirts.map(tshirt => 
        <SingleCard
          key={tshirt._id}
          tshirt = {tshirt}
        ></SingleCard>)
      }
    </div>
  );
};

export default Card;