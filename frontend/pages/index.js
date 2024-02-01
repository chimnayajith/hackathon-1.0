import Header from '../components/Header/index';
import SideBar from '../components/sidebar/index';
import Dash from '../components/screen1/dashboard';
const index = () => {
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
                <Dash/>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
