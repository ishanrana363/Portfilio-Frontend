import { useEffect } from 'react';
import blogStore from '../../api-request/blogStore';
import BrandsSkeleton from './../../components/skeleton/brands-skeleton';
import { div } from 'framer-motion/client';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import { to } from './../../../node_modules/moment/src/lib/moment/to';

const BlogPage = () => {
  window.scrollTo(0, 0);

  const { blogListApi, blogList } = blogStore();


  useEffect(() => {
    (async () => {
      await blogListApi();
    })();
    // eslint-disable-next-line
  }, []);

  if (blogList.length === 0) {
    return <div> <BrandsSkeleton />  </div>;
  }
  return (
    <div className='bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100' >
      <div className='max-w-screen-xl mx-auto py-8 ' >
        <h1 className='text-center md:text-3xl font-mono  ' >Blog List</h1>
        <p className='font-mono text-center md:text-xl text-[10px]  ' >A blog is a website for sharing personal thoughts, insights, news, or expert advice regularly.</p>
        <div className='grid md:grid-cols-3 md:my-10 ' >
          {
            blogList && blogList.map((item, i) => {
              return (
                <div key={i} >
                  <Link to={`/blog-details/${item._id}`}>
                    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden  transition-transform duration-300 transform hover:scale-110 ">
                      <div className="p-4 h-52 my-auto overflow-hidden ">
                        <img
                          className="object-cover w-full h-48 rounded-lg "
                          src={item.img}
                          alt={item.name}
                        />
                      </div>
                      <div>
                        <div className='ml-4 mt-4 ' >
                          <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
                          <p className="text-sm font-mono text-gray-900">
                            {
                              moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')
                            }
                          </p>
                        </div>
                      </div>
                      <div className="p-4 h-24 overflow-hidden my-auto ">
                        <p className="text-sm font-mono text-gray-600">{item.description.slice(0, 50)}....</p>
                      </div>
                      <div className="p-4">
                        <Link to={`/blog-details/${item._id}`} className="text-blue-500 hover:text-blue-600 font-bold">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BlogPage
