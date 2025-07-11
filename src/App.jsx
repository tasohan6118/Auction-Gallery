import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Item from './components/Item/Item';
import { useState } from 'react';
import { BiHeart } from "react-icons/bi";
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [bookmarked, setBookmarked] = useState([]);

  const handleBookMark = (sohan) => {
    
    if (!sohan.id) {
      sohan.id = Math.random().toString(36).substr(2, 9);
    }

    const exists = bookmarked.find(item => item.id === sohan.id);
    if (!exists) {
      setBookmarked([...bookmarked, sohan]);

    }
  };

  const totalBid = bookmarked.reduce(
    (total, item) => total + Number(item.currentBid || 0),
    0
  );
  
  
   

  return (
    <>
      <Navbar />
      <Banner />


      <div className='main-container flex text-center'>
        {/* Left side: Active Auctions */}
        <div className='left-container w-[70%] mt-24'>
          <h1 className='text-2xl font-bold -ml-[570px]'>Active Auctions</h1>
          <p className='text-gray-600 -ml-[470px]'>Discover and bid on extraordinary Items</p>
          <Item handleBookMark={handleBookMark} />
        </div>

        {/* Right side: Favorites Card */}
        <div className='right-container w-[30%] mt-[370px]'>
          <div className="card bg-gray-100 shadow-sm w-[370px] h-[285px] ml-16 overflow-y-auto">
            <div className="card-body items-center text-center">
              
             <div className='flex gap-2'>
              <div className='mt-2'><BiHeart size={25} /></div>
               <h1 className='text-lg font-semibold mt-2'>Favorites Items</h1>
             </div>

              {bookmarked.length === 0 ? (
                <>
                  <p className="text-[#000000] mt-2 font-medium">No favorites yet</p>
                  <p className="text-sm text-gray-500">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                  <h1 className="mt-4 font-medium">Total bids Amount: $0000</h1>
                </>
              ) : (
                <>
                  <div className="mt-4 w-full">
                    {bookmarked.map((marked) => (
                      <div
                        key={marked.id || marked.description}
                        className="flex items-center gap-2 mb-4"
                      >
                        <img
                          src={marked.image}
                          alt=""
                          className="w-16 h-12 object-cover rounded"
                        />
                        <h1 className="text-sm font-medium">{marked.description}</h1>
                      </div>
                    ))}
                  </div>

                  <h1 className="mt-4 font-medium">
                    Total bids Amount: ${totalBid}
                  </h1>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      

    </>
  );
}

export default App;
