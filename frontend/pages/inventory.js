import Header from '../components/Header/index';
import SideBar from '../components/sidebar/index';
import Inventory from '../components/inventory/inventory_pages';
const inventory = () => {
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
              <Inventory />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default inventory;
