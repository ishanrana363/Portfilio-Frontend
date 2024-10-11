import React, { useEffect, useState } from 'react';
import serviceStore from '../../api-request/serviceStore';

const Service = () => {
  const [loader, setLoader] = useState(false);
  const { serviceDataListApi, serviceDataList } = serviceStore();
  window.scrollTo(0, 0);
  useEffect(() => {
    (async () => {
      setLoader(true);
      await serviceDataListApi();
      setLoader(false);
    })();
  }, []);

  return (
    <div className="bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-center lg:text-lgH2 md:text-mdH2 text-smH2 font-mono text-white py-4">
            All Service
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-7 md:gap-4 gap-8 grid-cols-2">
            {serviceDataList &&
              serviceDataList.map((item, i) => {
                return (
                  <div key={i} className="w-11/12">
                    <div className="card bg-gray-400 shadow-xl transform transition duration-500 hover:translate-x-3 hover:shadow-2xl h-full flex flex-col justify-between">
                      <div className="px-10 py-10 flex-grow flex flex-col items-center">
                        <img className="w-24 h-24 rounded-full" src={item.img} alt="" />
                        <h3 className="  text-white font-bold font-mono mt-4 text-center">
                          {item.title}
                        </h3>
                        <h6 className="text-white text-center lg:text-[25px] md:text-[22px] font-bold font-mono ">{item.name}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
