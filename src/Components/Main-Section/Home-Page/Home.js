import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card-Section/Card';
import OrderSummery from './Order-Summery-Section/OrderSummery';

const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div className='md:grid grid-cols-[70%_30%]'>
      <div className='bg-[#fcfcfc]'>
        <Card
         tshirts ={tshirts}
        ></Card>
      </div>
      <div className='bg-red-300 h-[100vh] sticky top-0'>
        <OrderSummery></OrderSummery>
      </div>
    </div>
  );
};

export default Home;