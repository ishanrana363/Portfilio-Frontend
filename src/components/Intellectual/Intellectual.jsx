import React from 'react'
import { Helmet } from 'react-helmet-async';

const Intellectual = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Helmet>
                <title>Intellectual Property</title>
            </Helmet>
            <div className='bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100 overflow-hidden'>
                <div className='max-w-screen-xl mx-auto overflow-hidden'>
                    <div className='flex text-white font-mono justify-between items-center overflow-hidden'>
                        <h1 className='md:py-16 px-4 lg:text-lg'>
                            All custom code, including backend logic and frontend components developed specifically for the client, shall remain the intellectual property of the client upon project completion, unless otherwise agreed upon in writing. Pre-existing proprietary tools and open-source libraries incorporated into the project will be governed by their respective licenses.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intellectual
