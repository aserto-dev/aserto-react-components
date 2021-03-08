import React from 'react'
import './PageTitle.css'

export type PageTitleProps = {
  title: string
}

export const PageTitle: React.FC<PageTitleProps> = ({title}) =>
  <div className="page-title">
  {title}
  </div>

