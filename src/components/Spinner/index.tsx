import React from 'react'
import styled, { keyframes } from 'styled-components'

const Waves = keyframes`
  0%   { top: 0;     opacity: 1; }
  50%  { top: 30px;  opacity: .2; }
  100% { top: 0;     opacity: 1; }
`

const Container = styled.div`
  width: 80px;
  height: 100px;
  margin: 100px auto;
  margin-top: calc(100vh / 2 - 50px);
  div {
    position: relative;
    box-sizing: border-box;
    float: left;
    margin: 0 10px 10px 0;
    width: 12px;
    height: 12px;
    border-radius: 18px;
    background: ${theme.lochivar100};
  }
  div:nth-child(4n + 1) {
    animation: ${Waves} 2s ease 0s infinite;
  }
  div:nth-child(4n + 2) {
    animation: ${Waves} 2s ease 0.2s infinite;
  }
  div:nth-child(4n + 3) {
    animation: ${Waves} 2s ease 0.4s infinite;
  }
  div:nth-child(4n + 4) {
    animation: ${Waves} 2s ease 0.6s infinite;
    margin-right: 0;
  }
`

const Spinner: React.FC = () => {
  return (
    <Container>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Container>
  )
}

export { Spinner }
