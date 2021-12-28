import React from 'react'

export const Ellipsis = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.41421,
      }}
    >
      <g transform="matrix(1,0,0,1,-2,0)">
        <circle cx="4" cy="8" r="2" style={{ fill: '#a0a0a0' }} />
      </g>
      <g transform="matrix(1,0,0,1,10,0)">
        <circle cx="4" cy="8" r="2" style={{ fill: '#a0a0a0' }} />
      </g>
      <g transform="matrix(1,0,0,1,4,0)">
        <circle cx="4" cy="8" r="2" style={{ fill: '#a0a0a0' }} />
      </g>
    </svg>
  )
}
