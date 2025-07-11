import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-300 h-[250px]'>
            <h1 className='flex justify-center mb-4 font-bold pt-16'>Auction<span className='text-[#FFD337]'>Gallery</span></h1>
            <div className='flex justify-center mb-4 font-semibold gap-4'>
                <h1>Bid.</h1>
                <h1>Win.</h1>
                <h1>Own.</h1>
            </div>
            <div>
               <ul className='flex justify-center gap-8 mb-4 font-medium'>
                <li>Home</li>
                <li>Auctions</li>
                <li>Categories</li>
                <li>How to works</li>
                </ul> 
            </div>
            <h1 className='flex justify-center font-semibold'>@2025 AuctionHub.All rights reserved</h1>
        </div>
    );
};

export default Footer;