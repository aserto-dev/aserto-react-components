import React from 'react'
import { Link } from 'react-router-dom'
import './Breadcrumb.css'

const BreadCrumb = ({title, usePathAsBreadcrumb, breadcrumbText, breadcrumbUrl}) => {
  // if the flag was passed as true, construct the breadcrumb from the path
  if (usePathAsBreadcrumb) {
    const path = window.location.pathname;
    const components = path.split('/');
    if (components.length > 1) {
      const tabName = components[1];
      const capitalizedTabName = tabName.charAt(0).toUpperCase() + tabName.slice(1);
      const breadcrumb = <Link to={`/${tabName}`}>{capitalizedTabName}</Link>;
      return <div className="page-breadcrumb">{breadcrumb} / {title}</div>
    }

    // no path to construct breadkcrumb from, so return just the title
    return <div className="page-breadcrumb">{title}</div>
  } 

  // if the breadcrumb properties were passed in, construct the breadcrumb from them
  if (breadcrumbText && breadcrumbUrl) {
    const breadcrumb = <Link to={`${breadcrumbUrl}`}>{breadcrumbText}</Link>;
    return <div className="page-breadcrumb">{breadcrumb} / {title}</div>  
  }

  // as a last resort, just use the title
  return <div className="page-breadcrumb">{title}</div>
}

export default BreadCrumb
