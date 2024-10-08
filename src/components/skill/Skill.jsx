import { useEffect, useState } from 'react';
import skillStore from '../../api-request/skillStore';
import Loader from './../loder/Loder';

const Skill = () => {
  const { allSkillDataApi, allSkillData } = skillStore();
  const [loder, setLoder] = useState(false);

  useEffect(() => {
    (async () => {
      setLoder(true);
      await allSkillDataApi();
      setLoder(false);
    })();
  }, []);



  return (
    <>
      <div className='bg-bgPrimary min-h-screen text-white  '>
        <div className='max-w-screen-xl mx-auto py-10'>
          <div>
            {
              loder ? <Loader></Loader> : (
                <div className='grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-6'>
                  {allSkillData &&
                    allSkillData.map((item, i) => {
                      return (
                        <div key={i} className="h-full">
                          <div className="card bg-gray-400 shadow-xl transform transition duration-500 hover:scale-75 hover:shadow-2xl">
                            <figure className="px-10 pt-10">
                              <img
                                src={item?.img}
                                className="rounded-full hover:scale-125 hover:translate-x-2 hover:duration-1000 border border-bgPrimary"
                                alt="Skill Image"
                                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                              />
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title font-serif ">{item?.name}</h2>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )
            }
          </div>
        </div>
      </div>

    </>
  );
};

export default Skill;
