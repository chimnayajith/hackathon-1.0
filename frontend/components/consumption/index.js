import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
const cost = ({low_stock , out_of_stock}) => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 lg:mt-8 xl:mt-4 2xl:mt-8 gap-x-4">
      <Link href="/low_stock">
      <div className="bg-white shadow-md px-4 py-2 lg:h-64 xl:h-48 rounded-lg ">
        <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-xl font-bold text-orange-500">Low Stock</p>
          </div>
          
          <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-lg font-bold text- black-200">{low_stock} Item(s)</p>
          </div>



          <div className="h-[90%] flex  items-center justify-between  gap-y-10 ">
            <div className="h-[20%]">
              <img alt="icon" className="h-full" src="/arrow.png"></img>
            </div>
            <div className='text-sm text-gray-400'>
                Click to view items
            </div>
            <div className="h-[10%]">
                <img alt="icon" src="/external-link.png" className="h-full"></img>
              </div>
          </div>
        </div>
        </Link>

        <Link href="/out_stock">
      <div className="bg-white shadow-md px-4 py-2 lg:h-64 xl:h-48 rounded-lg">
        <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-xl font-bold text-red-500">Out of Stock</p>
          </div>
          
          <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-lg font-bold text- black-200">{out_of_stock} Item(s)</p>
          </div>



          <div className="h-[90%] flex  items-center justify-between  gap-y-10 ">
            <div className="h-[20%]">
              <img alt="icon" className="h-full" src="/out-of-stock.png"></img>
            </div>
            <div className='text-sm text-gray-400'>
                Click to view items
            </div>
            <div className="h-[10%]">
                <img alt="icon" src="/external-link.png" className="h-full"></img>
              </div>
          </div>
        </div>
        </Link>
          
      </div>
    </div>
  );
};

export default cost;