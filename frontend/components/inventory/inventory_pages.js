
import Details from "../details/inv_details";
import React, { useState, useEffect } from 'react';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";


const inventory_pages = () => {
  const [itemData , setItemData] = useState([])
  
  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/get-items', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setItemData(data)
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
                <div>
                <HiOutlineClipboardDocumentList />
                </div>
                <div>
                  <p>Inventory</p>
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
              <div className='col-span-12 pr-3 '>
              <input
                type="text"
                placeholder="Search items..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-[500px] p-2 mb-3 bg-blue-100 border border-gray-300 p-2 focus:outline-none rounded-md mb-3"
              />
                <Details itemData={filteredItems}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default inventory_pages;
