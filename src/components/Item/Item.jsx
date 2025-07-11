import React,{useEffect,useState} from 'react';
import Single from '../single item/Single';

const Item = ({handleBookMark}) => {


    const [item,setItems]=useState([])


useEffect(()=>{
    fetch("auction.json")
    .then(res=>res.json())
    .then(data=>setItems(data))
},[])


//  console.log(item)


    return (
        <div>
           <div className='all-item grid grid-rows-7 ml-32 mt-36 '>
            <div className='flex gap-16 -mt-16'>
                <h1 className='ml-16'>Items</h1>
            <h1 className='ml-76'>CurrentBid</h1>
            <h1 className='ml-24'>TimeLeft</h1>
            <h1 className='ml-16'>Bid Now</h1>
            </div>
            {
                item.map((single)=><Single sohan={single} handleBookMark={handleBookMark}></Single>)
            }
           </div>
        </div>
    );
};

export default Item;