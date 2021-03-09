import React from 'react'
import { Button } from '../Button'
import './RefreshButton.css'

export const RefreshButton = ({ load, loading }) => (
  <Button className="refresh-button btn-secondary" onClick={load}>
    <i className={loading ? 'fa fa-spinner' : 'fa fa-refresh'}></i>&nbsp;Refresh
  </Button>
)
