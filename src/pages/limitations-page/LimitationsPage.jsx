import React from 'react'
import Limitations from '../../components/limitations/Limitations'
import { Helmet } from 'react-helmet-async'

const LimitationsPage = () => {
    window.scrollTo(0, 0);
  return (
    <div>
        <>
        <Helmet>
            <title>Limitations Page</title>
        </Helmet>
        </>
      <Limitations></Limitations>
    </div>
  )
}

export default LimitationsPage
