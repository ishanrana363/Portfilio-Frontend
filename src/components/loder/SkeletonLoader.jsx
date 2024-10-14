import React from 'react';
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../../assets/image.json";

const SkeletonLoader = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 p-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-white shadow-sm rounded-lg overflow-hidden">
                        {/* Lottie Animation */}
                        <Lottie
                            className="w-full h-40"  // Adjust height to be more compact
                            animationData={ImagePlaceholder}
                            loop={true}
                        />

                        {/* Card Body */}
                        <div className="p-4 space-y-2">
                            <Skeleton height={16} width="80%" />
                            <Skeleton height={16} width="100%" />
                            <Skeleton height={16} width="90%" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonLoader;

