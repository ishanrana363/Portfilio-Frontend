import { useEffect, useState } from "react";
import projectStore from "../../api-request/projectStore";
import Loader from "../loder/Loder";
import { Link } from "react-router-dom";

const Project = () => {
  const { projectDataListApi, projectDataList } = projectStore();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on mount.
    const fetchData = async () => {
      setLoader(true);
      await projectDataListApi();
      setLoader(false);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-bgPrimary text-white min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-center font-serif text-2xl py-8 text-textSecondary">
          All Projects
        </h1>

        {loader ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
            {projectDataList && projectDataList.length > 0 ? (
              projectDataList.map((item, i) => (
                <div key={i} className="flex justify-center">
                  <div className="card bg-gray-400 shadow-xl transition duration-500 hover:translate-x-3 hover:shadow-2xl flex flex-col justify-between min-h-full">
                    <Link target="_blank" to={item.url} className="h-full">
                      <figure className="px-10 pt-10">
                        <img
                          src={item.img}
                          alt={item?.name || "Project Image"}
                          className="rounded-xl w-full h-48 object-cover"
                        />
                      </figure>
                      <div className="card-body text-center flex-grow flex flex-col justify-end pb-4">
                        <h2 className="card-title">{item?.name || "Project Title"}</h2>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center col-span-full text-lg">
                No projects available.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
