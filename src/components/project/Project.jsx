import { useEffect, useState } from "react";
import projectStore from "../../api-request/projectStore";
import Loader from "../loder/Loder";
import { Link } from "react-router-dom";

const Project = () => {
  const { projectDataListApi, projectDataList } = projectStore();
  const [loder, setLoder] = useState(false);

  useEffect(() => {
    (async () => {
      setLoder(true);
      await projectDataListApi();
      setLoder(false);
    })();
  }, []);

  return (
    <>
      <div className="bg-bgPrimary text-white " >
        <div className="">
          <h1 className="text-center font-serif text-2xl py-8 text-textSecondary ">All Projects</h1>

          {loder ? (
            <Loader />
          ) : (
            <div className="grid lg:grid-cols-4 pb-10 md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
              {projectDataList &&
                projectDataList.map((item, i) => {
                  return (
                    <div key={i} className="flex justify-center">
                      <div className="card bg-gray-400 shadow-xl transform transition duration-500 hover:scale-75 hover:shadow-2xl">
                        <Link target="_blank" to={item.url} >
                          <figure className="px-10 pt-10">
                            <img
                              src={item.img}
                              alt="Project"
                              className="rounded-xl w-full h-48 object-cover"
                            />
                          </figure>
                          <div className="card-body text-center">
                            <h2 className="card-title">{item?.name || "Project Title"}</h2>

                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
