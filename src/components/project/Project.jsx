import { useEffect } from "react";
import projectStore from "../../api-request/projectStore";
import { Link } from "react-router-dom";
import SkeletonLoader from "../loder/SkeletonLoader";
import { Helmet } from "react-helmet-async";

const Project = () => {
  const { projectDataListApi, projectDataList } = projectStore();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page scrolls to the top on load
    (async () => {
      await projectDataListApi(); // Fetch project data
    })();
  }, []);

  // Display loader if data is not available
  if (projectDataList === null || projectDataList.length === 0) {
    return <SkeletonLoader />;
  }

  // Render the project data
  return (
    <div className="bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100 text-white min-h-screen">
      <Helmet>
        <title>Project Page</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-center font-serif md:text-4xl py-3 md:py-8 text-gray-900 ">
          All Projects
        </h1>
        <div className="grid md:gap-5 mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-3 gap-3 md:pb-10">
          {projectDataList.map((item, i) => (
            <div key={i} className="flex justify-center ">
              <div className="card bg-gray-400 shadow-xl transition duration-500 hover:translate-x-3 hover:shadow-2xl flex flex-col justify-between min-h-full">
                <Link target="_blank" to={item.url} className="h-full">
                  <figure className="md:px-10 px-4 pt-4 md:pt-10">
                    <img
                      src={item.img}
                      alt={item?.name || "Project Image"}
                      className="rounded-xl w-20 h-20 md:w-48 md:h-48 object-cover"
                    />
                  </figure>
                  <div className="card-body text-center flex-grow flex flex-col justify-end md:pb-2">
                    <h2 className="md:text-xl text-[10px] text-gray-900 ">
                      {item?.name || "Project Title"}
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
