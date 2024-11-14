import { useEffect, useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import BrandsSkeleton from '../../components/skeleton/brands-skeleton';
import stockStore from '../../api-request/stockStore';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { div } from 'framer-motion/client';
import { Helmet } from 'react-helmet-async';

function StackOverFlow() {
    const [loader, setLoader] = useState(false);
    window.scrollTo(0, 0);
    const { overflowListApi, overflowList } = stockStore();

    useEffect(() => {
        (async () => {
            setLoader(true);  // Show loader before fetching data
            await overflowListApi();
            setLoader(false);  // Hide loader after fetching data
        })();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let value = e.target.value;
        if (value.length === 0) {
            setLoader(true); //
            await overflowListApi();
            setLoader(false);  // Hide loader after fetching data
        }
        setLoader(true); // Show loader after fetching data
        await overflowListApi(value);
        // Hide loader after fetching data
        setLoader(false);
    };



    return (
        <>
            <Helmet>
                <title>Portfolio || Stack Overflow Page</title>
            </Helmet>
            <div className='bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 opacity-70 ' >
                <div className="w-11/12 mx-auto">
                    <div className="lg:ml-[60px] ml-3 text-[#21c45e] font-bold">
                        <div className="flex justify-end items-center space-x-4">
                            <div className="w-1/4">
                                <label className="block text-sm font-medium mb-1"></label>
                                <input
                                    onChange={handleSubmit}
                                    type="text"
                                    placeholder="Enter stack name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 ">
                        {
                            overflowList && overflowList.map((item, i) => {
                                return (
                                    <div key={i} className="mt-5 md:mt-0  ">
                                        <Link to={`/stack-details/${item._id}`}>
                                            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-110">
                                                <div className="p-4 h-52 overflow-hidden">
                                                    <img
                                                        className="object-cover w-full md:h-48 rounded-lg"
                                                        src={item.img}
                                                        alt={item.name}
                                                    />
                                                </div>
                                                <div>
                                                    <div className='ml-4 md:mt-4 mt-2'>
                                                        <h2 className="md:text-xl text-[15px] font-bold text-gray-900">{item.categories}</h2>
                                                        <p className="md:text-sm text-[9px] my-3 font-mono text-gray-900">
                                                            {
                                                                item?.name
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="md:p-4   overflow-hidden">
                                                    <p className="md:text-lg text-[10px] ml-4 md:ml-0 text-justify font-mono text-gray-900">{item.description.slice(0, 20)}....</p>
                                                </div>
                                                <div className="ml-4 mb-3 md:p-4">
                                                    <Link to={`/blog-details/${item._id}`} className="text-gray-900 md:text-[16px] text-[9px] font-bold">
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            {
                loader && (
                    <div className="">
                        <BrandsSkeleton />
                    </div>
                )
            }
        </>
    );
}

export default StackOverFlow;
