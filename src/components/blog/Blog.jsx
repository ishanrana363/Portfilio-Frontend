import React, { useEffect, useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import blogStore from '../../api-request/blogStore';
import BrandsSkeleton from '../skeleton/brands-skeleton';


function Blog() {
  const { blogListApi, blogList } = blogStore();
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  window.scrollTo(0, 0);

  useEffect(() => {
    (async () => {
      await blogListApi();
    })();
    // eslint-disable-next-line
  }, []);

  const handlePlay = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  if(blogList.length === 0) {
    return <div> <BrandsSkeleton/>  </div>;
  }

return (
    <div className="w-11/12 mx-auto">
      <div className="lg:ml-[60px] ml-3 text-[#21c45e] font-bold">
      </div>
      <div className="py-3 md:py-8 px-2 md:px-4 lg:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Video Section */}
          {
            blogList.map((item, i) => {
              return (
                <div key={i} className="transition-all transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
                  <div className="relative w-full h-64 lg:h-80">
                    
                    <button
                      onClick={() => handlePlay(item.url)}
                      className="absolute inset-0 flex justify-center items-center text-white text-3xl rounded-full"
                    >
                      <FaPlay className="bg-white text-red-600 p-2 rounded-full w-12 h-12" />
                    </button>
                  </div>
                  <div className="lg:mt-4 mt-3 p-4">
                    
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

      {/* Modal for Video */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-full h-full lg:w-3/4 lg:h-3/4 max-w-screen-xl max-h-screen-xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute z-50 top-4 right-4 text-green-500 bg-green-500 text-2xl md:text-3xl"
            >
              <FaTimes />
            </button>
            <div className="relative w-full h-full">
              <ReactPlayer
                width="100%"
                height="100%"
                url={currentVideo}
                className="w-full h-full object-cover"
                controls
                playing
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
