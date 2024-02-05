import React from 'react';

export const MenuOverlay = ({ menuList }) => {
  return (
    <div>
      {menuList.map((item) => (
        <h1 key={item.id} className='text-white text-[24px] mb-6 justify-center mt-10'>{item.title}</h1>
      ))}
    </div>
  );
};

