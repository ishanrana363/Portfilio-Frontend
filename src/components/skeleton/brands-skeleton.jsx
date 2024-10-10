import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../../assets/image.json"

const BrandsSkeleton = () => {
    return (
        <div className="section py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Top Brands</h1>
                    <span className="text-sm mb-5 text-gray-500">
                        Explore a World of Choices Across Our Most Popular <br /> Shopping Categories
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        Array.from({ length: 16 }).map((_, index) => (
                            <div key={index} className="p-2">
                                <div className="bg-white rounded-lg shadow-md h-full">
                                    <div className="p-4">
                                        <Lottie className="w-full h-32" animationData={ImagePlaceholder} loop={true} />
                                        <Skeleton count={1} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandsSkeleton;
