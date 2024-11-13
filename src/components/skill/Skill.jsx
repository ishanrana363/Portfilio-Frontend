import { useEffect, useState } from 'react';
import skillStore from '../../api-request/skillStore';
import { Helmet } from 'react-helmet-async';
import SkeletonLoader from '../loder/SkeletonLoader';

const Skill = () => {
  const { allSkillDataApi, allSkillData } = skillStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      await allSkillDataApi();
    })()
  }, []);

  if (allSkillData === null || allSkillData.length === 0) {
    return <SkeletonLoader />;
  }
  return (
    <>
      <Helmet>
        <title>Portfolio || Skill Page</title>
      </Helmet>
      <div className="bg-gradient-to-br from-emerald-500 via-teal-400 via-cyan-300 shadow-md  to-blue-500 min-h-screen text-gray-900 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive padding */}
          <div className=" py-5 md:py-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
              {allSkillData.map((item, i) => (
                <div key={i} className="h-full">
                  <div className="flex flex-col h-full bg-gray-400 shadow-xl rounded-lg transform transition hover:translate-x-4 duration-500 hover:shadow-2xl">
                    {/* Card content */}
                    <figure className="px-4 pt-4 md:px-6 md:pt-6 lg:px-10 lg:pt-10">
                      <img
                        src={item?.img}
                        className="rounded-full border border-bgPrimary mx-auto"
                        alt="Skill Image"
                        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                      />
                    </figure>
                    <div className="flex-grow card-body items-center text-center">
                      <h2 className="card-title  md:text-xl text-[12px] font-mono ">
                        {item?.name}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
