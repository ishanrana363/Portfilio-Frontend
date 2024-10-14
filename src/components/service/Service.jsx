import React, { useEffect, useState } from 'react';
import serviceStore from '../../api-request/serviceStore';
import SkeletonLoader from './../loder/SkeletonLoader';

const Service = () => {
  const { serviceDataListApi, serviceDataList } = serviceStore(); 

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
        await serviceDataListApi(); 
    })();
  }, []);

if(serviceDataList === null || serviceDataList.length === 0){
  return <SkeletonLoader />;
}
return (
    <div className="bg-bgPrimary pb-8 ">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center lg:text-lgH2 md:text-mdH2 text-smH2 font-mono text-white py-4">
          All Services
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-7 md:gap-4 gap-8">
          {serviceDataList.map((item, i) => (
            <div key={i} className="w-11/12 mx-auto">
              <div className="card bg-gray-400 shadow-xl transform transition duration-500 hover:translate-x-3 hover:shadow-2xl h-full flex flex-col justify-between">
                <div className="px-10 py-10 flex-grow flex flex-col items-center">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={item.img}
                    alt={item.name || 'Service Image'}
                  />
                  <h3 className="text-white font-bold font-mono mt-4 text-center">
                    {item.title}
                  </h3>
                  <h6 className="text-white text-center lg:text-[25px] md:text-[22px] font-bold font-mono">
                    {item.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
