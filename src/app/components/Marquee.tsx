// components/BlogMarquee.tsx
import React from 'react';
import Marquee from 'react-fast-marquee';

const CirquraMarquee: React.FC = () => {
  return (
    <div className=" px-2 bg-gradient-to-r from-[#0043B7] to-[#001E51] py-8">
      <Marquee
        speed={60}
        className="text-white h-12 text-xl font-semibold tracking-wider "
      >
        <div className="mx-6 flex items-center">
         <img src="/asset/Logo.svg" alt="" />
        </div>
        <div className="mx-6 flex items-center">
         <img src="/asset/Logo1.svg" alt="" />
        </div>
        <div className="mx-6 flex items-center">
         <img src="/asset/Logo2.svg" alt="" />
        </div>
        <div className="mx-6 flex items-center">
         <img src="/asset/Logo3.svg" alt="" />
        </div>
        <div className="mx-6 flex items-center">
         <img src="/asset/Logo4.svg" alt="" />
        </div>
        <div className="mx-6 flex items-center">
         <img src="/asset/Logo1.svg" alt="" />
        </div>
        <div className="mx-6 flex items-center">
         <img src="/asset/Logo2.svg" alt="" />
        </div>
        
      </Marquee>
    </div>
  );
};

export default CirquraMarquee;
