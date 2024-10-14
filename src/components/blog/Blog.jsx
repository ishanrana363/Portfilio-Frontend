import { useEffect, useState } from 'react';
import blogStore from './../../api-request/blogStore';
import { Helmet } from 'react-helmet-async';
import SkeletonLoader from '../loder/SkeletonLoader';

const Blog = () => {
  const { blogListApi, blogList } = blogStore();
  const [loader, setLoader] = useState(true); // Loader starts as true

  // Scroll to top and fetch blog data on component mount
  useEffect(() => {
    window.scrollTo(0, 0); 
    (async () => {
      await blogListApi();
      setLoader(false); // Disable loader after fetching data
    })();
  }, []);

  // Display skeleton loader if the data is still loading or empty
  if (loader || !blogList || blogList.length === 0) {
    return <SkeletonLoader />;
  }

  // Render the blog list if data is available
  return (
    <div className='bg-bgPrimary text-white font-mono py-8'>
      <Helmet>
        <title>Blog Page</title>
      </Helmet>

      <div className='max-w-screen-xl mx-auto'>
        <h3 className='lg:text-lgH3 md:text-mdH3 text-smH3 text-center mb-8'>
          All Blog
        </h3>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-8'>
          {blogList.map((item, i) => (
            <div key={i} className='bg-gray-800 p-4 rounded-md'>
              <iframe
                width='100%'
                height='300'
                src={`https://www.youtube.com/embed/${item?.url}`}
                title='YouTube video player'
                className='mx-auto'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>

              <p className='mt-4 lg:text-lgP md:text-mdP text-sm leading-8 line-clamp-4'>
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
