import React from 'react'
import { PageTitle } from '../PageTitle'
import { RefreshButton } from '../RefreshButton'
import './PageHeader.css'

export type PageHeaderProps = {
    title: string,
    load?: () => void,
    loading?: boolean,
    children: React.ReactElement
}

export const PageHeader: React.FC<PageHeaderProps> = ({title, load, loading, children}) =>
  <div className="page-header">
    { load && <RefreshButton load={load} loading={loading} /> }
    <PageTitle title={title} />
    {children}
  </div>

