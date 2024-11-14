import React, { useEffect, useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import blogStore from '../../api-request/blogStore';
import { useParams } from 'react-router-dom';
import BrandsSkeleton from './../../components/skeleton/brands-skeleton';
import moment from 'moment';
import stockStore from '../../api-request/stockStore';

function StackDetails() {
    
    window.scrollTo(0, 0);
    const { stockListById, stockListByIdApi } = stockStore();
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            await stockListByIdApi(id);
        })();
    }, [id]);

   
   
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
    if (!stockListById || !stockListById?.video) {
        return <BrandsSkeleton />;
    }

    return (
        <div className="relative -z-0">
            {/* Background Gradient with Opacity */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 opacity-70"></div>

            <div className="relative w-11/12 mx-auto z-10">
                {/* Image Section */}
                <div className=" md:w-[50%] mx-auto h-auto py-8 overflow-hidden">
                    <img
                        src={stockListById?.img}
                        alt=""
                        className="transform transition duration-300 ease-in-out hover:scale-110"
                    />
                </div>

                <div className="py-3 md:py-8 px-2 md:px-4 lg:px-16">
                    {/* Video Section */}
                    <div className="w-full md:w-1/2 mx-auto">
                        <div className="transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg rounded-lg overflow-hidden">
                            <div className="relative w-full h-64 lg:h-80">
                                <ReactPlayer
                                    url={stockListById?.video}
                                    className="w-full h-full object-cover"
                                    playing={false}
                                    light
                                    width="100%"
                                    height="100%"
                                    style={{ maxWidth: '100%' }}
                                />
                                <button
                                    onClick={() => handlePlay(stockListById?.video)}
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

                {/* Blog Description and Date */}
                <div>
                    <p className=" md:mb-4 font-mono text-[10px] md:text-lg text-gray-900">
                        {stockListById.description}
                    </p>
                    <p className="text-end pb-4 mt-3 md:mt-6 font-mono text-[10px] md:text-lg text-gray-900">
                        {moment(stockListById.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StackDetails;
