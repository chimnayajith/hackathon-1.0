import { SiHiveBlockchain } from "react-icons/si";

const index = () => {
  return (
    <div className="w-full px-20 py-10 ">
      <div className="flex justify-between ">
        <div className="flex items-center justify-center gap-x-24 ">
          <div className="text-3xl">
          <SiHiveBlockchain />
          </div>
          <div>
            <p className="font-bold text-2xl">T R A C K I T</p>
          </div>
        </div>
        <div className="flex gap-x-2 ">
          <div className="px-6 text-sm bg-blue-200 rounded-full text-black flex items-center justify-center">
            <p>amFOSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
