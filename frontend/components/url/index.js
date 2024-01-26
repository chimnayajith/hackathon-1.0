
import { Eye } from 'react-feather';
const index = () => {
  return (
    <div>
      <div className="w-full lg:h-96 xl:h-120 bg-white px-4 rounded-lg shadow-md">
        <div className="h-[96%] ">
          <table className="table-fixed w-full">
            <thead>
              <tr className="flex justify-between border-b border-gray-200 py-2 w-full">
                <th className="w-[30%] flex justify-start">Category</th>
                <th className="w-[30%] flex justify-start">Location</th>
                <th className="w-[30%] flex justify-start">View</th>
              </tr>
            </thead>

            <tbody>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center gap-x-2">
                    <div>
                      <p className="lg:text-xs xl:text-sm">Laptops</p>
                    </div>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center">
                    <p className="text-xs text-center opacity-75">Warehouse 1</p>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start]">
                  <div>
                    <button className="bg-blue-200 px-5 xl:py-1 text-blue-400 rounded-full text-xs">
                      <Eye/>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center gap-x-2">
                    <div>
                      <p className="lg:text-xs xl:text-sm">Mobiles</p>
                    </div>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center">
                    <p className="text-xs text-center opacity-75">Warehouse 1</p>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start]">
                  <div>
                    <button className="bg-blue-200 px-5 xl:py-1 text-blue-400 rounded-full text-xs">
                    <Eye/>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center gap-x-2">
                    <div>
                      <p className="lg:text-xs xl:text-sm">Tablets</p>
                    </div>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center">
                    <p className="text-xs text-center opacity-75">Warehouse 1</p>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start]">
                  <div>
                    <button className="bg-blue-200 px-5 xl:py-1 text-blue-400 rounded-full text-xs">
                      <Eye/>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center gap-x-2">
                    <div>
                      <p className="lg:text-xs xl:text-sm">Monitors</p>
                    </div>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center">
                    <p className="text-xs text-center opacity-75">Warehouse 1</p>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start]">
                  <div>
                    <button className="bg-blue-200 px-5 xl:py-1 text-blue-400 rounded-full text-xs">
                      <Eye/>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center gap-x-2">
                    <div>
                      <p className="lg:text-xs xl:text-sm">Projectors</p>
                    </div>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center">
                    <p className="text-xs text-center opacity-75">Warehouse 1</p>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start]">
                  <div>
                    <button className="bg-blue-200 px-5 xl:py-1 text-blue-400 rounded-full text-xs">
                      <Eye/>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center gap-x-2">
                    <div>
                      <p className="lg:text-xs xl:text-sm">Televisions</p>
                    </div>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center">
                    <p className="text-xs text-center opacity-75">Warehouse 2</p>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start]">
                  <div>
                    <button className="bg-blue-200 px-5 xl:py-1 text-blue-400 rounded-full text-xs">
                      <Eye/>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center gap-x-2">
                    <div>
                      <p className="lg:text-xs xl:text-sm">Fridge</p>
                    </div>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start">
                  <div className="flex items-center">
                    <p className="text-xs text-center opacity-75">Warehouse 2</p>
                  </div>
                </td>
                <td className="w-[30%] flex justify-start]">
                  <div>
                    <button className="bg-blue-200 px-5 xl:py-1 text-blue-400 rounded-full text-xs">
                      <Eye/>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default index;
