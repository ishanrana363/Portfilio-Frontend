import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../../assets/image.json"

const BrandsSkeleton = () => {
    return (
        <div className="section py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    
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
