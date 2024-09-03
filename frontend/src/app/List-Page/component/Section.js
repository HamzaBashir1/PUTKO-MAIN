import Image from 'next/image';
import React from 'react';
import section from '../../../../public/section.png';

const Section = () => {
  return (
    <div className="relative flex flex-col md:flex-row w-full max-w-[1510px] h-auto md:h-[480px] mx-auto bg-[#292A34] rounded-[20px] overflow-hidden">
      <div className="relative w-full md:w-[70%] h-[240px] md:h-full overflow-hidden">
        <Image
          src={section}
          alt="Section background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#292A34] to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col justify-center md:items-start p-8 text-left space-y-4">
        <h1 className="text-white text-[20px] md:text-[34px] leading-[28px] md:leading-[44px] font-semibold">
          Rent accommodation <br />
          with Putko and <span className="text-[#4FBE9F]">guests <br /> pay you directly</span>
        </h1>
        <button className="bg-[#4FBE9F] text-white rounded-[6px] py-[10px] md:py-[15.5px] px-[16px] md:px-[25px] w-full md:w-[192px] h-[40px] md:h-[48px] flex items-center justify-center shadow-md hover:bg-[#3fae8b] transition duration-300">
          <span className="text-[14px] md:text-[17px] font-semibold">More information</span>
        </button>
      </div>
    </div>
  );
};

export default Section;
