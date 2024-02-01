import Header from '../components/Header/index';
import SideBar from '../components/sidebar/index';
import Add from '../components/add_to_inv/add_new_product';
const AddProduct = () => {
  return (
    <section>
      <div>
        <Header />
        <div className="w-full pl-12">
          <div className="grid grid-cols-12">
            <div>
              <SideBar />
            </div>
            <div className="col-span-10 ">
              <Add/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;