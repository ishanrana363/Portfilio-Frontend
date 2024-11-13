import React from 'react'
import { Helmet } from 'react-helmet-async'

const Limitations = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Helmet>
                <title>Limitations - Portfolio</title>
            </Helmet>
            <div className='bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100 overflow-hidden'>
                <div className='max-w-screen-xl mx-auto overflow-hidden'>
                    <div className='flex text-white font-mono justify-between items-center overflow-hidden'>
                        <h1 className='md:py-16 px-4 lg:text-lg'>
                            [Company/Developer] shall not be liable for any damages, including but not limited to data loss, downtime, or any indirect or consequential damages arising from the use or inability to use the application, except where such liability is required by law.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Limitations
