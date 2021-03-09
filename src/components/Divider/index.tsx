import React from 'react'
import './Divider.css'

export type DividerProps = {
  marginBottom?: number
}

export const Divider: React.FC<DividerProps> = ({ marginBottom }) => (
  <hr className="page-divider" style={{ marginBottom }} />
)
