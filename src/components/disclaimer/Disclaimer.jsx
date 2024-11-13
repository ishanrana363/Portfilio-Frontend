import React from 'react';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
    window.scrollTo(0, 0);
    return (
        <>
        <Helmet>
            <title>Desclimer page</title>
        </Helmet>
            <div className='bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100 overflow-hidden'>
                <div className='max-w-screen-xl mx-auto overflow-hidden'>
                    <div className='flex text-white font-mono justify-between items-center overflow-hidden'>
                        <h1 className='md:py-8 px-4 lg:text-lg'>
                            The web development services provided through the MERN stack (MongoDB, Express.js, React, and Node.js) are intended to deliver responsive and data-driven applications. The development process adheres to industry best practices for data security, privacy, and compliance. However, as the final deployment and integration are controlled by the client, [Company/Developer] is not liable for any misuse, data breaches, or compliance violations that arise post-deployment or from third-party integrations.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;
