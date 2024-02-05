import React from 'react';
import iphone1 from './iphone1.png';
import iphonepro from './iphonepro.jpeg';
import vis from './vis.mp4';
import watch from './watch.jpeg';
import macbookpro from './macbookpro.png';
import ipad from './ipad.png';
import { IoLogoApple } from "react-icons/io5";
import valday from './valday.png';
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AiOutlineApple } from "react-icons/ai";
import airpods from './airpods.jpeg';
import tradein1 from './tradein1.jpeg';

export const Hero = () => {
  const valdayImage = "url(" + valday + ")";

  return (
    <div>
      <div className='herocontainer'>
        <div className='flex items-center py-2 px-2 sm:text-sm'>
          <h2 className='mx-auto text-white text-[13px] sm:text-sm flex-row'>
            <div className="flex items-center">
              <p className="mr-2 sm:text-sm">Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* 
              Plus No Cost EMI from most leading banks.‡</p>
              <p className="pb-1 hover:underline text-sm text-blue-600">Shop now</p> 
              <LiaGreaterThanSolid />
            </div>
          </h2>
        </div>
      </div>

      {/* iPhone 15 Pro */}
      <div className="relative sm:text-sm">
        <img src={iphone1} alt="iPhone 1" className="w-full" />
        <div className="absolute top-0 left-0 right-0 mt-8 justify-center items-center sm:mt-0">
          <div className="text-white text-[50px] font-bold sm:text-3xl">iPhone 15Pro</div>
          <div className='text-white text-[20px] sm:text-sm'>Titanium SO Strong.So Light.So Pro.</div>
          <div className='flex gap-4 items-center justify-center cursor-pointer'>
            <div className="lg:mr-4 mid:mr-3 sm:mr-3 flex items-center"><p className="pb-1 hover:underline text-sm text-blue-600">Learn more</p><LiaGreaterThanSolid /></div>
            <div className="flex items-center"><p className="pb-1 hover:underline text-sm text-blue-600">Buy</p> <LiaGreaterThanSolid /></div>
          </div>
        </div>
      </div>

      {/* iPhone 15 */}
      <div className="relative sm:text-sm">
        <img src={iphonepro} alt="iPhone 15" className="w-full" />
        <div className="absolute top-0 left-0 right-0 mt-0 justify-center items-center sm:mt-0">
          <div className="text-black text-[50px] font-bold sm:text-3xl">iPhone 15</div>
          <div className='text-black text-[20px] sm:text-sm'>New camera.New design.Newphoria</div>
          <div className='flex gap-4 items-center justify-center cursor-pointer'>
            <div className="lg:mr-4 mid:mr-3 sm:mr-3 flex items-center"><p className="pb-1 hover:underline text-sm text-blue-600">Learn more</p><LiaGreaterThanSolid /></div>
            <div className="flex items-center "><p className="pb-1 hover:underline text-sm text-blue-600">Buy</p> <LiaGreaterThanSolid /></div>
          </div>
        </div>
      </div>

     {/* Apple Watch */}
<div className="relative sm:text-sm">
  <video className="w-full" mute autoPlay loop src={vis} type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center flex-col sm:bottom-10">
    <div className="text-white text-xl sm:text-4xl font-bold flex items-center">
      <AiOutlineApple />
      <span className='lg:text-4xl mid:text-3xl sm:text-3xl font-semibold text-white'>Watch</span>
    </div>
    <div className="lg:text-3xl mid:text-xl sm:text-xl font-semibold text-white">SERIES 9</div>
    <div className="lg:text-2xl mid:text-lg sm:text-lg font-semibold text-white">
      <span>Double tap.</span>
      <span >A magical new way to use Apple watch</span>
    </div>
    <div className="flex gap-4 items-center justify-center cursor-pointer">
      <button className="bg-white text-black px-4 py-2 rounded-3xl text-sm sm:text-base">Learn More</button>
      <button className="bg-white text-black px-4 py-2 rounded-3xl text-sm sm:text-base">Buy</button>
    </div>
  </div>
</div>


      {/* Apple Watch and Valentine's Day Section */}
      <div className="flex flex-col sm:flex-row sm:items-center p-4 border cursor-pointer">
        {/* Apple Watch */}
        <div className="p-4 sm:w-[50%]">
          <div className="items-center justify-center flex flex-col mt-10 mb-10">
            <div className="flex flex-row font-bold text-3xl sm:text-2xl">
              <IoLogoApple /> WATCH
            </div>
            <div className="items-center justify-center flex flex-col">
              <p className="text-orange-500 text-md font-medium">ULTRA 2</p>
              <p className="text-xl sm:text-base">Next-level adventure.</p>
              <div className="flex flex-row text-blue-600 lg:text-lg md:text-lg sm:text-lg lg:mt-2 md:mt-5 sm:mt-4">
                <div className="lg:mr-4 md:mr-10 sm:mr-7 flex items-center"><p className="lg:pb-1 md:mr-2 sm:mr-1 text-sm">Learn More</p><LiaGreaterThanSolid /></div>
                <div className="flex items-center"><p className="lg:pb-1 md:mr-2 sm:mr-1 text-sm">Buy</p> <LiaGreaterThanSolid /></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={watch} className="w-full h-auto" style={{ height: "calc(100% + 5px)" }} alt="Apple Watch" />
          </div>
        </div>
        {/* Valentine's Day Section */}
        <div className="p-4 border sm:w-[50%] flex flex-col items-center justify-end " style={{ backgroundImage: valdayImage, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="flex flex-col items-center mt-96 ml-10">
            <p className="text-4xl font-semibold">Valentine's Day</p>
            <p>Find the perfect gift.</p>
            <div className="flex flex-row text-blue-600 lg:text-lg md:text-lg sm:text-lg lg:mt-0 md:mt-5 sm:mt-4">
              <div className="flex items-center"><p className="lg:pb-1 md:mr-2 sm:mr-1 text-sm">Shop</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* MacBook Pro and iPad Section */}
      <div className="flex flex-col sm:flex-row sm:items-center p-4 border cursor-pointer">
        {/* MacBook Pro */}
        <div className="p-4 sm:w-[50%]">
          <div className="items-center justify-center flex flex-col mt-10 mb-10">
            <div className="flex flex-row font-bold text-3xl sm:text-2xl">
              <IoLogoApple /> MacBook Pro
            </div>
            <div className="items-center justify-center flex flex-col">
              <p className="text-xl sm:text-base">Mind-blowing.Head-turning.</p>
              <div className="flex flex-row text-blue-600 lg:text-lg md:text-lg sm:text-lg lg:mt-2 md:mt-5 sm:mt-4">
                <div className="lg:mr-4 md:mr-10 sm:mr-7 flex items-center"><p className="lg:pb-1 md:mr-2 sm:mr-1 text-sm">Learn More</p><LiaGreaterThanSolid /></div>
                <div className="flex items-center"><p className="lg:pb-1 md:mr-2 sm:mr-1 text-sm">Buy</p> <LiaGreaterThanSolid /></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={macbookpro} className="w-full h-auto" style={{ height: "calc(100% + 5px)" }} alt="MacBook Pro" />
          </div>
        </div>
        {/* iPad Section */}
        <div className="p-1 sm:w-[50%] cursor-pointer">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-center">
              <p className="lg:text-4xl mid:text-3xl sm:text-3xl font-semibold text-gray-800">iPad</p>
              <p className="lg:text-xl mid:text-lg sm:text-lg">Lovable. Drawable. Magical.</p>
            </div>
            <div className="flex flex-row text-blue-600 lg:text-lg mid:text-lg sm:text-lg lg:mt-2 mid:mt-2 sm:mt-1">
              <div className="lg:mr-4 mid:mr-3 sm:mr-3 flex items-center"><p className="pb-1 hover:underline text-sm">Learn more</p><LiaGreaterThanSolid /></div>
              <div className="flex items-center"><p className="pb-1 hover:underline text-sm">Buy</p> <LiaGreaterThanSolid /></div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={ipad} className="lg:w-[50%] cmd:w-[70%] sm:w-[80%]" alt="iPad" />
          </div>
        </div>
      </div>

      {/* AirPods Pro and Trade In Section */}
      <div className="flex flex-col sm:flex-row sm:items-center p-2 items-center ">
        {/* AirPods Pro */}
        <div className="w-full sm:w-[50%] h-1/2 p-1 bg-black cursor-pointer flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mt-8">
            <p className="lg:text-4xl mid:text-3xl sm:text-3xl font-semibold text-white">AirPods Pro</p>
            <p className="lg:text-xl mid:text-lg sm:text-lg text-white">Adaptive Audio. Now playing.</p>
          </div>
          <div className="flex flex-row text-blue-400 text-lg lg:mt-4 md:mt-4 sm:mt-4">
            <div className="lg:mr-4 md:mr-4 sm:mr-4 flex items-center"><p className="pb-1 cursor-pointer hover:underline text-sm">Learn more</p><LiaGreaterThanSolid/></div>
            <div className="flex items-center"><p className="pb-1 cursor-pointer hover:underline text-sm">Buy</p> <LiaGreaterThanSolid/></div>
          </div>
          <img src={airpods} className="mt-4" alt="AirPods Pro" />
        </div>
        {/* Trade In */}
        <div className="p-4 sm:w-[50%]">
          <div className="items-center justify-center flex flex-col mt-10 mb-10">
            <div className="flex flex-row font-bold text-3xl sm:text-2xl">
              <IoLogoApple /> Trade in
            </div>
            <div className="items-center justify-center flex flex-col">
              <p className="text-xl sm:text-base">upgrade and save.It's that easy.</p>
              <div className="flex flex-row text-blue-600 lg:text-lg md:text-lg sm:text-lg lg:mt-2 md:mt-5 sm:mt-4">
                <div className="lg:mr-4 md:mr-10 sm:mr-7 flex items-center"><p className="lg:pb-1 md:mr-2 sm:mr-1 text-sm">see whats your device is worth</p></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={tradein1} className="w-full h-auto" style={{ height: "calc(100% + 5px)" }} alt="Apple Watch" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
