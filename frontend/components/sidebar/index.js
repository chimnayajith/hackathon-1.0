import { IoAddCircleOutline } from "react-icons/io5";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoTrendingDownOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GrHomeRounded } from "react-icons/gr";
import { LuPackageX } from "react-icons/lu";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

const Sidebar = () => {
  const router = useRouter();

  const [isAdmin , setIsAdmin ] = useState(true);
  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/is-admin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
       setIsAdmin(data)
      })
      .catch((error) => {
       console.error('Error:', error);
       return 'An error occurred'
      });
  } ,  [])
  return (
    <section>
      <div className="w-full">
        <div className="w-[60%] h-[700px] bg-blue-50 flex flex-col items-center rounded-xl gap-y-12 py-3">
          <Link href="/DashBoard">
            <div className={`group text-xl text-blue-600 ${router.pathname === '/DashBoard' || router.pathname ==='/' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
            <GrHomeRounded />
            <span class="absolute top-1/2 left-8 transform -translate-y-1/2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Dashboard</span>
            </div>
          </Link>
          <Link href="/inventory">
            <div className={`group text-xl text-blue-600 ${router.pathname === '/inventory' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
              <HiOutlineClipboardDocumentList/>
            <span class="absolute top-1/2 left-8 transform -translate-y-1/2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Inventory</span>

            </div>
          </Link>
          { isAdmin && (
            <Link href="/add_product">
            <div className={`group text-xl text-blue-600 ${router.pathname === '/add_product' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
            <IoAddCircleOutline />
            <span class="absolute top-1/2 left-8 transform -translate-y-1/2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white whitespace-nowrap group-hover:scale-100">Add Products</span>
            </div>
          </Link>
          )}
          <Link href="/out_stock">
            <div className={`group text-xl text-blue-600 ${router.pathname === '/out_stock' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
            <LuPackageX />
            <span class="absolute top-1/2 left-8 transform -translate-y-1/2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white whitespace-nowrap group-hover:scale-100">Out of Stock</span>

            </div>
          </Link>
          <Link href="/low_stock">
            <div className={`group text-xl text-blue-600 ${router.pathname === '/low_stock' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
              <IoTrendingDownOutline />
            <span class="absolute top-1/2 left-10 transform -translate-y-1/2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white whitespace-nowrap group-hover:scale-100">Low Stock</span>

            </div>
          </Link>
          <Link href="/user">
            <div className={`group text-xl text-blue-600 ${router.pathname === '/user' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
              <PiUsersThreeBold />
            <span class="absolute top-1/2 left-8 transform -translate-y-1/2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Users</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
