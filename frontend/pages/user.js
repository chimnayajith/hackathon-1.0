import Header from '../components/Header/index';
import SideBar from '../components/sidebar/index';
import User from '../components/user_page/u_page';
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
              <User/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;