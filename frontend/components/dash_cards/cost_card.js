/* eslint-disable @next/next/no-img-element */
const cost = ({total_value , category_count, total_items}) => {
  return (
    <div>
      <div className="w-full grid grid-cols-3 lg:mt-10 xl:mt-10 2xl:mt-10 gap-x-4">
      <div className="bg-white shadow-md px-4 py-2 lg:h-64 xl:h-48 rounded-lg ">
        <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-xl font-bold text-Black-500">Total Cost</p>
          </div>
          
          <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-lg font-bold text- black-200"> ₹ {total_value}</p>
          </div>



          <div className="h-[90%] flex  items-center justify-between  gap-y-10 ">
            <div className="h-[20%]">
              <img alt="icon" className="h-full" src="/earning.png"></img>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md px-4 py-2 lg:h-64 xl:h-48 rounded-lg">
        <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-xl font-bold text-black-500">Categories</p>
          </div>
          
          <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-lg font-bold text- black-200">{category_count}</p>
          </div>



          <div className="h-[90%] flex  items-center justify-between  gap-y-10 ">
            <div className="h-[15%]">
              <img alt="icon" className="h-full" src="/categories.png"></img>
            </div>

          </div>
        </div>

        <div className="bg-white shadow-md px-4 py-2 lg:h-64 xl:h-48 rounded-lg">
        <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-xl font-bold text-Black-500">Total Items</p>
          </div>
          
          <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-lg font-bold text- black-200">{total_items}</p>
          </div>



          <div className="h-[90%] flex  items-center justify-between  gap-y-10 ">
            <div className="h-[20%]">
              <img alt="icon" className="h-full" src="/item.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cost;
