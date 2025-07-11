import React from 'react';
import { BiHeart } from "react-icons/bi";



const Single = ({sohan,handleBookMark}) => {
    

    // console.log(sohan)
    return (
        <div>
            <div className="card w-96 shadow-sm">
  <div className="card w-96 shadow-sm -mt-12">
  
  <figure className="flex items-center gap-8 p-4 ml-8">
    <img src={sohan.image} alt="Shoes" className="w-32 h-20 object-cover" />
    <h1 className="text-sm text-center">{sohan.description}</h1>
  </figure>
</div>

  <div className="card-body">
    
    <h1 className='-mr-[700px] -mt-24 pr-12'>${sohan.currentBid}</h1>
    <h1 className='-mr-[1100px] -mt-8'>{sohan.timeLeft}</h1>
    <div className='ml-[870px] -mt-8'>
          <button onClick={()=>handleBookMark(sohan)}> <BiHeart size={30} /></button>
         
    </div>
   
    
  </div>
</div>
            
        </div>
    );
};

export default Single;