import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Filter = () => {
  // Array of items to be displayed
  const items = [
    'High Tatras',
    'Low Tatras',
    'Little Fatra',
    'Velka Fatra',
    'Orava',
    'Liptov',
    'Pieniny',
    'Donovaly',
    'Štiavnické Hills',
    'Horehronie',
  ];

  // Split items into two rows
  const firstRowItems = items.slice(0, 5);
  const secondRowItems = items.slice(5);

  // Define responsive styles for the cards
  const cardStyle =
    'flex flex-row gap-3 rounded-lg bg-white py-4 px-6 sm:py-[20px] sm:px-10 w-full sm:w-[200px] md:w-[250px] lg:w-[300px] h-[60px]';

  return (
    <div className="bg-[#F3F4F6]">
      <div className="px-4 sm:px-10 md:px-16 lg:px-20 pt-10 sm:pt-20 pb-3 flex flex-wrap gap-2 justify-center">
        {firstRowItems.map((item, index) => (
          <div key={index} className={cardStyle}>
            <BsSearch />
            <h1 className="text-[15px] leading-5">{item}</h1>
          </div>
        ))}
      </div>
      <div className="px-4 sm:px-10 md:px-16 lg:px-20 pb-3 flex flex-wrap gap-2 justify-center">
        {secondRowItems.map((item, index) => (
          <div key={index} className={cardStyle}>
            <BsSearch />
            <h1 className="text-[15px] leading-5">{item}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
