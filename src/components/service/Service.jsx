import React, { useEffect, useState } from 'react';
import serviceStore from '../../api-request/serviceStore';
import SkeletonLoader from './../loder/SkeletonLoader';
import { Helmet } from 'react-helmet-async';
import Animation from '../../animation/Animation';

const Service = () => {
  const { serviceDataListApi, serviceDataList } = serviceStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await serviceDataListApi();
    })();
  }, []);

  if (serviceDataList === null || serviceDataList.length === 0) {
    return <SkeletonLoader />;
  }
  return (
    <Animation>
      <div className="bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100 pb-4 md:pb-8 ">
        <Helmet>
          <title>Portfolio || Service page</title>
        </Helmet>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-center md:text-4xl font-mono text-gray-900 py-1 md:py-4">
            All Services
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-7 md:gap-4 ">
            {serviceDataList.map((item, i) => (
              <div key={i} className="w-11/12 mt-3 md:mt-0 mx-auto">
                <div className="card bg-gray-400 shadow-xl transform transition duration-500 hover:translate-x-3 hover:shadow-2xl h-full flex flex-col justify-between">
                  <div className="md:px-10 pb-2 px-2 text-[9px] md:py-10 flex-grow flex flex-col items-center">
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
    </Animation>
  );
};

export default Service;
