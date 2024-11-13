import { useEffect, useState } from "react";
import feedbackStore from "../../api-request/feedbackStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// CSS Import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loader from "../loder/Loder";
import { TbBrandSketch } from "react-icons/tb";
import BrandsSkeleton from "../skeleton/brands-skeleton";

const AllFeedback = () => {
    const [loader,setLoader] = useState(false)
    const { feedbackListApi, feedbackList } = feedbackStore();

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                setLoader(true);  // Show loader before fetching data
                await feedbackListApi();
                setLoader(false);  // Hide loader after fetching data
            } catch (error) {
                console.error("Failed to fetch feedback:", error);
            }
        };
        fetchFeedback();
    }, []);

    if (feedbackList.length===0) {
        return <BrandsSkeleton></BrandsSkeleton>  ;
    }

    return (
        <div className=" bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100" >
            <div className=" max-w-screen-xl mx-auto  " >
            <div className="">
            <h3 className="text-center text-gray-900 font-mono md:text-4xl py-4 md:py-10 font-bold md:mb-6">All Feedback</h3>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                speed={1000}
                autoplay={{ delay: 1000 }}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-full relative"
            >
                {feedbackList.map((fb) => (
                    <SwiperSlide
                        key={fb.id}
                        className="flex flex-col items-center justify-center md:p-4 h-[300px]" // Fixed height for uniformity
                    >
                        <img
                            src={fb.img}
                            alt={fb.name}
                            className="mx-auto w-24 h-24 rounded-full object-cover" // Set fixed width and height
                        />
                        <div className="my-4 text-center">
                            <p className="font-bold text-gray-900 text-[10px] md:text-xl">{fb.name}</p>
                            <p className="text-gray-900 md:text-lg text-[8px] ">{fb.feedback}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
        </div>
    );
};

export default AllFeedback;
