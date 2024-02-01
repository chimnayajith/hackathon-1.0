
import { BsCalendar2Date } from 'react-icons/bs';
import URL from '../url/index';
import Category from '../category/index';
import { MdInventory } from "react-icons/md";

const index = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US');
  };
  return (
    <section>
      <div>
        <div className="bg-blue-50 rounded-lg py-3">
          <div className="pl-3 mb-10 pr-20">
            <div className="w-full bg-white flex justify-between items-center px-5 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-x-5">
                <div>
                <MdInventory />
                </div>
                <div>
                  <p>Inventory</p>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <div>
                  <BsCalendar2Date />
                </div>
                <div>
                  {' '}
                  <p>{getCurrentDate()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pl-3">
            <div className="grid grid-cols-12">
              <div className="col-span-10 pr-3 h-[80%]" >
                <URL />
              </div>

              <div className="col-span-2 pb-7 pr-3">
                <Category />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
