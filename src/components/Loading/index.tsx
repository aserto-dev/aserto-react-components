import React from 'react'
import styled from 'styled-components'
import loading from './loading.svg'

const Spinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #161719;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const Loading = () => (
  <Spinner>
    <img src={loading} alt="Loading" />
  </Spinner>
)
