import Low_Detail from "../low_items/low_stock_details";
import  React , { useState, useEffect } from 'react';
import { IoTrendingDownOutline } from "react-icons/io5";




const inventory_pages = () => {
  const [itemData , setItemData] = useState([])
    useEffect(()=> {
      fetch('http://127.0.0.1:8000/api/get-low-stock/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
       setItemData(data["items"])
      })
      .catch((error) => {
       console.error('Error:', error);
       return 'An error occurred'
      });
    },  [])
    const [searchText , setSearchText] = useState("")

    const filteredItems = searchText ? itemData.filter(item => 
      item.item_name.toLowerCase().includes(searchText.toLowerCase())
    ):itemData;

    const getCurrentDate = () => {
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
      };
  return (
    <section>
      <div>
        <div className="bg-blue-50 rounded-lg py-3 h-[700px] overflow-y-auto">
          <div className="pl-3 mb-10 pr-20">
            <div className="w-full bg-white flex justify-between items-center px-5 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-x-5">
                <div className='text-orange-500'>
                <IoTrendingDownOutline/>
                </div>
                <div className='text-orange-500'>
                  <p>Low Stocks</p>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <div>
                  {' '}
                  <p>{getCurrentDate()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pl-3 pr-3">
            <div className='grid grid-cols-12'>
              <div className='col-span-12 pr-3'>
              <input
                  type="text"
                  placeholder="Search items..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-[500px] p-2 mb-3 bg-blue-100 border border-gray-300 focus:outline-none rounded-md"
                />
                <Low_Detail itemData={filteredItems}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default inventory_pages;
