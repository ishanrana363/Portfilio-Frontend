import React from 'react'
import DataPrivacy from '../../components/data-privacy/DataPrivacy'
import { Helmet } from 'react-helmet-async'

const DataPrivacyPage = () => {
  return (
    <div>
        <Helmet>
            <title>Data Privacy - Portfolio</title>
            
        </Helmet>
      <div>
        <DataPrivacy></DataPrivacy>
      </div>
    </div>
  )
}

export default DataPrivacyPage
