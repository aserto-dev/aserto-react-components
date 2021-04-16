import React from 'react'
import styled, { keyframes } from 'styled-components'
import { mapTestIdToProps } from '../../utils'

const LoadKeyFrame = keyframes`
    0%   {
      -o-transforms: translate(0px,0px),rotate(0deg);
      box-shadow: 0px 40px 0px 0px #2F989C,0px -40px 0px 0px #2F989C,40px 0px 0px 0px #2F989C,-40px 0px 0px 0px #2F989C,
      40px 40px 0px 0px #2F989C,-40px -40px 0px 0px #2F989C,40px -40px 0px 0px #2F989C,-40px 40px 0px 0px #2F989C;
    }

    25%{
      box-shadow: 0px 40px 0px 0px #2F989C,0px -40px 0px 0px #2F989C,40px 0px 0px 0px #2F989C,-40px 0px 0px 0px #2F989C,
        -40px -40px 0px 0px #2F989C,40px 40px 0px 0px #2F989C,-40px 40px 0px 0px #2F989C,40px -40px 0px 0px #2F989C;
    }

    50%{
      box-shadow: 0px -40px 0px 0px #2F989C,0px 40px 0px 0px #2F989C,-40px 0px 0px 0px #2F989C,40px 0px 0px 0px #2F989C,
        -40px -40px 0px 0px #2F989C,40px 40px 0px 0px #2F989C,-40px 40px 0px 0px #2F989C,40px -40px 0px 0px #2F989C;
    }

    70%{
      box-shadow: 0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,
      0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C;
    }

    75%{
      box-shadow: 0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,
      0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C;
      height:10px;
      width:10px;
    }

    80%{
      -o-transforms: translate(0px,0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,
      0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C;
      background-color: #2F989C;
      height:40px;
      width:40px;
    }

    85%{
      -o-transforms: translate(0px,0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,
      0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C;
      background-color: #2F989C;
      height:40px;
      width:40px;
    }

    90%{
      -o-transforms: translate(0px,0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,
      0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C,0px 0px 0px 0px #2F989C;
      background-color: #2F989C;
      height:10px;
      width:10px;
    }

    95%{
      box-shadow: 0px 40px 0px 0px #2F989C,0px -40px 0px 0px #2F989C,40px 0px 0px 0px #2F989C,-40px 0px 0px 0px #2F989C,
      40px 40px 0px 0px #2F989C,-40px -40px 0px 0px #2F989C,40px -40px 0px 0px #2F989C,-40px 40px 0px 0px #2F989C;
    }

    100%{
      -o-transforms: rotate(360deg);
      box-shadow: 0px 40px 0px 0px #2F989C,0px -40px 0px 0px #2F989C,40px 0px 0px 0px #2F989C,-40px 0px 0px 0px #2F989C,
      40px 40px 0px 0px #2F989C,-40px -40px 0px 0px #2F989C,40px -40px 0px 0px #2F989C,-40px 40px 0px 0px #2F989C;
    }

`

const Container = styled.div<{ show?: boolean }>`
  width: 80px;
  height: 100px;
  position: relative;
  display: block;
`

const Dots = styled.div`
  border-radius: 100%;
  height: 10px;
  width: 10px;
  background-color: #2f989c;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  box-shadow: 0px 40px 0px 0px #2f989c, 0px -40px 0px 0px #2f989c, 40px 0px 0px 0px #2f989c,
    -40px 0px 0px 0px #2f989c, 40px 40px 0px 0px #2f989c, -40px -40px 0px 0px #2f989c,
    40px -40px 0px 0px #2f989c, -40px 40px 0px 0px #2f989c;
  animation: ${LoadKeyFrame} 3s infinite linear;
`

export const Spinner: React.FC<{ testId?: string }> = ({ testId }) => {
  return (
    <Container {...mapTestIdToProps(testId)}>
      <Dots />
    </Container>
  )
}
