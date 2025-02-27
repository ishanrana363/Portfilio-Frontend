import { useEffect, useState } from 'react';
import blogStore from '../../api-request/blogStore';
import BrandsSkeleton from './../../components/skeleton/brands-skeleton';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Animation from '../../animation/Animation';

const BlogPage = () => {
  const { blogListApi, blogList } = blogStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlogs = async () => {
      await blogListApi();
      setLoading(false);
    };
    fetchBlogs();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Animation>
        <Helmet>
          <title> Portfolio || Blog List Page </title>
        </Helmet>
        <div className="bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100">
          <div className="max-w-screen-xl mx-auto p-4 md:py-8">
            <h1 className="text-center md:text-3xl text-[16px] text-gray-900 font-mono">Blog List</h1>
            <p className="font-mono text-center md:text-xl text-gray-900 text-[10px]">
              A blog is a website for sharing personal thoughts, insights, news, or expert advice regularly.
            </p>
            {loading ? (
              <BrandsSkeleton />
            ) : (
              <div className="md:grid md:grid-cols-3 md:my-10 flex flex-col">
                {blogList.map((item, i) => (
                  <div key={i} className="mt-5 md:mt-0">
                    <Link to={`/blog-details/${item._id}`}>
                      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-110">
                        <div className="p-4 h-52 overflow-hidden">
                          <img
                            className="object-cover w-full md:h-48 rounded-lg"
                            src={item.img}
                            alt={item.name}
                          />
                        </div>
                        <div className="ml-4 md:mt-4 mt-2">
                          <p className="md:text-sm text-[9px] font-mono text-gray-900">
                          </p>
                        </div>
                        <div className="md:p-4 ml-3 md:h-24 overflow-hidden">
                          <p className="md:text-lg text-[10px] font-mono text-gray-900">
                            {item.description.slice(0, 50)}....
                          </p>
                        </div>
                        <div className="ml-4 mb-3 md:p-4">
                          <Link to={`/blog-details/${item._id}`} className="text-gray-900 md:text-[16px] text-[9px] font-bold">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Animation>
    </>
  );
};

export default BlogPage;
