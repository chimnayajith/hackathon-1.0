import { BiCategoryAlt, BiCollection } from "react-icons/bi";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { useEffect, useState } from "react";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

const form = () => {
  const [selectedUnit, setSelectedUnit] = useState("piece");
  const units = ["piece","kg"];

  const [selectedCategory, setSelectedCategory] = useState("Other..");
  const [categories,setCategories] = useState([])

  useEffect(()=> { 
    fetch('http://127.0.0.1:8000/api/get-categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },  
    })
      .then((response) => response.json())
      .then((data) => {
       setCategories(data)
      })
      .catch((error) => {
       console.error('Error:', error);
       return 'An error occurred'
      });
  },[])
  const [productName , setProductName] = useState("");
  const [productId , setProductId] = useState("");
  const [quantity , setQuantity] = useState("");
  const [price , setPrice] = useState(0);



  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };
  const handleSubmit = () => {
    if(productName == "" || productId == "" || quantity ==""){
      console.log("error")
      
    }else {
      const requestData = {
        "product_id": productId,
        "item_name": productName,
        "quantity": parseInt(quantity),
        "unit": selectedUnit,
        "group": selectedCategory,
        "cost": parseFloat(price),
      };
  
  
      fetch('http://127.0.0.1:8000/api/add-item/', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(requestData)
      })
        .then((response) => response.json())
        .then((data) => {
            setProductName("")
            setProductId("")
            setQuantity("")
            setPrice("")
            setSelectedCategory("Others..")
            setSelectedUnit("piece")
          window.location.reload();
        })
        .catch((error) => {
         console.error('Error:', error);
         return 'An error occurred'
        });
    }
      
  };

  return (
    <div>
      <div className="flex justify-center w-[900px] h-[580px] bg-white px-4 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4 items-center ">
          <div className="bg-blue-100 w-64 p-2 mt-3 flex items-center mr-5 rounded-lg font-bold">
            <BiCategoryAlt className="text-blue-400 m-2" />
            <input
              type="Product"
              name="Product"
              placeholder="Product"
              onChange={(e) => setProductName(e.target.value)}
              className="bg-blue-100 outline-none text-sm flex-1 "
            ></input>
          </div>
          <div className="bg-blue-100 w-64 p-2 mt-3 flex items-center mr-5 rounded-lg font-bold">
            <MdOutlineConfirmationNumber className="text-blue-400 m-2" />
            <input
              type="Product"
              name="Product"
              onChange={(e) => setProductId(e.target.value)}
              placeholder="Product Id"
              className="bg-blue-100 outline-none text-sm flex-1 "
            ></input>
          </div>
          <div className="bg-blue-100 w-64 p-2 mt-3 flex items-center mr-5 rounded-lg font-bold">
            <BiCollection className="text-blue-400 m-2" />
            <input
              type="Product"
              name="Product"
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
              className="bg-blue-100 outline-none text-sm flex-1 "
            ></input>
          </div>


          {/* <div className="bg-blue-100 w-64 h-[48px] p-2 mt-3 flex items-center mr-5 rounded-lg cursor-pointer font-bold justify-between">
            <div className="mr-2 text-gray-400">{selectedCategory}</div>  
            <select
              value={selectedUnit}
              onChange={handleUnitChange}
              className="bg-blue-100 outline-none text-sm flex-1 cursor-pointer"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div> */}
          <div className="bg-blue-100 w-64 p-2 mt-3 h-[48px] flex items-center mr-5 rounded-lg cursor-pointer font-bold justify-between">
            {/* <div className="mr-2 text-gray-400">{selectedCategory}</div> */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="bg-blue-100 outline-none text-sm flex-1 cursor-pointer"
            >
              {categories.map((category) => (
                 <option key={category} value={category}>
                 {category}
               </option>
              ))}
            </select>
          </div>
          <div className="bg-blue-100 w-64 p-2 mt-3 flex items-center mr-5 rounded-lg font-bold">
            <LiaMoneyBillWaveAltSolid  className="text-blue-400 m-2" />
            <input
              type="Value"
              name="Unit Price"
              placeholder="Unit Price (optional)"
              onChange={(e) => setPrice(e.target.value)}
              className="bg-blue-100 outline-none text-sm flex-1 "
            ></input>
          </div>
          <div className="w-full mt-3 col-span-2 ">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline block mx-auto"
            >Add Product
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default form;