import { useEffect, useState } from 'react';
import skillStore from '../../api-request/skillStore';
import Loader from './../loder/Loder';
import { Helmet } from 'react-helmet-async';

const Skill = () => {
  const { allSkillDataApi, allSkillData } = skillStore();
  const [loder, setLoder] = useState(false);
  window.scrollTo(0,0)
  useEffect(() => {
    (async () => {
      setLoder(true);
      await allSkillDataApi();
      setLoder(false);
    })();
  }, []);

  return (
    <>
    <Helmet>
      <title> Skill Page </title>
    </Helmet>
      <div className='bg-bgPrimary min-h-screen text-white ' >
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'> {/* Responsive padding for different devices */}
          <div className='py-10'>
            <div>
              {loder ? (
                <Loader />
              ) : (
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6'>
                  {allSkillData &&
                    allSkillData.map((item, i) => {
                      return (
                        <div key={i} className="h-full">
                          <div className="flex flex-col h-full bg-gray-400 shadow-xl rounded-lg transform transition hover:translate-x-4 duration-500 hover:shadow-2xl"> {/* Added rounded-lg for rounded corners */}
                            <figure className="px-4 pt-4 md:px-6 md:pt-6 lg:px-10 lg:pt-10"> {/* Adjust padding for all devices */}
                              <img
                                src={item?.img}
                                className="rounded-full border border-bgPrimary mx-auto"  // Added mx-auto to center image
                                alt="Skill Image"
                                style={{ width: '120px', height: '120px', objectFit: 'cover' }}  // Adjust size for responsiveness
                              />
                            </figure>
                            <div className="flex-grow card-body items-center text-center">
                              <h2 className="card-title text-lg md:text-xl font-mono lg:text-2xl"> {/* Responsive font sizes */}
                                {item?.name}
                              </h2>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
