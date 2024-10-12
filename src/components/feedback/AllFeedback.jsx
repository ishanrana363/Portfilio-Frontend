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
                speed={1000}
                autoplay={{ delay: 1000 }}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-full relative"
            >
                {feedbackList.map((fb) => (
                    <SwiperSlide
                        key={fb.id}
                        className="flex flex-col items-center justify-center p-4 h-[300px]" // Fixed height for uniformity
                    >
                        <img
                            src={fb.img}
                            alt={fb.name}
                            className="mx-auto w-24 h-24 rounded-full object-cover" // Set fixed width and height
                        />
                        <div className="my-4 text-center">
                            <p className="font-bold text-lg">{fb.name}</p>
                            <p className="text-gray-600">{fb.feedback}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AllFeedback;
