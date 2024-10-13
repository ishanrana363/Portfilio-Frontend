import React, { useEffect, useState } from 'react';
import serviceStore from '../../api-request/serviceStore';
import Loader from '../loder/Loder';

const Service = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { serviceDataListApi, serviceDataList } = serviceStore();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls only on mount.
    const fetchData = async () => {
      try {
        setLoader(true);
        await serviceDataListApi();
      } catch (err) {
        setError('Failed to load services. Please try again later.');
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  if (loader) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center lg:text-lgH2 md:text-mdH2 text-smH2 font-mono text-white py-4">
          All Service
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-7 md:gap-4 gap-8">
          {serviceDataList && serviceDataList.length > 0 ? (
            serviceDataList.map((item, i) => (
              <div key={i} className="w-11/12">
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
            ))
          ) : (
            <div className="text-white text-center">No services available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
