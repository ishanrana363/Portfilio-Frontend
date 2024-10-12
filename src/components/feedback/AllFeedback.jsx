import { useEffect } from "react";
import feedbackStore from "../../api-request/feedbackStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// CSS Import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AllFeedback = () => {
    const { feedbackListApi, feedbackList } = feedbackStore();

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                await feedbackListApi();
            } catch (error) {
                console.error("Failed to fetch feedback:", error);
            }
        };
        fetchFeedback();
    }, []);

    if (!feedbackList.length) {
        return <p className="text-center text-gray-500">No feedback available.</p>;
    }

    return (
        <div className="my-8">
            <h3 className="text-center text-2xl font-bold mb-6">All Feedback</h3>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 3000 }}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-full relative"
            >
                {feedbackList.map((fb) => (
                    <SwiperSlide key={fb.id} className="flex flex-col items-center p-4">
                        <img 
                            src={fb.img}
                            alt={fb.name}
                            className=" mb-2 mx-auto "
                        />
                        <p className="font-bold text-lg">{fb.name}</p>
                        <p className="text-gray-600 text-center">{fb.feedback}</p>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
};

export default AllFeedback;
