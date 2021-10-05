import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export type PlayButtonProps = React.ComponentPropsWithoutRef<'button'>

const PlayButtonContainer = styled.button`
  width: 42px;
  height: 42px;
  padding: 0;
  background: none;
  border: none;
  border-radius: 100%;

  fill: ${theme.lochivar70};

  &:hover {
    fill: ${theme.lochivar90};
  }

  &:focus {
    outline: none;
    fill: ${theme.lochivar100};
  }

  &:disabled {
    fill: ${theme.lochivar30};
    cursor: default;
  }
`

export const PlayButton: React.FC<PlayButtonProps> = (props) => {
  return (
    <PlayButtonContainer {...props}>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        preserveAspectRatio="none"
        viewBox="0 0 41.99999699397481 41.99999601375708"
      >
        <g transform="translate(0, 0)">
          <g transform="translate(4.721301208598927e-7, -0.000003331672143458819) rotate(0)">
            <path
              d="M21.18749,0.00104c-9.34969,-0.09325 -17.93495,6.11204 -20.46684,15.56138c-3.00075,11.19921 3.6434,22.71612 14.84234,25.71692c11.19899,3.0008 22.71559,-3.6435 25.71638,-14.84271c3.0007,-11.19921 -3.6435,-22.71608 -14.84239,-25.7169c-1.7498,-0.46887 -3.5181,-0.70142 -5.2495,-0.71869zM16.00049,11.50021l15.99849,9.49941l-15.99849,9.49931z"
              style={{ strokeWidth: 0, strokeLinecap: 'butt', strokeLinejoin: 'miter' }}
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </g>
      </svg>
    </PlayButtonContainer>
  )
}
