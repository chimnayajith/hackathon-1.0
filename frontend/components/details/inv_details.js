
import { Fragment } from "react";
import { FaUpload,FaDownload } from "react-icons/fa";

import React, {useState , useEffect} from "react";
import Popup from 'reactjs-popup';

const inv_details= ({itemData})=>{
  const [value, setValue] = useState('');
  const handleInputChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g,'');
    setValue(numericValue);
}
    const [itemDatas , setItemDatas] = useState(itemData)
    useEffect(() => { setItemDatas(itemData)}, [itemData] )
    
const handleAddSubmit = (id , qty) => {
  const requestData = {
    "product_id": id,
    "quantity": parseInt(qty),
  };


  fetch('http://127.0.0.1:8000/api/add-stock/', {  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(requestData)
  })
    .then((response) => response.json())
    .then((data) => {
      fetch('http://127.0.0.1:8000/api/get-items', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
         setItemDatas(data)
        })
        .catch((error) => {
         console.error('Error:', error);
         return 'An error occurred'
        });
    })
    .catch((error) => {
     console.error('Error:', error);
     return 'An error occurred'
    });
}
const handleDeductSubmit = (id , qty) => {
  const requestData = {
    "product_id": id,
    "quantity": parseInt(qty),
  };


  fetch('http://127.0.0.1:8000/api/deduct-stock/', {  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(requestData)
  })
    .then((response) => response.json())
    .then((data) => {
      fetch('http://127.0.0.1:8000/api/get-items', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
         setItemDatas(data)
        })
        .catch((error) => {
         console.error('Error:', error);
         return 'An error occurred'
        });
    })
    .catch((error) => {
     console.error('Error:', error);
     return 'An error occurred'
    });
}
    return(
        
        <div>
            <div className="w-full h-full bg-white px-4 rounded-lg">
            <div className="h-[96%] ">
          <table className="table-fixed w-full">
            <thead>
              <tr className="flex justify-between border-b border-gray-200 py-2 w-full">
                <th className="w-[30%] flex justify-start">Product</th>
                <th className="w-[30%] flex justify-start">Product Id</th>
                <th className="w-[30%] flex justify-start">Category</th>
                <th className="w-[30%] flex justify-start">Stock</th>
                <th className="w-[30%] flex justify-start">Add Stock</th>
                <th className="w-[30%] flex justify-start">Deduct Stock</th>
              </tr>
            </thead>

            <tbody>
              {itemDatas.map((item)=> (
                <tr key={item.product_id} className="flex justify-between border-b border-gray-200 py-2 w-full">
                  <td className="w-[30%] flex justify-start">{item.item_name}</td>
                  <td className="w-[30%] flex justify-start">{item.product_id}</td>
                  <td className="w-[30%] flex justify-start">{item.group}</td>
                  <td className="w-[30%] flex justify-start">{item.quantity}</td>
                  <td className="w-[30%] flex justify-start">
                  <div >
                    <Fragment>
                    <Popup trigger=
                        {<button className="bg-blue-200 text-white px-5 py-2 rounded-md text-sm"> <FaUpload className="text-blue-900"/> </button>} 
                        modal nested>
                        {
                            close => (
                                <div className=" w-[400px] text-black bg-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >
                                    <div className='content p-2 py-4' >
                                    Add Stock to {item.item_name} ({item.product_id}):
                                    </div>
                                    <input 
                                      type="text" value={value} onChange={handleInputChange} 
                                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                      <div className="p-3">
                                        <button className=" w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                                        onClick=
                                            {() => {handleAddSubmit(item.product_id , value); close(); setValue('')}}>
                                                Submit
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </Popup>
                    </Fragment>
                  </div> 
                  </td>
                  <td className="w-[30%] flex justify-start]">
                  <div>
                    <Fragment>
                    <Popup trigger=
                          {<button className="bg-blue-200 text-white px-5 py-2 rounded-md text-sm"> <FaDownload className="text-red-500"/> </button>} 
                          modal nested>
                          {
                              close => (
                                  <div class='modal' className="w-[400px] text-black bg-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                      <div class='content p-2 py-4' >
                                          Deduct Stock from {item.item_name} ({item.product_id}) :
                                      </div>
                                      <input 
                                        type="text" value={value} onChange={handleInputChange} 
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                        <div className="p-3">
                                          <button className=" w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                          onClick=
                                              {() => { handleDeductSubmit(item.product_id , value);close(); setValue('')}}>
                                                  Submit
                                          </button>
                                      </div>
                                  </div>
                              )
                          }
                      </Popup>
                      </Fragment>
                  </div>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

            </div>
        </div>
    );

}
export default inv_details;