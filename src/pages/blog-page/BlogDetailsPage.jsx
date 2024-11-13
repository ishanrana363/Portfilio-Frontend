import React, { useEffect, useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import blogStore from '../../api-request/blogStore';
import { useParams } from 'react-router-dom';

function BlogDetailsPage() {
    const { blogListApi, blogList } = blogStore();
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            await blogListApi();
        })();
        // eslint-disable-next-line
    }, []);

    const singleBlogData = blogList.find(blog => blog._id === id);

    // Handle modal close on Escape key press
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Escape') {
                handleCloseModal();
            }
        };

        if (showModal) {
            window.addEventListener('keydown', handleKeyPress);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [showModal]);

    const handlePlay = (videoUrl) => {
        setCurrentVideo(videoUrl);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentVideo(null);
    };

    // Handle case where video URL is missing or invalid
    if (!singleBlogData || !singleBlogData?.url) {
        return <div>No video available for this blog</div>;
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="py-3 md:py-8 px-2 md:px-4 lg:px-16 bg-white">
                <div className=" w-1/2 mx-auto ">
                    {/* Video Section */}
                    <div className="transition-all transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
                        <div className="relative w-full h-64 lg:h-80">
                            {/* ReactPlayer */}
                            <ReactPlayer
                                url={singleBlogData?.url}
                                className="w-full h-full object-cover"
                                playing={false}
                                light
                                width="100%"
                                height="100%"
                            />
                            {/* Play Button */}
                            <button
                                onClick={() => handlePlay(singleBlogData?.url)}
                                className="absolute inset-0 flex justify-center items-center text-white text-3xl rounded-full"
                            >
                                <FaPlay className="bg-white text-red-600 p-2 rounded-full w-12 h-12" />
                            </button>
                        </div>
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
        </div>
    );
}

export default BlogDetailsPage;
