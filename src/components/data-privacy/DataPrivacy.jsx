import React from 'react'
import { Helmet } from 'react-helmet-async'

const DataPrivacy = () => {
  window.scrollTo(0, 0)
  return (
    <div>
      <Helmet>
        <title>Data Privacy - Portfolio</title>
      </Helmet>
      <div>
        <div className='bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100 overflow-hidden'>
          <div className='max-w-screen-xl mx-auto overflow-hidden'>
            <div className='flex text-white font-mono justify-between items-center overflow-hidden'>
              <h1 className='md:py-16 px-4 lg:text-lg'>
                [Company/Developer] does not store, manage, or assume responsibility for any client or user data unless explicitly agreed upon and stated in the project agreement. Clients are responsible for ensuring that all use of the application complies with relevant laws and regulations, including but not limited to GDPR, CCPA, and COPPA.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataPrivacy
