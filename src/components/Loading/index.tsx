import React from 'react'
// @ts-ignore
import loading from './loading.svg'
import './Loading.css'

export const Loading = () =>
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
