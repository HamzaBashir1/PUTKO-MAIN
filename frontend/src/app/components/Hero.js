"use client";

import React from 'react';
import { BiSearch } from "react-icons/bi";

const Search = () => {
  // Define the actual searchModal or mock implementation
  const searchModal = { onOpen: () => console.log('Search Modal Opened') };

  const locationLabel = "Destination";
  const checkInLabel = "Check-in";
  const checkOutLabel = "Check-out";
  const guestLabel = "Who";

  return (
    <Hero
      locationLabel={locationLabel}
      checkInLabel={checkInLabel}
      checkOutLabel={checkOutLabel}
      guestLabel={guestLabel}
      searchModal={searchModal}
    />
  );
};

const Hero = ({ locationLabel, checkInLabel, checkOutLabel, guestLabel, searchModal }) => {
  const handleSearchClick = () => {
    if (searchModal && typeof searchModal.onOpen === 'function') {
      searchModal.onOpen();
    } else {
      console.log('searchModal.onOpen is not defined');
    }
  };

  return (
    <div
      className="
        pt-[150px]
        bg-cover
        bg-center
        bg-[url('https://s3-alpha-sig.figma.com/img/bb47/c92b/c5bf527b8df6eb4e119ac00e8d535333?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ALEXUeZPfeLyTULExIMJn6tmS2jwXJVE4hUeR16yTGIgQyg2hPSEsCHakcJnOaFukasSskvxGH-E0J-rC~3k5WbUWyGzbutcY5JQ0jqkmc7PvcYHbatT0AJjJQf4LDSeWYkpt5hitOR8xFFiE9TWPxanA0Y8YI3SgbKXyDUdFVf9MuUE6s2HPqfog4Vd0OLhPaJxHFC~ap0g0F58JlCg83MVgjZ28EfG3wK2uHmK0urt~7~Wr68ilMrFeMkUIeenuwTddpSBusdaUlUr1QXuJBoC-dvmvXoyVI0CpWKf1fUvV8DVTEm1Yphw0wRim-QjdwExDAvUsFiXHDeWEkILHg__')]
        h-[600px]
        sm:h-[500px]
        md:h-[600px]
        lg:h-[620px]
        xl:h-[620px]
        relative
        overflow-hidden
        bg-blend-darken
      "
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 "></div> {/* Dark overlay for better text visibility */}

      <div className="relative z-10 flex flex-col items-start ml-6 sm:ml-10 md:ml-24">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          No matter where <br /> you're going to, we'll <br /> take you there
        </h1>

        <div
          onClick={handleSearchClick}
          className="
            mt-6
            border
            w-full
            sm:w-[350px]
            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
            bg-transparent
            border-gray-300
          "
        >
          <div className="flex flex-row items-center justify-between px-4">
            <div className="text-xs font-semibold text-white">{locationLabel}</div>
            <div
              className="
                hidden
                sm:block
                text-xs
                font-semibold
                border-x
                px-4
                text-center
                text-white
              "
            >
              {checkInLabel} - {checkOutLabel}
            </div>
            <div
              className="
                text-xs
                pl-3
                pr-2
                text-gray-600
                flex
                flex-row
                items-center
                gap-2
              "
            >
              <div className="hidden sm:block text-white">{guestLabel}</div>
              <div
                className="
                  p-1
                  bg-[#4FBE9F]
                  rounded-full
                  text-white
                "
              >
                <BiSearch size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:pl-24 pl-5 pt-4'>
        <div className='flex flex-row items-center'>
          <img src='/people.png' alt='People' width={320} />
          <p className='text-white -ml-[180px] text-xs'>2,500 People Used Putko 24 Hours</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
