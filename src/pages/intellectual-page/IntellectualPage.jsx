import React from 'react'
import Intellectual from '../../components/Intellectual/Intellectual'
import { Helmet } from 'react-helmet-async'

const IntellectualPage = () => {
    window.scrollTo(0, 0);
  return (
    <div>
        <Helmet>
            <title>Intellectual Property</title>
        </Helmet>
      <div>
        <Intellectual></Intellectual>
      </div>
    </div>
  )
}

export default IntellectualPage
