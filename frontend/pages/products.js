import Header from '../components/Header/index';
import SideBar from '../components/sidebar/index';
import Products from '../components/products/product_page';
const products = () => {
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
              <Products/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default products;
