import React from 'react';

const Banner = () => {
    return (
        <div
            className="w-[1550px] h-[500px] bg-cover bg-center"
           style={{ backgroundImage: "url('/images/Banner-min.jpg')" }}

        >
            <div className="text-white text-3xl font-semibold mr-[800px]">
                <h1 className='w-[530px] h-[120px] ml-[130px] pt-36'>Bid on Unique Items from <br /> Around the World</h1>
                <p className='pt-24 ml-32 w-[642px] h-[60px] text-xl'>Discover rare collectibles,luxury goods,and vintage<br /> treasures in our curated auctions</p>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-20 ml-32 bg-[#FFFFFF] text-[#010000] rounded-4xl pl-5 pr-5 pt-4 pb-4">Explore Accounts</button>
                
            </div>
        </div>
    );
};

export default Banner;
