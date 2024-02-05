import React, { useState } from 'react';
import './index.css';
import { HiMenuAlt4 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { MenuOverlay } from './MenuOverlay';
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import apple from './apple.jpeg';

export const Header = () => {
    const [toggle, setToggle] = useState(false);
    const menuList = [
        { id: 0, type: 'image', image: apple }, 
        { id: 0, title: 'Store' }, 
        { id: 1, title: 'Mac' },
        { id: 2, title: 'iPhone' },
        { id: 3, title: 'iPad' },
        { id: 4, title: 'Watch' },
        { id: 5, title: 'Airpods' },
        { id: 6, title: 'Tv&Home' },
        { id: 7, title: 'Entertainment' },
        { id: 8, title: 'Accessories' },
        { id: 9, title: 'Support' },
        { id: 10, title: <IoIosSearch className='text-white text-[15px]' /> }, 
    { id: 11, title: <BsBag className='text-white text-[15px]' /> } 
    ];

    return (
        <div className="header-container">
            <div className='flex items-center py-2 px-2'>
                <div className='hidden md:flex gap-10 mx-auto'>
                    {menuList.map((item) => (
                        <div key={item.id} className="flex items-center">
                            <h2 className='text-white text-[10px] cursor-pointer'>{item.title}</h2>
                            
                        </div>
                    ))}
                </div>
                <div className='md:hidden flex '>
                <img src={apple} alt="" className="w-5 h-5 rounded-full mr-2 gap-10px" />
                    
                    {!toggle ? <HiMenuAlt4 onClick={() => setToggle(!toggle)} className='text-white text-[22px] cursor-pointer' /> :
                        <HiX onClick={() => setToggle(!toggle)} className='text-white text-[22px] cursor-pointer' />}
                    {toggle ? <MenuOverlay menuList={menuList} /> : null}
                    <div className="mr-4 ">
                        <IoIosSearch className='text-white' />
                    </div>
                    <div>
                        <BsBag className='text-white' />
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Header;

