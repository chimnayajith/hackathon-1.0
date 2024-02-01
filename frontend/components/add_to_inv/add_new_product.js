import Form from '../add_to_inv/form_page';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";


const index = () => {
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
        <div className=" justify-center bg-blue-50 h-[700px]  rounded-lg py-3">
          <div className="pl-3 mb-10 pr-20 mt-2">
            <div className="w-full bg-white flex justify-between items-center px-5 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-x-5">
                <div>
                <HiOutlineClipboardDocumentList />
                </div>
                <div>
                  <p>Add Product (Admin Only)</p>
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

          <div className="w-full pl-3 flex justify-center">
            <div className="grid grid-cols-12">
              <div className="col-span-12 pr-3 h-[80%]" >
                <Form/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
