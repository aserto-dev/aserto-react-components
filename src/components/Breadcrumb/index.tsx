import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../theme'
import { mapTestIdToProps } from '../../utils'

export type BreadcrumbProps = {
  title: string
  usePathAsBreadcrumb?: boolean
  breadcrumbText?: string
  breadcrumbUrl?: string
  testId?: string
}

const BreadcrumbContainer = styled.div`
  width: 100%;
  font-size: 24px;
  color: ${theme.grey100};
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  usePathAsBreadcrumb,
  breadcrumbText,
  breadcrumbUrl,
  testId,
}) => {
  // if the flag was passed as true, construct the breadcrumb from the path
  if (usePathAsBreadcrumb) {
    const path = window.location.pathname
    const components = path.split('/')
    if (components.length > 1) {
      const tabName = components[1]
      const capitalizedTabName = tabName.charAt(0).toUpperCase() + tabName.slice(1)
      const breadcrumb = <Link to={`/${tabName}`}>{capitalizedTabName}</Link>
      return (
        <BreadcrumbContainer>
          {breadcrumb} / {title}
        </BreadcrumbContainer>
      )
    }

    // no path to construct breadcrumb from, so return just the title
    return <BreadcrumbContainer>{title}</BreadcrumbContainer>
  }

  // if the breadcrumb properties were passed in, construct the breadcrumb from them
  if (breadcrumbText && breadcrumbUrl) {
    const breadcrumb = <Link to={`${breadcrumbUrl}`}>{breadcrumbText}</Link>
    return (
      <BreadcrumbContainer>
        {breadcrumb} / {title}
      </BreadcrumbContainer>
    )
  }

  // as a last resort, just use the title
  return <BreadcrumbContainer {...mapTestIdToProps(testId)}>{title}</BreadcrumbContainer>
}
