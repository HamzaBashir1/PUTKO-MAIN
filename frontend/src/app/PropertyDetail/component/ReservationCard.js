import React from 'react'
import { useState,useEffect } from 'react';
import Overview from './Overview';

const ReservationCard = () => {
    const nightlyRate = 75;
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(0);
  const [reserved, setReserved] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setNights(differenceInDays > 0 ? differenceInDays : 0);
    } else {
      setNights(0);
    }
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    const subtotal = nightlyRate * nights;
    const discount = nights >= 7 ? 28 : 0; // example: weekly discount
    const cleaningFee = 62;
    const serviceFee = 83;
    const taxesAndFees = 29;
    const totalPrice = subtotal - discount + cleaningFee + serviceFee + taxesAndFees;
    setTotal(totalPrice);
  }, [nights]);

  const handleReserve = () => {
    if (checkInDate && checkOutDate && guests > 0) {
      setReserved(true);
      alert("Reservation successful!");
    } else {
      alert("Please select valid check-in and check-out dates and number of guests.");
    }
  };
  return (
    <div className='flex flex-col bg-[#f8f8f8]'>
        <div className='flex flex-col lg:flex-row p-4 lg:space-x-8'>
            <div className='flex-1'>
            <Overview />
            
            </div>
            <div className='bg-white p-5 rounded-lg shadow-lg'>
            <div className="flex flex-col sm:flex-row justify-between mb-4">
                <h1 className="font-bold text-xl sm:text-2xl">${nightlyRate} /<span className="text-sm">night</span></h1>
                <p className="font-bold text-xl sm:text-2xl">5.0</p>
            </div>

            {/* Reservation Details */}
            <div className="p-4 rounded-lg mb-4 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between mb-4 space-y-4 sm:space-y-0">
                <div className="flex flex-col flex-1 relative">
                    <input 
                    type="date" 
                    className="border rounded-lg p-2 w-full"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    />
                    <label className="absolute left-2 top-2 text-sm font-bold">CHECK-IN</label>
                </div>
                <div className="flex flex-col flex-1 relative">
                    <input 
                    type="date" 
                    className="border rounded-lg p-2 w-full"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                    <label className="absolute left-2 top-2 text-sm font-bold">CHECK-OUT</label>
                </div>
                </div>
                <div className="flex flex-col">
                <div className="relative mb-4">
                    <input 
                    type="number" 
                    className="border rounded-lg p-2 w-full"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    />
                    <label className="absolute left-2 top-2 text-sm font-bold">GUESTS</label>
                </div>
                <button 
                    className="w-full bg-green-500 text-white py-2 rounded-lg font-bold"
                    onClick={handleReserve}
                >
                    Reserve
                </button>
                {reserved ? (
                    <p className="text-center text-sm text-green-500 mt-2">Reservation successful! You won't be charged yet.</p>
                ) : (
                    <p className="text-center text-sm mt-2">You won't be charged yet</p>
                )}
                </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="p-4 rounded-lg bg-white shadow-sm">
                <div className="flex justify-between mb-2">
                <p>${nightlyRate} * {nights} nights</p>
                <p>${nightlyRate * nights}</p>
                </div>
                {nights >= 7 && (
                <div className="flex justify-between mb-2">
                    <p>Weekly discount</p>
                    <p>-$28</p>
                </div>
                )}
                <div className="flex justify-between mb-2">
                <p>Cleaning fee</p>
                <p>$62</p>
                </div>
                <div className="flex justify-between mb-2">
                <p>Service fee</p>
                <p>$83</p>
                </div>
                <div className="flex justify-between mb-2">
                <p>Occupancy taxes and fees</p>
                <p>$29</p>
                </div>
                <hr className="my-4 h-0.5 border-t-0 bg-neutral-100" />
                <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>${total}</p>
                </div>
            </div>
            </div>
        </div>

        <div className='flex-1'>

        </div>
    </div>
  )
}

export default ReservationCard
