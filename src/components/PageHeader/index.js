import React from 'react'
import PageTitle from '../PageTitle'
import RefreshButton from '../RefreshButton'
import './PageHeader.css'

const PageHeader = ({title, load, loading, children}) => 
  <div className="page-header">
    { load && <RefreshButton load={load} loading={loading} /> }
    <PageTitle title={title} />
    {children}
  </div>

export default PageHeader
