import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-slate-300 py-4 px-2'>
      <Link to={'/'} className ='text-xl font-semibold text-red-500 mx-3 hover:text-red-700 rounded-lg'>Home</Link>
      <Link to={'/orders'} className ='text-xl font-semibold text-red-500 mx-3 hover:text-red-700 rounded-lg'>Orders</Link>
    </div>
  );
};

export default Header;