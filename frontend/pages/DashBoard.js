import Header from '../components/Header/index';
import SideBar from '../components/sidebar/index';
import Screen from '../components/screen1/dashboard';
const DashBoard = () => {
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
              <Screen/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;