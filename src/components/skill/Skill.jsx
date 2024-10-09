import React, { useEffect } from 'react';
import skillStore from '../../api-request/skillStore';

const Skill = () => {
  const { allSkillDataApi, allSkillData } = skillStore();

  useEffect(() => {
    (async () => {
      await allSkillDataApi();
    })();
  }, []);

  console.log(allSkillData);

  return (
    <div className='bg-bgPrimary min-h-screen text-white '>
      <div className='max-w-screen-xl mx-auto py-10'>
        <div>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6'>
            {allSkillData &&
              allSkillData.map((item, i) => {
                return (
                  <div key={i} className="h-full">
                    <div className="card bg-gray-400 shadow-xl h-full">
                      <figure className="px-10 pt-10">
                        <img
                          src={item?.img}
                          className="rounded-full hover:scale-125 hover:translate-x-6 hover:duration-1000 border border-bgPrimary "
                          alt="Skill Image"
                          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">{item?.name}</h2>
                        <p>{item?.description}</p>
                        
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

export default Skill;
