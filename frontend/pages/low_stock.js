import Header from '../components/Header/index';
import SideBar from '../components/sidebar/index';
import L_Items from '../components/low_items/low';
const low_stock = () => {
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
              <L_Items/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default low_stock;
